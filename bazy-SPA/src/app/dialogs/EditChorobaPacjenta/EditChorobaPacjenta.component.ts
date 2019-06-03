import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChorobyPacjenta } from 'src/app/ChorobyPacjenta';
import { ChorobyPacjentaService } from 'src/app/_services/ChorobyPacjenta.service';
import { JednostkiChoroboweService } from 'src/app/_services/JednostkiChorobowe.service';
import { Choroby } from 'src/app/Choroby';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EditChorobaPacjenta',
  templateUrl: './EditChorobaPacjenta.component.html',
  styleUrls: ['./EditChorobaPacjenta.component.css']
})
export class EditChorobaPacjentaComponent implements OnInit {
  teams: any = [];
  myForm = this.fb.group({
    Id: [{value : this.choroba.id.valueOf(), disabled: true}, [Validators.required]],
    Choroba: [this.choroba.choroba, [Validators.required]]
});

  constructor(public dialogRef: MatDialogRef<ChorobyPacjenta>,
              @Inject(MAT_DIALOG_DATA) public choroba: ChorobyPacjenta,
              private serviceDietetyk: ChorobyPacjentaService,
              private fb: FormBuilder,
              private jednostkiChorobowe: JednostkiChoroboweService ) { }

  ngOnInit() {
    this.getAll();
  }

  Update(form: FormControl) {
    form.value.Id = this.choroba.id;
    this.serviceDietetyk.putPersonSick(form.value).subscribe(res => {
      console.log(form.value);
      this.onClose();
      this.serviceDietetyk.getAllPersonSick();
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
}
getAll() {
  this.jednostkiChorobowe.getAllSicks().subscribe(choroba => {
    console.log(choroba);
    this.teams = choroba;
    console.log(this.teams);
  }, error => {
    console.log('Error');
});
}
}
