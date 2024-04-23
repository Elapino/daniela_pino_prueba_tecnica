import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, SharedModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUpNgForm') signUpNgForm: NgForm;
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['',
        [
          Validators.compose([
            Validators.required,
            Validators.maxLength(60),
            Validators.minLength(4)
          ])
        ]],
      email: ['',
        [
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.maxLength(60),
            Validators.minLength(4)
          ])
        ],
      ],
      password: [
        '',
        [
          Validators.compose([
            Validators.required,
            SignUpComponent.patternValidator(/\d/, {
              hasNumber: true,
            }),
            SignUpComponent.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            SignUpComponent.patternValidator(/[a-z]/, {
              hasSmallCase: true,
            }),
            SignUpComponent.patternValidator(
              /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
              { hasSpecialCharacters: true }
            ),
            Validators.minLength(8),
          ]),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
      {
        validators: SignUpComponent.mustMatch('password', 'confirmPassword')
      }
    );

  }

  static patternValidator(
    regex: RegExp,
    error: ValidationErrors
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  static mustMatch(controlPath: string, matchingControlPath: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);

      if (!control || !matchingControl) {
        return null;
      }
      if (matchingControl.hasError('mustMatch')) {
        delete matchingControl.errors.mustMatch;
        matchingControl.updateValueAndValidity();
      }
      if (this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
        return null;
      }

      const errors = { mustMatch: true };
      matchingControl.setErrors(errors);
      return errors;
    };
  }

  static isEmptyInputValue(value: any): boolean {
    return value == null || value.length === 0;
  }

  signUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    this.signUpForm.disable();
    this._router.navigateByUrl('/sign-in');
  }
}