import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shpping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) {}
  addIngredient() {
    this.slService.addIngredients([
      new Ingredient(
        (<HTMLInputElement>this.nameInputRef.nativeElement).value,
        +(<HTMLInputElement>this.amountInputRef.nativeElement).value
      ),
    ]);
  }
}
