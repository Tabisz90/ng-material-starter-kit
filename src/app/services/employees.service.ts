import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EmployeeModel} from '../models/employee.model';
import {GetAllEmployeesResponse} from '../response/get-all-employees.response';
import {GetOneEmployeeResponse} from "../response/get-one-employee.response";

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<GetAllEmployeesResponse>(`https://dummy.restapiexample.com/api/v1/employees`).pipe(
      map((response) =>
        response.data.map(((employeeResponse) => ({
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary
            })
          )
        )
      )
    );
  }

  getOne(id: number): Observable<EmployeeModel> {
    return this._httpClient.get<GetOneEmployeeResponse>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map((employeeResponse) => ({
          id: employeeResponse.data.id,
          name: employeeResponse.data.employee_name,
          salary: employeeResponse.data.employee_salary
        })
      )
    );
  }
}
