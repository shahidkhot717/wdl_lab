function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value)){
		alert("email is not valid only char from a-z A-Z 0-9 @ . _");
		element.value="";
		return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){
		alert("email is not valid a-z or A-Z is must");
		element.value="";
		return false;
	}
	if(!/[@]/.test(element.value)){
		alert("email is not valid @ is must");
		element.value="";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert("email is not valid . is must");
		element.value="";
		return false;
	}
	return true;
}

var email=document.getElementById('useremail');
email.addEventListener('blur',checkEmail,false);
var submit = document.getElementById('submit')