import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultComponent } from './default/default.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShippingComponent } from './shipping/shipping.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { TabstripComponent } from './tabstrip/tabstrip.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoutineComponent } from './routine/routine.component';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule} from '@angular/material/tree';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { CdkTreeModule} from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { MarkingCriteriaComponent } from './marking-criteria/marking-criteria.component';

@NgModule({
  declarations: [
    AppComponent,
    TabstripComponent,
    DefaultComponent,
    InvoiceComponent,
    ShippingComponent,
    RoutineComponent,
    MarkingCriteriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTreeModule,
    MatCardModule,
    CdkTreeModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
