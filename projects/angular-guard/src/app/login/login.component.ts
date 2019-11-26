import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) { 

    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {

  }

  login() {
    this.authService.getUser(this.form.value.username)
      .subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/authenticated-area']);
        } else {
          alert('Usuário ou senha incorreta');
        }
      });
  }
}
