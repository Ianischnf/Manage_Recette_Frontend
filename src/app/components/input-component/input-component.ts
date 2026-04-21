import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input-component',
  imports: [NgClass],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {


  @Input() type : 'text' | 'email' | 'password' = 'text';
  @Input() input : 'input' | undefined
  @Input() placeholder: string = '';

}
