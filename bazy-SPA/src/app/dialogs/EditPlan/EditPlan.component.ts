import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { PLany } from 'src/app/PLany';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlanyService } from 'src/app/_services/Plany.service';
import * as moment from 'moment';
import { DietetykService } from 'src/app/_services/dietetyk.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EditPlan',
  templateUrl: './EditPlan.component.html',
  styleUrls: ['./EditPlan.component.css']
})
export class EditPlanComponent implements OnInit {
  plany: any = [];
  dietetycy: any = [];
  myForm = this.fb.group({
    Id: [{value : this.plan.id.valueOf(), disabled: true}, [Validators.required]],
    imieDietetyk: [this.plan.imieDietetyk, [Validators.required]],
    nazwiskoDietetyk: [this.plan.nazwiskoDietetyk, [Validators.required]],
    nazwiskoPacjent: [this.plan.nazwiskoPacjent, [Validators.required]],
    imiePacjent: [this.plan.imiePacjent, [Validators.required]],
    kalorycznosc: [this.plan.kalorycznosc, [Validators.required]],
    data_stworzenia: [this.plan.data_stworzenia, [Validators.required]],
    data_wyslania: [this.plan.data_wyslania, [Validators.required]],
});

  constructor(public dialogRef: MatDialogRef<PLany>,
              @Inject(MAT_DIALOG_DATA) public plan: PLany,
              private servicePlany: PlanyService,
              private fb: FormBuilder, private serviceDietetyk: DietetykService) { }

  ngOnInit() {
    this.getAll();
    this.getAllDietetics();
  }
  GetPersonSurName(form: FormControl, nazwisko: string) {
    form.get('nazwiskoDietetyk').setValue(nazwisko);
    console.log('Siema');
    console.log(form);
  }

  GetPersonSurNamePacjent(form: FormControl, nazwisko: string) {
    form.get('nazwiskoPacjent').setValue(nazwisko);
    console.log('Siema');
    console.log(form);
  }
  Update(form: FormControl) {
     form.value.Id = this.plan.id;
     form.value.data_stworzenia = moment(form.value.data_stworzenia).format('YYYY-MM-DD');
     form.value.data_wyslania = moment(form.value.data_wyslania).format('YYYY-MM-DD');
     this.servicePlany.putPlan(form.value).subscribe(res => {
       this.onClose();
       this.servicePlany.getAllPlans();
     }, error => {
      console.log('Error');
   });
  }
  onClose() {
    this.dialogRef.close();
}
getAll() {
  this.servicePlany.getAllPlans().subscribe(plan => {
    this.plany = plan;
    console.log(this.plany);
  }, error => {
    console.log('Error');
});


}

getAllDietetics() {
  this.serviceDietetyk.getAllDietetics().subscribe(dietetyk => {
    this.dietetycy = dietetyk;
    console.log(this.dietetycy);
  }, error => {
    console.log('Error');
});
}
}
