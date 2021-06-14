import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loading : boolean = false;
  allUserProfiles: any[] = [];
  loggedinUser: any;
  allUserList: any;
  profileSelected:any;
  loggedInStatus: any;
  
  constructor(private httpservice: HttpCallsService, private router: Router) { }

  public addNewUser(obj:any){
    this.allUserProfiles.push(obj)
  }

  public validateUserLogin(email:string, password:string){
  this.loading = true;
  this.httpservice.loginUser(email, password)
  .subscribe((result: any) => {
    console.log(result)
    if(result && result.status){
      this.setUserLoggedInStatus(result);
      this.getAllUsersCall();
        
    }
  },
  (error: any) =>{
    this.setUserLoggedInStatus(error.error);
    this.loading =false
  });
  }

  getAllUsersCall(){
    this.loading =true
    this.httpservice.getAllProfileUsers()
    .subscribe( 
      (result: any) => {
      if(result && result.data){
        this.setAllUsers(result.data);
        this.loading = false
        this.router.navigate(['/profile'])
      }
    },
    (error: any) =>{
      console.log(error)
      this.loading =false
    })    
  }

  getUserByIdCall(id : any){
    this.loading =true
    this.httpservice.getUserProfileById(id)
    .subscribe( (result: any) => {
      if(result && result.data){
        this.setSelectedUsers(result.data);
        this.loading = false
        this.router.navigate(['/profile-detail'])
      }
    },
    (error: any) =>{
      console.log(error)
      this.loading =false
    }
    );

  }

  public getLoggedinUser(){
    return this.loggedinUser;
  }  

  public setLoggedinUser(user : any){
    this.loggedinUser = user;
  }

  setAllUsers(userProfileList: any){
    this.allUserList = userProfileList;  
  }

  getAllUsers(){
    return this.allUserList;
  }

  setSelectedUsers(user: any){
    this.profileSelected = user;
  }

  getSelectedUserProfile(){
    return this.profileSelected;
  }

  getUserLoggedInStatus(){
    return this.loggedInStatus;
  }

  setUserLoggedInStatus(status: boolean){
    this.loggedInStatus = status;
  }
}