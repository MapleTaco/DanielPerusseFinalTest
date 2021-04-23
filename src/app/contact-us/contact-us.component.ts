import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @Input() submit: boolean = false;
  @Output() toScreen: EventEmitter<Boolean> = new EventEmitter();

  public name: String;
  public email: String;
  public message: String;
  public error: String;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(inForm: NgForm): void {
    this.name = inForm.value.userName;
    this.email = inForm.value.email;
    this.message = inForm.value.message;
    if(this.name == null || this.email == null || this.message == null || this.name == "" || this.email == "" || this.message == "") {
      this.error = "There is an empty field, please fill it";
    } else {
      this.error = "";
    }
  }
}
