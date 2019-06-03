import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DietetykPracownik } from 'src/app/DietetykPracownik';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DietetykService } from 'src/app/_services/dietetyk.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-editDietetyk',
  templateUrl: './editDietetyk.component.html',
  styleUrls: ['./editDietetyk.component.css']
})
export class EditDietetykComponent implements OnInit {
  model: DietetykPracownik;


 myForm = this.fb.group({
    Id: [{value : this.user.id.valueOf(), disabled: true}, [Validators.required]],
    Imie: [this.user.imie, [Validators.required]],
    Nazwisko: [this.user.nazwisko,  [Validators.required]],
    Telefon: [this.user.telefon,  [Validators.required]],
    Mail: [this.user.mail,  [Validators.required, Validators.email]],
});

  constructor(public dialogRef: MatDialogRef<EditDietetykComponent>,
              @Inject(MAT_DIALOG_DATA) public user: DietetykPracownik,
              private serviceDietetyk: DietetykService,
              private fb: FormBuilder ) { }

  ngOnInit() {
    console.log(this.user.id);
  }

  Update(form: FormControl) {
    form.value.Id = this.user.id;
    this.serviceDietetyk.putDietetic(form.value).subscribe(res => {
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
