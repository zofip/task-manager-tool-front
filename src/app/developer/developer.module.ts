import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './pages/developer.component';



@NgModule({
  entryComponents: [DeveloperComponent],
  imports: [
    CommonModule
  ]
})
export class DeveloperModule { }
