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
	}
}