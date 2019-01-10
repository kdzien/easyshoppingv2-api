import { PlanModel } from '../models/Plan';
import { Request, Response } from 'express';
import { IIngredient } from '../businessModels/ingredient';
import { IngredientModel } from 'models/Ingredient';

export const getIngredients = async (req: Request, res: Response) => {
  try{
    const ingredients = await IngredientModel.getIngredients();
    res.send(ingredients)
  }catch(err){
    res.send(err);
  }
}

export const addIngredient = async (req: Request, res: Response) => {
  try{
    const newIngredient = new PlanModel(<IIngredient>{
        name:'mleko'
    })
    await newIngredient.save();
    res.send(newIngredient  )
  }catch(err){
    res.send(err)
  }
}