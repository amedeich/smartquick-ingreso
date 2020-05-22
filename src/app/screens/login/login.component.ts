import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  err = false;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login = async () => {
    if (this.err) {
      this.err = false;
    }
    if (this.form.invalid) {
      return;
    }
    const _user = {...this.form.value};
    const login: any = await this.dataService.login(_user);
    if (!login) {
      this.err = true;
      return console.error('Ha ocurrido un error');
    }
    localStorage.setItem('____SQ', JSON.stringify(login));
    this.dataService._loggedUser = login;
    this.router.navigateByUrl('home');
  }

}
