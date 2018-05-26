var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("none")[0];
var btn1 = document.getElementsByClassName("none")[1];
var btn2 = document.getElementsByClassName("none")[2];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}
btn1.onclick = function(){
	modal.style.display = "block";
}
btn2.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}else if(event.target == modal5){
		modal5.style.display = "none";
	}
}



var modal5 = document.getElementById("myModal-2");
var btn5 = document.getElementsByClassName("ts")[0];
var span5 = document.getElementsByClassName("close-2")[0];

btn5.onclick = function(){
	modal5.style.display = "block";
}
span5.onclick = function(){
	modal5.style.display = "none";
}


var enterBtn = document.getElementById("enter-div");
var i1 = document.getElementById("mastamasta");
var i2 = document.getElementById("masta2");
let btnRedirect = document.getElementById('btnRedirect');
	/*
	var login = document.getElementsByClassName("e")[0];
	var password = document.getElementsByClassName("e")[1];
	*/

	if (btnRedirect) {
		btnRedirect.onclick = function(e) {
		e.preventDefault();
		//modal.style.display = "block";
			if(i1.value == "Login" && i2.value == "Password") {
				window.location = btnRedirect.href;
			}else if(i1.value !== "Login"){
				i1.value="";
				i1.placeholder = "Неверный логен";
			}
			if(i2.value !== "Password") {
				i2.value="";
				i2.placeholder = "Неверный пароль";
			}	
		};
	}