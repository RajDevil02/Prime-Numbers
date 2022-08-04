function elimination(){
	var n1 = parseInt(document.getElementById("num1").value);
	var n2 = parseInt(document.getElementById("num2").value);
	var n3 = parseInt(document.getElementById("num3").value);
	var n4 = parseInt(document.getElementById("num4").value);
	var n5 = parseInt(document.getElementById("num5").value);
	var n6 = parseInt(document.getElementById("num6").value);
	var x,y;
	x = ((n5*n3)-(n2*n6))/((n5*n1)-(n2*n4));
	y = ((n4*n3)-(n1*n6))/((n4*n2)-(n1*n5));
	
	document.getElementById("xval").innerHTML = x;
	document.getElementById("yval").innerHTML = y;
	
	
}
	

document.getElementById("rese").addEventListener("click", function(event){
	document.getElementById("xval").innerHTML = "";
	document.getElementById("yval").innerHTML = "";
});

document.getElementById("butt1").addEventListener("click", function(event){
  event.preventDefault()
});