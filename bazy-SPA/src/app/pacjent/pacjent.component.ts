import { Component, OnInit } from '@angular/core';
import { Pacjent } from '../Pacjent';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { PacjentServiceService } from '../_services/PacjentService.service';
import { EditPacjentComponent } from '../dialogs/EditPacjent/EditPacjent.component';
import { AddPacjentComponent } from '../dialogs/AddPacjent/AddPacjent.component';

@Component({
  selector: 'app-pacjent',
  templateUrl: './pacjent.component.html',
  styleUrls: ['./pacjent.component.css']
})
export class PacjentComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Imie', 'Nazwisko', 'Mail', 'Telefon', 'Cel', 'Akcja'];
  users: MatTableDataSource<Pacjent>;
  constructor(private servicePacjent: PacjentServiceService,  private dialog: MatDialog) {
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
    this.servicePacjent.getAllPacjent().subscribe((pracownik: Pacjent[], ) => {
      this.users = new MatTableDataSource(pracownik);
    }, error => {
      console.log('Error');
  });
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this')) {
      this.servicePacjent.deletePacjent(id).subscribe(res => {
        this.getAll();
      });
    }
  }
  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AddPacjentComponent, dialogConfig);
  }

  onCreateEdit(user: Pacjent) {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.disableClose = true;
    dialogConfig2.autoFocus = true;
    dialogConfig2.width = '50%';
    dialogConfig2.data = {id: user.id, imie: user.imie, nazwisko: user.nazwisko, mail: user.mail, telefon: user.telefon, cel: user.cel};
    console.log(dialogConfig2.data);
    this.dialog.open(EditPacjentComponent, dialogConfig2);
  }
}
