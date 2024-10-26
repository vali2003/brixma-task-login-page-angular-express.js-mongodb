import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    username:any;
    password:any;
    emp:any;
    
    
    constructor(private route:Router, private service:DataService){}

    

    checkLogin(){
      this.service.getemp().subscribe((result)=>{
       this.emp=result;
       //console.log(this.data);
  
       let res=this.emp.findIndex((i:any)=>i.empName==this.username);
       
      
  
       if(res!=null && res!=-1){
        if(this.emp[res].empPassword==this.password){
          this.route.navigateByUrl('home');
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Password!"});
        }
       }
  
       else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found!",
         });
       }
  
      }) 
    }
  }









    // checkLogin(){


    //   this.service.getProducts().subscribe((result)=>{
    //     console.log(this.emp.empName);
    //     console.log(this.emp.empPassword);
        
    //     if(this.username==this.emp.empName && this.password==this.emp.empPassword){
    //       this.route.navigateByUrl("home");
    //     }
    //     else{
    //       alert("Invalid Username or Password !");
    //     }
    //   })

    //   // if(this.username=="admin" && this.password=='1234'){
    //   //   this.route.navigateByUrl("/admin/home");
    //   //   this.user={
    //   //     username:this.username,
    //   //     password:this.password
    //   //   } 
    //   //   localStorage.setItem('user',JSON.stringify(this.user));
    //   // }
    //   // else if(this.password=='0000'){
    //   //   this.route.navigateByUrl("/user/home");
    //   //   this.user={
    //   //     username:this.username,
    //   //     password:this.password
    //   //   } 
    //   //   localStorage.setItem('user',JSON.stringify(this.user));
    //   // }
    //   // else{
    //   //   alert("Invalid Username or Password !");
    //   // }
    // }



