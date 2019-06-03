import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ChorobyPacjenta } from '../ChorobyPacjenta';
import { ChorobyPacjentaService } from '../_services/ChorobyPacjenta.service';
import { EditChorobaPacjentaComponent } from '../dialogs/EditChorobaPacjenta/EditChorobaPacjenta.component';
import { AddChorobaPacjentaComponent } from '../dialogs/AddChorobaPacjenta/AddChorobaPacjenta.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ChorobyPacjenta',
  templateUrl: './ChorobyPacjenta.component.html',
  styleUrls: ['./ChorobyPacjenta.component.css']
})
export class ChorobyPacjentaComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Imie', 'Nazwisko', 'Choroba', 'Akcja'];
   users: MatTableDataSource<ChorobyPacjenta>;
    constructor(private servicePacjent: ChorobyPacjentaService,  private dialog: MatDialog) {
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
      this.servicePacjent.getAllPersonSick().subscribe((pacjent: ChorobyPacjenta[], ) => {
        this.users = new MatTableDataSource(pacjent);
      }, error => {
        console.log('Error');
    });
    }
    onDelete(id: number) {
      if (confirm('Are you sure to delete this')) {
        this.servicePacjent.deletePersonSick(id).subscribe(res => {
          this.getAll();
        });
      }
    }
    onCreateDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      this.dialog.open(AddChorobaPacjentaComponent, dialogConfig);
    }

    onCreateEdit(pacjent: ChorobyPacjenta) {
      const dialogConfig2 = new MatDialogConfig();
      dialogConfig2.disableClose = true;
      dialogConfig2.autoFocus = true;
      dialogConfig2.width = '50%';
      dialogConfig2.data = {id: pacjent.id, imie: pacjent.imie, nazwisko: pacjent.nazwisko, choroba: pacjent.choroba};
      console.log(dialogConfig2.data);
      this.dialog.open(EditChorobaPacjentaComponent, dialogConfig2);
    }
}
