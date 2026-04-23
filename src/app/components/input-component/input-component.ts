import { Component, forwardRef, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [NgClass],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',

  //  Permet à Angular de reconnaître ce composant comme un input de formulaire
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  //  Inputs classiques
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() input: 'input' | undefined;
  @Input() placeholder: string = '';

  //  Valeur interne du champ
  value = '';

  //  État disabled
  disabled = false;

  //  Fonctions que Angular va nous donner (callbacks)
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  //  Angular appelle ça pour injecter une valeur dans mon input
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  //  Angular donne une fonction à appeler quand la valeur change
  // sert à recevoir une fonction et la stocker (onChange)
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /*
  fn = (value) => {
  formControl.setValue(value);
}

*/

  // Angular donne une fonction à appeler quand le champ est touché
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Angular peut désactiver l'input
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  //  Quand l’utilisateur tape dans l’input
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.value = target.value;   // mise à jour locale
    this.onChange(this.value);   // 🚀 informer Angular
  }

  // Quand l’utilisateur quitte le champ
  onBlur(): void {
    this.onTouched(); // 🚀 informer Angular que le champ a été touché
  }
}