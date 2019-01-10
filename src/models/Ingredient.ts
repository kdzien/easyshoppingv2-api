import { prop, Typegoose, ModelType, staticMethod } from 'typegoose';
import { IngredientUnits } from '../businessModels/enums/ingredientUnits';

class Ingredient extends Typegoose {
  @prop({required: true})
  name: string;
  
  @prop({required: true, default: IngredientUnits.Piece})
  unit: string;

  @staticMethod
  static getIngredients(this: ModelType<Ingredient> & typeof Ingredient) {
    return this.find();
  }
  @staticMethod
  static getIngredient(this: ModelType<Ingredient> & typeof Ingredient, ingredient_id: string) {
    return this.findOne({_id:ingredient_id});
  }
}
const IngredientModel = new Ingredient().getModelForClass(Ingredient);

export { Ingredient, IngredientModel }
