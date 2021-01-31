
//Kilometer to meter conerversion
function kilometerToMeter(kilometer){
	if (kilometer>=0){
		return kilometer*1000;
	}
	if (kilometer <=0){
		console.log("You Enter negative Value ");
	}
}
kilometerToMeter(55)

//Budget calculator

function budgetCalculator(input1, input2, input3,){
	var watch=50;
	var phone=100;
	var laptop=500;
	
	if(input1>=0 && input2>=0 && input3 >=0){
		if(input1>=0){
			var priceWatch= input1*watch;
		}
		if(input1>=0){
			var pricePhone= input2*phone;
		}
		if(input1>=0){
			var priceLaptop= input3*laptop;
		}
		var result = priceWatch+pricePhone+priceLaptop;
	}else{
		result =("You have entre a negative number")
	}
 return result;
}

budgetCalculator(2,2,2)

//hotel bill Calculator

function hotelCost(day){
	
	if(day<=10 && day <=10){
		result= day*100;
		
	 }
	 else if(day<=20 && day <=20){
		var days = 10;	
		result = (days*100)+(day-10)*80;
		
	 }
	else{
		var first10=10*100;
		var second20=10*80;
		var lastdays=(day-20)*50;
		result = first10+second20+lastdays;
	 }
	 return result;

}
hotelCost(21)

//Finding the biggest name in a array

function megaFriend(names){
	var initial = 0;
  for (var i = 0; i < names.length; i++) {
	if (names[i].length > initial) {
	  var initial = names[i].length;
	  var longest = names[i];
	}
  }
	return longest;
  
}
var friend =['Alamin khan','shakil ahmed','Anghella Murawskaya ','Alexandra ivanova','Bruno Rucy Carneiro Alves de Lima','Sarang Katyare'];
megaFriend(friend);

//The End