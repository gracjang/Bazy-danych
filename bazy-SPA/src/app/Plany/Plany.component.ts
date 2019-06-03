import { Component, OnInit } from '@angular/core';
import { PLany } from '../PLany';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { PlanyService } from '../_services/Plany.service';
import { Plany } from 'Plany';
import { EditPlanComponent } from '../dialogs/EditPlan/EditPlan.component';
import { AddPlanComponent } from '../dialogs/AddPlan/AddPlan.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Plany',
  templateUrl: './Plany.component.html',
  styleUrls: ['./Plany.component.css']
})
export class PlanyComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Dietetyk', 'Pacjent', 'Kalorycznosc', 'Data stworzenia', 'Data wyslania', 'Akcja'];
  plany: MatTableDataSource<PLany>;
  constructor(private servicePlany: PlanyService,  private dialog: MatDialog) {
    dialog.afterAllClosed
    .subscribe(() => {
    // update a variable or call a function when the dialog closes
      this.getAll();
    }
  );
   }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.servicePlany.getAllPlans().subscribe((plan: PLany[] ) => {
      console.log(plan);
      this.plany = new MatTableDataSource(plan);
    }, error => {
      console.log('Error');
  });
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this')) {
      this.servicePlany.deletePlan(id).subscribe(res => {
        this.getAll();
      });
    }
  }
  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AddPlanComponent, dialogConfig);
  }

  onCreateEdit(plan: PLany) {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.disableClose = true;
    dialogConfig2.autoFocus = true;
    dialogConfig2.width = '50%';
    dialogConfig2.data = {id: plan.id, imieDietetyk: plan.imieDietetyk, nazwiskoDietetyk: plan.nazwiskoDietetyk,
      imiePacjent: plan.imiePacjent, nazwiskoPacjent: plan.nazwiskoPacjent, kalorycznosc: plan.kalorycznosc,
      data_stworzenia: plan.data_stworzenia, data_wyslania: plan.data_wyslania};
    this.dialog.open(EditPlanComponent, dialogConfig2);
  }

}
