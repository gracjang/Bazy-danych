import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PacjentServiceService } from 'src/app/_services/PacjentService.service';
import { Pacjent } from 'src/app/Pacjent';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EditPacjent',
  templateUrl: './EditPacjent.component.html',
  styleUrls: ['./EditPacjent.component.css']
})
export class EditPacjentComponent implements OnInit {
 myForm = this.fb.group({
    Id: [{value : this.user.id.valueOf(), disabled: true}, [Validators.required]],
    Imie: [this.user.imie, [Validators.required]],
    Nazwisko: [this.user.nazwisko,  [Validators.required]],
    Telefon: [this.user.telefon,  [Validators.required]],
    Cel: [this.user.cel,  [Validators.required]],
    Mail: [this.user.mail,  [Validators.required, Validators.email]]
});

  constructor(public dialogRef: MatDialogRef<EditPacjentComponent>,
              @Inject(MAT_DIALOG_DATA) public user: Pacjent,
              private servicePacjent: PacjentServiceService,
              private fb: FormBuilder ) { }

  ngOnInit() {
    console.log(this.user.id);
  }

  Update(form: FormControl) {
    form.value.Id = this.user.id;
    this.servicePacjent.putPacjent(form.value).subscribe(res => {
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
