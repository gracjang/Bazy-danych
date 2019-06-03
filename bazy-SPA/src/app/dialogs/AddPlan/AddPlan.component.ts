import { Component, OnInit } from '@angular/core';
import { ChorobyPacjenta } from 'src/app/ChorobyPacjenta';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { DietetykService } from 'src/app/_services/dietetyk.service';
import { PacjentServiceService } from 'src/app/_services/PacjentService.service';
import { MatDialogRef } from '@angular/material';
import { PlanyService } from 'src/app/_services/Plany.service';
import { Pacjent } from 'src/app/Pacjent';
import { DietetykPracownik } from 'src/app/DietetykPracownik';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-AddPlan',
  templateUrl: './AddPlan.component.html',
  styleUrls: ['./AddPlan.component.css']
})
export class AddPlanComponent implements OnInit {
  osoby: Pacjent[];
  dietetycy: DietetykPracownik[];
  nazwisko: any = [];
  myForm = this.fb.group({
    imieDietetyk: ['', [Validators.required]],
    nazwiskoDietetyk: [''],
    imiePacjent: ['', [Validators.required]],
    nazwiskoPacjent: [''],
    kalorycznosc: ['', [Validators.required]],
    data_stworzenia: ['', [Validators.required]],
    data_wyslania: ['', [Validators.required]],
});
  constructor( private serviceDietetyk: DietetykService,
               private fb: FormBuilder, public dialogRef: MatDialogRef<AddPlanComponent>,
               private personService: PacjentServiceService,
               private planyService: PlanyService) { }
  ngOnInit() {
    this.getAllPerson();
    this.getAllDietetics();
  }
  Add(form: FormControl) {
    form.value.data_stworzenia = moment(form.value.data_stworzenia).format('YYYY-MM-DD');
    form.value.data_wyslania = moment(form.value.data_wyslania).format('YYYY-MM-DD');
    console.log(form.value);
    this.planyService.addPlan(form.value).subscribe(res => {
      console.log(form);
      this.onClose();
      this.planyService.getAllPlans();
     }, error => {
        console.log('Error');
    });
  }


  getAllDietetics() {
    this.serviceDietetyk.getAllDietetics().subscribe((dietetyk: DietetykPracownik[]) => {
      this.dietetycy = dietetyk;
      console.log(this.dietetycy);
    }, error => {
      console.log('Error');
  });
  }
  GetPersonSurName(form: FormControl, nazwisko: string) {
    form.get('nazwiskoPacjent').setValue(nazwisko);
  }

  GetDieteicSurName(form: FormControl, nazwisko: string) {
    form.get('nazwiskoDietetyk').setValue(nazwisko);
  }
  getAllPerson() {
    this.personService.getAllPacjent().subscribe((pacjent: Pacjent[]) => {
      this.osoby = pacjent;
    }, error => {
      console.log('Error');
  });
  }
  onClose() {
    this.dialogRef.close();
  }
}
