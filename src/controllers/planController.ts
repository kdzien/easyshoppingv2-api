import { PlanModel } from '../models/Plan';
import { Request, Response } from 'express';
import { IMeal } from 'businessModels/meal';
import { IPlan } from 'businessModels/plan';
import { IIngredient } from 'businessModels/ingredient';

export const getPlans = async (req: Request, res: Response) => {
  try{
    const plans = await PlanModel.getCategories();
    res.send(plans)
  }catch(err){
    res.send(err);
  }
}

export const getPlan = async (req: Request, res: Response) => {
  const plan_id = req.params.plan_id;
  try{
    const plan = await PlanModel.getPlan(plan_id);
    res.send(plan)
  }catch(err){
    res.send(err);
  }
}

export const addPlan = async (req: Request, res: Response) => {
  try{
    const newPlan = new PlanModel(<IPlan>{
    })
    await newPlan.save();
    res.send(newPlan)
  }catch(err){
    res.send(err)
  }
}