import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepictComponent } from './depict.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    DepictComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    ColorPickerModule,
    ButtonModule,
    ToastModule
  ]
})
export class DepictModule { }
