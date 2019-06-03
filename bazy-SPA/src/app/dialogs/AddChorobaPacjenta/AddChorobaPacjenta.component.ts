import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ChorobyPacjentaService } from 'src/app/_services/ChorobyPacjenta.service';
import { MatDialogRef } from '@angular/material';
import { JednostkiChoroboweService } from 'src/app/_services/JednostkiChorobowe.service';
import { PacjentServiceService } from 'src/app/_services/PacjentService.service';
import { ChorobyPacjenta } from 'src/app/ChorobyPacjenta';
import { Pacjent } from 'src/app/Pacjent';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-AddChorobaPacjenta',
  templateUrl: './AddChorobaPacjenta.component.html',
  styleUrls: ['./AddChorobaPacjenta.component.css']
})

export class AddChorobaPacjentaComponent implements OnInit {
  teams: ChorobyPacjenta[];
  pacjenci: any = {};
  nazwisko: any = [];
  myForm = this.fb.group({
    Choroba: ['', [Validators.required]],
    Imie: ['', [Validators.required]],
    Nazwisko: [],
});
  constructor( private serviceChorobyPacjenta: ChorobyPacjentaService,
               private fb: FormBuilder, public dialogRef: MatDialogRef<AddChorobaPacjentaComponent>,
               private jednostkiChorobowe: JednostkiChoroboweService,
               private personService: PacjentServiceService) { }
  ngOnInit() {
    this.getAll();
    this.getAllPerson();
  }
  Add(form: FormControl) {
    this.serviceChorobyPacjenta.addPersonSick(form.value).subscribe(res => {
      console.log(form);
      this.onClose();
      this.serviceChorobyPacjenta.getAllPersonSick();
     }, error => {
       console.log('Error');
   });
  }
  getAll() {
    this.jednostkiChorobowe.getAllSicks().subscribe((choroba: ChorobyPacjenta[]) => {
      this.teams = choroba;
    }, error => {
      console.log('Error');
  });
  }
  GetPersonSurName(form: FormControl, nazwisko: string) {
    form.get('Nazwisko').setValue(nazwisko);
    console.log('Siema');
    console.log(form);
  }
  getAllPerson() {
    this.personService.getAllPacjent().subscribe(pacjent => {
      this.pacjenci = pacjent;
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
  }
}
