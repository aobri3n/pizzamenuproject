function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "<h3>Subtotal:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2 +6+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2 +10+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2 + 14 +"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2 +16+"<br>";
	}
	
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1, text2);
};


function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
			
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	
	for (var j = 0; j < selectedMeat.length; j++) {
		if (meatCount <= 1) {
			text2 = text2 + 0 + "<br>";
			
		} else if (meatCount == 2) {
			text2 = text2 + 1 + "<br>";
			
		} else {
			text2 = text2 + 1 + "<br>";
			
		}
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	
	getCheese(runningTotal, text1, text2);
	};		

function getCheese(runningTotal, text1, text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			selectedCheese = cheeseArray[i].value;
		}
		if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
		
		} 
	}
	text2 = text2 + cheeseTotal + "<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	
	getCrust(runningTotal, text1, text2);
};

function getCrust(runningTotal, text1, text2) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			selectedCrust = crustArray[i].value;
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
		
		} 
	}
	text2 = text2 + crustTotal + "<br>";
	text1 = text1+selectedCrust+"<br>";
	runningTotal = (runningTotal + crustTotal);
	
	getSauce(runningTotal, text1, text2);
};

function getSauce(runningTotal, text1, text2) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			selectedSauce = sauceArray[i].value;
			
		}
		
	}
	text2 = text2 + 0 + "<br>";
	text1 = text1+selectedSauce+"<br>";
	runningTotal = (runningTotal + sauceTotal);
	
	getVeggies(runningTotal, text1, text2);
};

function getVeggies(runningTotal,text1, text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount >= 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	
	for (var j = 0; j < selectedVeggies.length; j++) {
			
			if (veggiesCount < 2) {
				text2 = text2 + 0 + "<br>";
			} else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
			} else {
				text2 = text2 + 1 + "<br>";
			}
	}
	runningTotal = (runningTotal + veggiesTotal);
	console.log("total selected veggies items: "+veggiesCount);
	console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");
	console.log("veggies text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	
	};