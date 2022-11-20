import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {EmployeeModel} from '../models/employee.model';
import {EmployeeModelResponse, GetAllEmployeesResponse} from "../response/get-all-employees.response";


@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<GetAllEmployeesResponse>(`https://dummy.restapiexample.com/api/v1/employees`).pipe(
      map((response) =>
        response.data.map((employee: EmployeeModelResponse) =>
          ({
            id: employee.id,
            name: employee.employee_name,
            age: employee.employee_age,
            salary: employee.employee_salary,
          })
        )
      )
    )
  };
}
