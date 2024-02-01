import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl){
  const sentence = control.value as string;
  if(sentence !== sentence.toLowerCase()) {
    return {
      minusculo: true
    };
  } else {
    return null;
  }
}
