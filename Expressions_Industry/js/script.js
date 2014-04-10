/**
 * Created by stephaniedavis on 4/8/14.
 */

var lgNeeded = prompt("We are trying to calculate how many folders you will need total. \n How many large folders do you need per day?");
var medNeeded = prompt ("How many medium folders do you need per day?");
var smNeeded = prompt ("How many small folders do you need per day?");
var daysNeeded = prompt ("How many days are you prepping for?")

var lgTotal = lgNeeded * daysNeeded
var medTotal = medNeeded * daysNeeded
var smTotal = smNeeded * daysNeeded

console.log(lgTotal)
console.log(medTotal)
console.log(smTotal)

alert ("You will need " + lgTotal + " large folders, \n" + medTotal + " medium folders \n" + smTotal + " small folders")
