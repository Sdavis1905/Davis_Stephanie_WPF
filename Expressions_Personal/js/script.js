/**
 * Created by stephaniedavis on 4/8/14.
 */

var packCigs = prompt("We are trying to calculate how much money you would save in a year if you quit smoking. \n How many packs of cigarettes do you smoke in a week?");
var priceCigs = prompt ("How much do you pay for each pack of cigarettes you purchase?");
var total = packCigs * 52 * priceCigs;
console.log(total)
alert("You would save " + "$" + total + " a year if you quit smoking.");

