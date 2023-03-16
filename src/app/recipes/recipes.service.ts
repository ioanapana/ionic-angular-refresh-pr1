import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Vegetarian Chili',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nachos_with_guacamole.jpg/640px-Nachos_with_guacamole.jpg',
      ingredients: [
        'onion',
        'garlic',
        'bell pepper',
        'tomatoes',
        'kidney beans',
        'corn',
        'chili powder',
        'cumin',
      ],
    },
    {
      id: '2',
      title: 'Mushroom Risotto',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mushroom_Risotto_%284790048714%29.jpg/640px-Mushroom_Risotto_%284790048714%29.jpg',
      ingredients: [
        'mushrooms',
        'arborio rice',
        'vegetable broth',
        'onion',
        'garlic',
        'butter',
        'parmesan cheese',
      ],
    },
    {
      id: '3',
      title: 'Roasted Vegetable Lasagna',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Meaty_Lasagna_8of8_%288736299782%29.jpg/640px-Meaty_Lasagna_8of8_%288736299782%29.jpg',
      ingredients: [
        'zucchini',
        'eggplant',
        'red bell pepper',
        'lasagna noodles',
        'tomato sauce',
        'ricotta cheese',
        'mozzarella cheese',
      ],
    },
    {
      id: '4',
      title: 'Spicy Black Bean Tacos',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vegetables_and_Black_Bean_Tacos_%287212559656%29.jpg/640px-Vegetables_and_Black_Bean_Tacos_%287212559656%29.jpg',
      ingredients: [
        'black beans',
        'taco shells',
        'sour cream',
        'avocado',
        'cilantro',
        'lime',
        'jalapeno',
      ],
    },
    {
      id: '5',
      title: 'Greek Salad',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Greek_Salad_Choriatiki.jpg/640px-Greek_Salad_Choriatiki.jpg',
      ingredients: [
        'tomatoes',
        'cucumber',
        'red onion',
        'feta cheese',
        'kalamata olives',
        'lemon juice',
        'olive oil',
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    } as Recipe;
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
