import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '@core/services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl = '';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  signIn(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authService
      .login(email, password)
      .pipe(first())
      .subscribe(z => {
        this.router.navigate([this.returnUrl]);
      });
  }

  register(): void {}

  isValid(): boolean {
    return this.loginForm ? this.loginForm.valid : true;
  }
}
