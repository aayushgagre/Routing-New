import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-emp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{

    public empNew:any;
    public constructor(private myService: EmployeeService) {

    }

    empAll:any[]=[];
    empNew1:any[]=[];
    ngOnInit(){
     //   this.myService.getAllEmployee().subscribe((data:any)=>this.empAll=data);
     this.empNew1=this.myService.sendEmployee();
    }


        
  
}