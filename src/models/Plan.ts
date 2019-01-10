import { prop, Typegoose, ModelType, staticMethod, Ref } from 'typegoose';
import { Meal } from './Meal';

class Plan extends Typegoose {
  @prop({required: true})
  day: string;

  @prop({required: true})
  type: number;

  @prop({ ref: Meal, required: false })
  meal: Ref<Meal>;

  @staticMethod
  static getPlans(this: ModelType<Plan> & typeof Plan) {
    return this.find();
  }
  @staticMethod
  static getPlan(this: ModelType<Plan> & typeof Plan, plan_id: string) {
    return this.findOne({_id:plan_id});
  }
}
const PlanModel = new Plan().getModelForClass(Plan);

export { Plan, PlanModel }