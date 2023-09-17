import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'

@Component({ templateUrl: 'detail.component.html' })
export class DetailComponent {
    submitted = false;
    product: any;
    onClickEdit!: boolean;

    form: FormGroup = new FormGroup({
        productID: new FormControl(''),
        productName: new FormControl(''),
    });

    constructor(private formBuilder: FormBuilder, private Http: HttpClient) { }

    ngOnInit(): void {
        let response = this.Http.get<any>('https://localhost:7184/product');
        console.log('response-',response); //observable
        response.subscribe(res=>console.log(res));
        
        this.Http.get('https://localhost:7184/product').subscribe((data: any)=>{
          this.product=data;
          
        })
    }

    onEdit(productID: number) {
        // this.Http.put('https://localhost:7184/Product?ProductID=' + productID, this.form.value).subscribe((data) => {
        //     this.product = data;
        // })
        console.log(this.form.value);
        // this.onClickEdit = !this.onClickEdit;
        
    }

    onDelete(productID: number) {
        this.Http.delete('https://localhost:7184/product?ProductID=' + productID).subscribe(() => {
            // this.product=data;
        })
        this.Http.get('https://localhost:7184/product').subscribe((data: any) => {
            this.product = data;
        })    
        //console.log(productID);
    }
    onSave(productName: string){

        console.log(productName);

        this.Http.post('https://localhost:7184/Product',this.form.value).subscribe((data) => {
            this.product = data;
        })
    }
}

function onSave() {
    throw new Error('Function not implemented.');
}
