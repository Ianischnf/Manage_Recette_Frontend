import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() type: 'button' | 'submit' = 'button';
  @Input() label = 'Button';
  @Input() variant: 'btn_login' | 'btn_register' = 'btn_login' 

}
