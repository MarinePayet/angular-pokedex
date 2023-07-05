import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;
  @Output() onDelete = new EventEmitter();

  constructor(){}



  onDeleteBtnClick(){
    if (!this.pokemon){ return};

    console.log('clic clic');
    this.onDelete.emit(this.pokemon.name);
  }

}
