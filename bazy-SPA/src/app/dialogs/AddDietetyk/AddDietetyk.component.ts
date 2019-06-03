import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DietetykService } from 'src/app/_services/dietetyk.service';
import { MatDialogRef } from '@angular/material';
import { EditDietetykComponent } from '../editDietetyk/editDietetyk.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-AddDietetyk',
  templateUrl: './AddDietetyk.component.html',
  styleUrls: ['./AddDietetyk.component.css']
})
export class AddDietetykComponent implements OnInit {

  myForm = this.fb.group({
    Imie: ['', [Validators.required]],
    Nazwisko: ['',  [Validators.required]],
    Telefon: ['',  [Validators.required]],
    Mail: ['',  [Validators.required, Validators.email]],
});
  constructor( private serviceDietetyk: DietetykService,
               private fb: FormBuilder, public dialogRef: MatDialogRef<AddEventListenerOptions>) { }
  ngOnInit() {
  }
  Add(form: FormControl) {
    this.serviceDietetyk.addDietetic(form.value).subscribe(res => {
      console.log(form.value);
      this.onClose();
      this.serviceDietetyk.getAllDietetics();
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
}
}
