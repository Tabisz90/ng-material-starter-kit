export interface GetAllEmployeesResponse {
  readonly data: EmployeeResponse[];
}

export interface EmployeeResponse {
  readonly id: number;
  readonly employee_name: string;
  readonly employee_salary: number;
  readonly employee_age: number;
}
