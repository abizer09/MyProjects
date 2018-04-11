function myFunction () {
	var grade = prompt("What is your grade?");

	switch (grade){
		case "6":
			alert("A");
			break;
		case "7":
			alert("A Plus");
			break;
		case "1":
			alert("its fail");
			break;
			case "5":
			alert("Its B");
			break;
		case "4":
			alert("Its C");
			break;
		case "3":
			alert("Its D");
			break;
	default:
		alert("FAIL");
	}
}
myFunction();
myFunction();
