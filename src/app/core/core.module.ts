import { AngularFireAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '@shared/angular-material.module';
import { NavComponent, NavigationBarComponent, LoginComponent } from '@core/components';
import { environment } from '@env/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [NavigationBarComponent, NavComponent, LoginComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [NavigationBarComponent, NavComponent, LoginComponent]
})
export class CoreModule {}
