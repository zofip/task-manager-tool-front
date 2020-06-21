import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
})
export class FormProjectComponent implements OnInit {

  @Output() clickSave: EventEmitter<any> = new EventEmitter();
  formProjectGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formProjectGroup = this.formBuilder.group({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.clickSave.emit(this.formProjectGroup.getRawValue());
  }

}
