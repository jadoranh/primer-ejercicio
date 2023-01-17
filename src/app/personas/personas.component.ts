import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../mock-personas';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas = PERSONAS;
  
  selectedPersona?: Persona;

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }
}
