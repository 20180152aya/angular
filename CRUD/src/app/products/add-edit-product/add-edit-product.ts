import { Component, Inject, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-product',
  standalone: false,
  templateUrl: './add-edit-product.html',
  styleUrl: './add-edit-product.css'
})
export class AddEditProduct {

@ViewChild('productForm')  productForm!:NgForm


productDate:any

constructor(public dialog:MatDialogRef<AddEditProduct>, 
  @Inject(MAT_DIALOG_DATA) public data:any
){
    if(!data){
      this.data = {name:"",category:"",price:""}
    }
}

  SaveData(){
     let product = this.productForm.value
    if(this.data){
     
      product.id = this.data.id
    }
      this.dialog.close(product)
  }
}
