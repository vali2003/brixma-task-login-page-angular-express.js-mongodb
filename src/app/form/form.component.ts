import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

constructor(private service:DataService){}
adddata:any;
username:any;
email:any;
phone:any;
msg:any;

add(){
this.adddata={
empName:this.username,
empEmail:this.email,
empPhone:this.phone
}

// var gotdata=JSON.stringify(this.adddata);


this.service.add(this.adddata).subscribe((result)=>{
  this.msg=result;
  alert(this.msg);
});

}

}
