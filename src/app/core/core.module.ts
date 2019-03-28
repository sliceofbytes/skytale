import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '@shared/angular-material.module';
import { NavigationBarComponent } from '@core/components/navigation-bar/navigation-bar.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavigationBarComponent, NavComponent],
  imports: [AngularMaterialModule, CommonModule, FlexLayoutModule, RouterModule],
  exports: [NavigationBarComponent, NavComponent]
})
export class CoreModule {}
