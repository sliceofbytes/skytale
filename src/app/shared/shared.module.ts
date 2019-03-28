import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SharedModule { }
