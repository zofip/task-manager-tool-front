import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorHandler } from './services/http/http-error-handler.service';
import { MessageService } from './services/http/message.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ]
})
export class CoreModule { }
