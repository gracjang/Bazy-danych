import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { PacjentServiceService } from 'src/app/_services/PacjentService.service';
import { MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-AddPacjent',
  templateUrl: './AddPacjent.component.html',
  styleUrls: ['./AddPacjent.component.css']
})
export class AddPacjentComponent implements OnInit {
  myForm = this.fb.group({
    Imie: ['', [Validators.required]],
    Nazwisko: ['',  [Validators.required]],
    Telefon: ['',  [Validators.required]],
    Cel: ['',  [Validators.required]],
    Mail: ['',  [Validators.required, Validators.email]],
});
  constructor( private servicePacjent: PacjentServiceService,
               private fb: FormBuilder, public dialogRef: MatDialogRef<AddEventListenerOptions>) { }
  ngOnInit() {
  }
  Add(form: FormControl) {
    this.servicePacjent.addPacjent(form.value).subscribe(res => {
      console.log(form.value);
      this.onClose();
      this.servicePacjent.getAllPacjent();
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
}
}
