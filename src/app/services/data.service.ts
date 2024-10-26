import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  
  getemp(){
    return this.http.get('http://localhost:4321/',({responseType:'json'}));
  }

  delete(emp:any){
    let res=emp._id;
    return this.http.delete(`http://localhost:4321/del/${res}`,({responseType:'text'}));
  }

  add(p:any){
    let res=p;
    return this.http.post(`http://localhost:4321/add`,res,({responseType:'text'}));
  }
  
  update(p:any){
    let res=p;
    console.log(res);
    return this.http.put(`http://localhost:4321/up/66486756daee9ddee54b73d2`,res,({responseType:'text'}));
  }

}
