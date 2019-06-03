import { Component, OnInit } from '@angular/core';
import { Choroby } from '../Choroby';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { JednostkiChoroboweService } from '../_services/JednostkiChorobowe.service';
import { AddChorobaComponent } from '../dialogs/AddChoroba/AddChoroba.component';
import { EditChorobaComponent } from '../dialogs/EditChoroba/EditChoroba.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-JednostkiChorobowe',
  templateUrl: './JednostkiChorobowe.component.html',
  styleUrls: ['./JednostkiChorobowe.component.css']
})
export class JednostkiChoroboweComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Choroba', 'Akcja'];
  choroby: MatTableDataSource<Choroby>;
  constructor(private serviceJednostki: JednostkiChoroboweService,  private dialog: MatDialog) {
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
    this.serviceJednostki.getAllSicks().subscribe((choroba: Choroby[] ) => {
      this.choroby = new MatTableDataSource(choroba);
    }, error => {
      console.log('Error');
  });
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this')) {
      this.serviceJednostki.deleteSick(id).subscribe(res => {
        this.getAll();
      });
    }
  }
  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AddChorobaComponent, dialogConfig);
  }

  onCreateEdit(choroba: Choroby) {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.disableClose = true;
    dialogConfig2.autoFocus = true;
    dialogConfig2.width = '50%';
    dialogConfig2.data = {id: choroba.id, choroba: choroba.choroba};
    this.dialog.open(EditChorobaComponent, dialogConfig2);
  }

}
