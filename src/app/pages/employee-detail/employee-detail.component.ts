import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class EmployeeDetailComponent implements OnInit {
  id: string = '';
  employee: Employee = {
    fullName: '',
    gender: '',
    email: '',
    phone: '',
    department: '',
    hireDate: '',
  };
  constructor(
    private route: ActivatedRoute,
    private employeeDataService: EmployeeDataService
  ) {}

  ngOnInit(): void {
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.fetchEmployee();
  }

  fetchEmployee() {
    this.employeeDataService.fetchEmployee(this.id).subscribe((data) => {
      this.employee = <Employee>data;
    });
  }
}
