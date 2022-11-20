import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

export interface minMaxAge {
  readonly min: number;
  readonly max: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  private _filterSubject: BehaviorSubject<minMaxAge> = new BehaviorSubject<minMaxAge>({ min: 0, max: 0 });
  public filter$: Observable<minMaxAge> = this._filterSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = this._employeesService.getAll().pipe(
    combineLatestWith(this.order$, this.filter$),
    map(([employees, order, filter]: [EmployeeModel[], string, minMaxAge]) => employees.sort((a, b) => {
      if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
      if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
      return 0
    }).filter((employee) =>filter.max === 9999 ? true : employee.age >= filter.min && employee.age <= filter.max )));
  public orders$: Observable<string[]> = of(['asc', 'desc']);
  public filters$: Observable<minMaxAge[]> = of([
    { min: 0, max: 9999 },
    { min: 0, max: 20 },
    { min: 21, max: 30 },
    { min: 31, max: 40 },
    { min: 41, max: 50 },
    { min: 51, max: 100 },
  ]);

  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  filter(min: number, max: number): void {
    this._filterSubject.next({min: min, max: max})
  }
}
