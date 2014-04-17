
//Removing all other text except the actual functions per Hank's comment

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
