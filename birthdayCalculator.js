/*
	Functions:
	-get your birthdate
	-return how many months it will be until your birthday
		-also display the months
		-eventually work on days as well
	-

*/
//var name = prompt("Enter your name: ");
var userBirth = prompt("Enter your month of birth (Ex: April 25 = 04 25): "); // 

var newUserBirth = userBirth.split(" ");
var userMonth = newUserBirth[0];
var userDay = newUserBirth[1];

var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!


if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd;
console.log("month: " + newUserBirth[0] + " day: " + newUserBirth[1]);
console.log("Current month: " + mm + " day: " + dd);

// Need to format so that this information displays on index.html and looks cool

console.log("The order is: ");
var monthDifference
if ( mm > userMonth ){  // birthday month has passed already
	monthDifference = 12 - (mm - userMonth);
	
	for (i=Number(mm)-1;i < 12;i++)
	{
		
	
		console.log(monthArray[i] + " ");
		if (i == 11)
			i = -1;
		if (i == userMonth)
			i = 12;
		
	
	}
	
	
}
else if ( mm < userMonth ){ // birthday month has not passed yet
	monthDifference = userMonth - mm; 
}
else {
	monthDifference = userMonth; // current month is the same as their birthday
}



// need to fix this so that it displays the correct value
console.log("Your birthday will be " + (monthDifference) + " month(s) from now\n");


