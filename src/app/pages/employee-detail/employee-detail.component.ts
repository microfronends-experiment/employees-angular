import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

interface Employee {
  fullName: string;
  gender: string;
  email: string;
  phone: string;
  department: string;
  hireDate: string;
}

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  id: string = '';
  employee: Employee = {
    fullName: '',
    gender: '',
    email: '',
    phone: '',
    department: '',
    hireDate: '',
  };
  paramsSubscription: any;
  constructor(
    private route: ActivatedRoute,
    private employeeDataService: EmployeeDataService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = <string>params.get('id');
        this.fetchEmployee(this.id);
      }
    );
  }

  fetchEmployee(id: string) {
    this.employeeDataService.fetchEmployee(id).subscribe((data) => {
      this.employee = <Employee>data;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
