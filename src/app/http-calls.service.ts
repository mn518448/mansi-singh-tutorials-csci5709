import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginUser(email: string, password: string){
    let reqObject = {
      email: email, 
      password: password
    };
     return this.httpClient.post('https://tutorial4-api.herokuapp.com/api/users/login', reqObject);
  }

getAllProfileUsers(){
  return this.httpClient.get('https://tutorial4-api.herokuapp.com/api/users/');
}

getUserProfileById(id:any){
return this.httpClient.get('https://tutorial4-api.herokuapp.com/api/users/' + id);
}

}
