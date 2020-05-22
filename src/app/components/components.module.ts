import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlhViewComponent } from './atlh-view/atlh-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryComponent } from './category/category.component';
import {MatCardModule} from '@angular/material/card';
import { MedalDialogComponent } from './medal-dialog/medal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AtlhViewComponent, CategoryComponent, MedalDialogComponent, MaintenanceComponent],
  exports: [AtlhViewComponent, CategoryComponent, MaintenanceComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
