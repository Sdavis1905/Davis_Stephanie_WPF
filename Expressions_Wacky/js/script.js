// Stephanie Davis//


 var spidersEat = alert("They say that an average person eats about three spiders per night while sleeping. \n Would you like to see how many your entire family consumes just on a single night?");

 var hoursSlept = prompt ("How many hours do you normally sleep?")
 var famSleep = prompt ("How many hours does the rest of your family normally sleep?")
 var familyNum = prompt ("How many people are in your family?")

 var total = (hoursSlept /8 * 3 + famSleep /8 * familyNum * 3)

 console.log(total)

 alert("Your family would consume " + total + " spiders ")