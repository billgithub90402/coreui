import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // ...
  }

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.isLoading = true;
      this.authService.login(val.username, val.password)
        .subscribe(
          res => {
            console.log(res);
            setTimeout(() => {
              this.isLoading = false;
              this.router.navigateByUrl('/dashboard');
            }, 3000);
          }
        );
    }
  }
}
