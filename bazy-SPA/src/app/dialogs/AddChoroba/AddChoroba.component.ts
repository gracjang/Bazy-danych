import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { JednostkiChoroboweService } from 'src/app/_services/JednostkiChorobowe.service';
import { MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-AddChoroba',
  templateUrl: './AddChoroba.component.html',
  styleUrls: ['./AddChoroba.component.css']
})
export class AddChorobaComponent implements OnInit {
  myForm = this.fb.group({
    Choroba: ['', [Validators.required]],
});
  constructor( private serviceJednostka: JednostkiChoroboweService,
               private fb: FormBuilder, public dialogRef: MatDialogRef<AddChorobaComponent>) { }
  ngOnInit() {
  }
  Add(form: FormControl) {
    this.serviceJednostka.addSick(form.value).subscribe(res => {
      console.log(form.value);
      this.onClose();
      this.serviceJednostka.getAllSicks();
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
}
}
