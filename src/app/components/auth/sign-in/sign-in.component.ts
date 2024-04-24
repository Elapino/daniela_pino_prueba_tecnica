import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from 'app/models/user.model';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  signInForm: FormGroup;

  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) { }


  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: ['admin@gmail.com',
        [
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.maxLength(60),
            Validators.minLength(4)
          ])
        ],
      ],
      password: ['admin',
        [
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ],
      ],
      rememberMe: ['']
    });
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }
    this.signInForm.disable();
    const user: User = {
      username: 'Daniela Pino',
      rol: 'Administrador',
      email: this.signInForm.get('email')?.value,
      password: this.signInForm.get('password')?.value
    }
    this._userService.saveUser(user);
    this._router.navigateByUrl('/dashboard');
  }
}