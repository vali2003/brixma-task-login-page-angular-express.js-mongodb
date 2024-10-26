import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private service:DataService){}

emp:any;
msg:any;



ngOnInit(){
  this.service.getemp().subscribe((result)=>{
    this.emp=result;
    console.log(this.emp);
  })
}

delete(p:any){
  this.service.delete(p).subscribe((result)=>{
    this.msg=result;
    alert(this.msg);
  })
  this.service.getemp().subscribe((result)=>{
    this.emp=result;
  })
}



update(p:any){
  this.service.update(p).subscribe((result)=>{
    this.msg=result;
    alert(this.msg);
  });
}

}
