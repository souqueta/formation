import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextsModule
  ], exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
