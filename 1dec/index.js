import { calories } from "./calories.js";

export const calculateCalories = () => {
  const sumCalories = [];
  let sum = 0;
  
  calories().map((cal) => {
    if (cal === "") {
      sumCalories.push(sum);
      sum = 0;
    } else {
      sum += Number(cal);
    }
  });
  
  const orderDesc = sumCalories.sort((a, b) => b - a);
  
  const topOne = orderDesc[0];
  
  const topThree = orderDesc[0] + orderDesc[1] + orderDesc[2];

  return `Most calories: ${topOne} and total of top 3 ${topThree}`;
}