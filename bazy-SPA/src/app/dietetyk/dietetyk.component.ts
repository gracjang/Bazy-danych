import { Component, OnInit } from '@angular/core';
import { DietetykService } from '../_services/dietetyk.service';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { EditDietetykComponent} from '../dialogs/editDietetyk/editDietetyk.component';
import { DietetykPracownik } from 'src/app/DietetykPracownik';
import { AddDietetykComponent } from '../dialogs/AddDietetyk/AddDietetyk.component';

@Component({
  selector: 'app-dietetyk',
  templateUrl: './dietetyk.component.html',
  styleUrls: ['./dietetyk.component.css']
})
export class DietetykComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Imie', 'Nazwisko', 'Mail', 'Telefon', 'Akcja'];
  users: MatTableDataSource<DietetykPracownik>;
  constructor(private serviceDietetyk: DietetykService,  private dialog: MatDialog) {
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
    this.serviceDietetyk.getAllDietetics().subscribe((pracownik: DietetykPracownik[], ) => {
      console.log(pracownik);
      this.users = new MatTableDataSource(pracownik);
    }, error => {
      console.log('Error');
  });
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this')) {
      this.serviceDietetyk.deleteDietetic(id).subscribe(res => {
        this.getAll();
      });
    }
  }
  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AddDietetykComponent, dialogConfig);
  }

  onCreateEdit(user: DietetykPracownik) {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.disableClose = true;
    dialogConfig2.autoFocus = true;
    dialogConfig2.width = '50%';
    dialogConfig2.data = {id: user.id, imie: user.imie, nazwisko: user.nazwisko, mail: user.mail, telefon: user.telefon};
    console.log(dialogConfig2.data);
    this.dialog.open(EditDietetykComponent, dialogConfig2);
  }
}
