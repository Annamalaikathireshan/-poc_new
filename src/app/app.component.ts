import { Component, NgModule, VERSION } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from './home';
// import { DetailComponent } from './detail'

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Validation from './utils/validation';
import { APIserviceService } from './apiservice.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  // detailsUrl:'./details.html',
  // adddetailsUrl:'./adddetail.html',
  

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: any;
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  form: FormGroup = new FormGroup({
    productID: new FormControl(''),
    productName: new FormControl(''),
  });
  submitted = false;
  showAddDetails: boolean=true;
  product: any;
  
  constructor(private formBuilder: FormBuilder, private Http:HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        productID: ['', Validators.required],
        productName: ['',Validators.required],
        createDate: new Date(),
        updateDate: new Date()
      },
    );
    let response = this.Http.get<any>('https://localhost:7184/product');
    console.log('response-',response); //observable
    response.subscribe(res=>console.log(res));
    
    this.Http.get('https://localhost:7184/product').subscribe((data: any)=>{
      this.product=data;
      
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    
    console.log(this.form.value)

    this.Http.post('https://localhost:7184/product', this.form.value).subscribe((data)=>{
      this.product=data;
    })
    


    // this.Http.post('https://localhost:7184/postupdate', this.form.value).subscribe((data)=>{
    //   this.product=data;
    // })
    // this.Http.put('https://localhost:7184/product', this.form.value).subscribe((data)=>{
    //   this.product=data;
    // })

    
    // this.HttpClient.post('https://localhost:7169/product' +this.product);
    // this.HttpClient.post('https://localhost:7169/');
    // console.log(JSON.stringify(this.form.value, null, 2));
  }

  onEdit(productID : number){
    this.Http.put('https://localhost:7184/Product?ProductID=' +productID, this.form.value).subscribe((data)=>{
      this.product=data;
    })
    // console.log(productID);
  }

  onDelete(productID : number){
    this.Http.delete('https://localhost:7184/product?ProductID=' +productID).subscribe(()=>{
      // this.product=data;
    })
    this.Http.get('https://localhost:7184/product').subscribe((data: any)=>{
      this.product=data;})
    // console.log(productID);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  showAdd(){
    this.showAddDetails=true;
  }

  showDetails(){
    this.showAddDetails=false;
  }

 
  
  
}


function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

