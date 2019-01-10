import { prop, Typegoose, ModelType, staticMethod, Ref } from 'typegoose';
import { Ingredient } from './Ingredient';

class Meal extends Typegoose {
  @prop({required: true})
  name: string;
  @prop({ ref: Ingredient, required: true })
  ingredients: {
    name: string,
    value: number,
    unit: string
  }[];

  @staticMethod
  static getMeals(this: ModelType<Meal> & typeof Meal) {
    return this.find();
  }
  @staticMethod
  static getProduct(this: ModelType<Meal> & typeof Meal, meal_id: string) {
    return this.findOne({_id:meal_id});
  }
}
const MealModel = new Meal().getModelForClass(Meal);

export { Meal, MealModel }

