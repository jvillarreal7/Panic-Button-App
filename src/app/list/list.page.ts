import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public myForm: FormGroup;
  public numberCount: number = 0;

  public emergencyNumbers = ["8441234567", "8443333333"];

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      //number1: ['', Validators.required]
    });
    
  }

  addControl() {
    this.numberCount++;
    this.myForm.addControl('number' + this.numberCount, new FormControl('', Validators.required));
  }

  // initControl() {
  //   this.numberCount++;
  //   this.myForm.addControl('number' + this.numberCount, new FormControl('', Validators.required));
  // }

  removeControl(control) {
    this.myForm.removeControl(control.key);
  }

  ngOnInit() {
    for(let number of this.emergencyNumbers)
    {
      this.numberCount++;
      this.myForm.addControl('number' + this.numberCount, new FormControl(number, Validators.required));
    }
  }
}
