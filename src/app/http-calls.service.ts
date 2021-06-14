import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(email: string, password: string){
    let reqObject = {
      email: email, 
      password: password
    };
    console.log(reqObject);
     return this.http.post('https://tutorial4-api.herokuapp.com/api/users/login', reqObject);
  }

getAllUsers(){
  return this.http.get('https://tutorial4-api.herokuapp.com/api/users/');
}

getUserById(id:any){
return this.http.get('https://tutorial4-api.herokuapp.com/api/users/' + id);

}

}
