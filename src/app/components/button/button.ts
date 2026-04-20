import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-button',
  imports: [NgClass, RouterLink],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  constructor(private router: Router) {}

  @Input() type: 'button' | 'submit' = 'button';
  @Input() label = 'Button';
  @Input() variant: 'btn_login' | 'btn_register' = 'btn_login' 
  @Input() link: string = '';

  
}
