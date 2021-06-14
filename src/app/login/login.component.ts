import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserAuthService} from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  emailValue: string = "";
  passwordValue: string = "";
  loading: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute, public authService: UserAuthService) { 
    this.loginForm = this.formBuilder.group({
      Email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      Password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    // this.createLoginForm();
  }

  onSubmit(){
    this.emailValue=this.loginForm.controls["Email"].value;
    this.passwordValue=this.loginForm.controls["Password"].value;
    this.authService.validateUserLogin(this.emailValue, this.passwordValue);
  }
    
  }

  
