import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatPaginatorModule,
  MatSortModule, MatCheckboxModule, MatDatepickerModule, MatGridListModule, MatRadioModule,
   MatNativeDateModule, MatOptionModule, MatSelectModule

} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { DietetykComponent } from './dietetyk/dietetyk.component';
import { DietetykService } from './_services/dietetyk.service';
import { EditDietetykComponent } from './dialogs/editDietetyk/editDietetyk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDietetykComponent } from './dialogs/AddDietetyk/AddDietetyk.component';
import { JednostkiChoroboweService } from './_services/JednostkiChorobowe.service';
import { JednostkiChoroboweComponent } from './JednostkiChorobowe/JednostkiChorobowe.component';
import {AddChorobaComponent} from './dialogs/AddChoroba/AddChoroba.component';
import { EditChorobaComponent } from './dialogs/EditChoroba/EditChoroba.component';
import { ChorobyPacjentaComponent } from './ChorobyPacjenta/ChorobyPacjenta.component';
import { ChorobyPacjentaService } from './_services/ChorobyPacjenta.service';
import { EditChorobaPacjentaComponent } from './dialogs/EditChorobaPacjenta/EditChorobaPacjenta.component';
import { AddChorobaPacjentaComponent } from './dialogs/AddChorobaPacjenta/AddChorobaPacjenta.component';
import { PacjentComponent } from './pacjent/pacjent.component';
import { PacjentServiceService } from './_services/PacjentService.service';
import { EditPacjentComponent } from './dialogs/EditPacjent/EditPacjent.component';
import { AddPacjentComponent } from './dialogs/AddPacjent/AddPacjent.component';
import { PlanyComponent } from './Plany/Plany.component';
import { PlanyService } from './_services/Plany.service';
import { AddPlanComponent } from './dialogs/AddPlan/AddPlan.component';
import { EditPlanComponent } from './dialogs/EditPlan/EditPlan.component';

@NgModule({
   declarations: [
      AppComponent,
      DietetykComponent,
      EditDietetykComponent,
      AddDietetykComponent,
      JednostkiChoroboweComponent,
      AddChorobaComponent,
      EditChorobaComponent,
      ChorobyPacjentaComponent,
      EditChorobaPacjentaComponent,
      AddChorobaPacjentaComponent,
      PacjentComponent,
      EditPacjentComponent,
      AddPacjentComponent,
      PlanyComponent,
      AddPlanComponent,
      EditPlanComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatTabsModule,
      MatRadioModule,
      MatButtonModule,
      MatOptionModule,
      MatSelectModule,
      MatCardModule,
      MatNativeDateModule,
      MatInputModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      HttpClientModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatGridListModule,
      MatPaginatorModule,
      MatSortModule
   ],
   providers: [
      DietetykService,
      JednostkiChoroboweService,
      ChorobyPacjentaService,
      PacjentServiceService,
      PlanyService
   ],
   entryComponents: [
      EditDietetykComponent,
      AddDietetykComponent,
      AddChorobaComponent,
      EditChorobaComponent,
      EditChorobaPacjentaComponent,
      AddChorobaPacjentaComponent,
      EditPacjentComponent,
      AddPacjentComponent,
      AddPlanComponent,
      EditPlanComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
