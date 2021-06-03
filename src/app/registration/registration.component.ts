import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  alphanumericPattern = "([a-zA-Z0-9 ]+)";
  passwordPattern = "([a-zA-Z0-9-_.]+[@]+[a-zA-Z0-9-_.]+[.]+[a-zA-Z0-9]+)";
  emailPattern="([a-zA-Z0-9-_.]+[@]+[a-zA-Z0-9-_.]+[.]+[a-zA-Z0-9]+)";

constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute) { 
  }

createForm(){
  this.userForm = this.formBuilder.group({
    firstName: ['',[Validators.required, Validators.pattern(this.alphanumericPattern)]],
    lastName: ['', [Validators.required,Validators.pattern(this.alphanumericPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['',[Validators.required,Validators.minLength(8)]], //check if 8 min still need to apply
    confirm_password: ['',Validators.required],
 }, 
  { validator: this.checkPassword()
 }
 );
}

checkPassword() { 
  return (userForm:FormGroup)=> {
    let pass = userForm.controls.password;
  let confirmPass = userForm.controls.confirm_password;

if(pass.value !== confirmPass.value){
confirmPass.setErrors({notSame: true });
  }
  }
}

onSubmit(){
  if(this.userForm.valid){
  this.router.navigate(['/homepage'],{ relativeTo: this.route });
  }
};


ngOnInit(): void{
  this.createForm();
};
}


