import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecepiesPageRoutingModule],
  declarations: [RecipesPage, RecipeItemComponent],
  exports: [RecipeItemComponent],
})
export class RecipesPageModule {}
