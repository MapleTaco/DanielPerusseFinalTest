import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../userdef';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public error: string;

  constructor(private auth: AuthorizeService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(inForm: NgForm): void {
    if(this.user.userName.match("^[A-Za-z0-9]*$") && this.user.password.match("^[A-Za-z0-9]*$")) {
      this.auth.login(this.user).subscribe(

        (success) => {
          localStorage.setItem('access_token', success.token);
          this.router.navigate(['/contact-us']);

        }, (err) => {
          this.error = err.error.message;
        }
      );
    } else {
      this.error = "Validation Failed";
    }
  }

}
