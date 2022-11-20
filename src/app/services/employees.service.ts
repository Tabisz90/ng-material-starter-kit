import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EmployeeModel} from '../models/employee.model';
import {EmployeeResponse, GetAllEmployeesResponse} from '../response/employee.response';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<GetAllEmployeesResponse>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response) =>
        response.data.map((employee) =>
          (
            {
              id: employee.id,
              age: employee.employee_age,
              name: employee.employee_name,
              salary: employee.employee_salary
            }
          )
        )
      )
    );
  }

  delete(id: number): Observable<EmployeeResponse> {
    return this._httpClient.delete<EmployeeResponse>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
