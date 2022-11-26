import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-two-column-employee-list',
  templateUrl: './two-column-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoColumnEmployeeListComponent {
  private _selectedEmployeeSubject: Subject<number> = new Subject<number>();
  public selectedId$: Observable<number> = this._selectedEmployeeSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  readonly selectedEmployee$: Observable<EmployeeModel> = this.selectedId$.pipe(switchMap((selectedId) => this._employeesService.getOne(selectedId)));

  constructor(private _employeesService: EmployeesService) {
  }

  select(selectedId: number): void {
    this._selectedEmployeeSubject.next(selectedId);
  }
}
