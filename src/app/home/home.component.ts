import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    submitted = false;
    product: any;

    form: FormGroup = new FormGroup({
        productID: new FormControl(''),
        productName: new FormControl(''),
    });

    constructor(private formBuilder: FormBuilder, private Http: HttpClient) { }
    onSubmit(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        console.log(this.form.value)

        this.Http.post('https://localhost:7184/product', this.form.value).subscribe((data) => {
            this.product = data;
        })
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }
}