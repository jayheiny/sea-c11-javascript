// Assignment 2, Code Fellows, JavaScript
// xor.js

// Implement an exclusive OR function called `preferredName` that has the following interface:
 
//var FirstName,
    //LastName;
 
//preferredName(FirstName, LastName);
// -> false
 
//FirstName = 'Hank';
 
//preferredName(FirstName, LastName);
// -> 'Hank'
 
//LastName = 'Yates';
 
//preferredName(FirstName, LastName);
// -> false
 
//FirstName = '';
 
//preferredName(FirstName, LastName);
// -> 'Yates'

//1. If FirstName AND LastName, return false
//2. If no FirstName AND no LastName, return false
//3. If FirstName and no LastName, return FirstName
//4. If no FirstName and LastName, return LastName

//Revised below after looking at several other students' xor.js files, it was much simpler than I anticipated:


function preferredName (FirstName, LastName) {
       if ((FirstName && LastName) || (!FirstName && !LastName)) {
       		return false;
       } else {
		return (FirstName || LastName);
	}
}

//I could also write:

var preferredName = function(FirstName, LastName) {
  	if ((FirstName && !LastName) || (!FirstName && LastName)) { 
  		return (FirstName || LastName); }
  	else {
  		return false;
	}	
};

//Finally, this is closer to what I was trying initially, minus the equal signs:


preferredName = function (FirstName, LastName){
 	if(FirstName && LastName) {
 		return false;
 	} else if (!FirstName && !LastName) {
 		return false;
 	} else if (FirstName) {
 		return FirstName;
 	} else {
 		return LastName;
 	}
 };
