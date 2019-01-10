import { IMeal } from "./meal";

export interface IPlan {
    day: string;
    type: number;
    meal: IMeal;
}