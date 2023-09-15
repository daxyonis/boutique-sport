import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router,
              private auth: AuthService) {}

  authenticate(form: NgForm) {
      if (form.valid) {
          // perform authentication
          this.auth.authenticate(this.username ?? "", this.password ?? "")
                   .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl("/admin/main");
                    }
                    this.errorMessage = "L'authentification a échoué";
                });
      } else {
          this.errorMessage = "Formulaire invalide";
      }
  }
}
