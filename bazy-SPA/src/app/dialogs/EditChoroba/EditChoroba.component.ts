import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Choroby } from 'src/app/Choroby';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { JednostkiChoroboweService } from 'src/app/_services/JednostkiChorobowe.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EditChoroba',
  templateUrl: './EditChoroba.component.html',
  styleUrls: ['./EditChoroba.component.css']
})
export class EditChorobaComponent implements OnInit {

  myForm = this.fb.group({
    Id: [{value : this.choroba.id.valueOf(), disabled: true}, [Validators.required]],
    Choroba: [this.choroba.choroba, [Validators.required]]
});

  constructor(public dialogRef: MatDialogRef<EditChorobaComponent>,
              @Inject(MAT_DIALOG_DATA) public choroba: Choroby,
              private serviceDietetyk: JednostkiChoroboweService,
              private fb: FormBuilder ) { }

  ngOnInit() {
  }

  Update(form: FormControl) {
    form.value.Id = this.choroba.id;
    this.serviceDietetyk.putSick(form.value).subscribe(res => {
      console.log(form.value);
      this.onClose();
      this.serviceDietetyk.getAllSicks();
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
}

}
