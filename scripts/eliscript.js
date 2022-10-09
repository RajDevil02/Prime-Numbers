function elimination1(){
	var n1 = parseInt(document.getElementById("num1").value);
	var n2 = parseInt(document.getElementById("num2").value);
	var n3 = parseInt(document.getElementById("num3").value);
	var n4 = parseInt(document.getElementById("num4").value);
	var n5 = parseInt(document.getElementById("num5").value);
	var n6 = parseInt(document.getElementById("num6").value);
	var returnedValue = getValuexy(n1, n2, n3, n4, n5, n6);
	
	document.getElementById("xval").innerHTML = returnedValue[0];
	document.getElementById("yval").innerHTML = returnedValue[1];
	
	
}

function getValuexy(n1, n2, n3, n4, n5, n6){
	var x,y;
	x = ((n5*n3)-(n2*n6))/((n5*n1)-(n2*n4));
	y = ((n4*n3)-(n1*n6))/((n4*n2)-(n1*n5));
	var returnVal = [x,y];
	return returnVal;
}

function elimination2(){
	var n1 = parseInt(document.getElementById("num01").value);
	var n2 = parseInt(document.getElementById("num02").value);
	var n3 = parseInt(document.getElementById("num03").value);
	var n4 = parseInt(document.getElementById("num04").value);
	var n5 = parseInt(document.getElementById("num05").value);
	var n6 = parseInt(document.getElementById("num06").value);
	var n7 = parseInt(document.getElementById("num07").value);
	var n8 = parseInt(document.getElementById("num08").value);
	var n9 = parseInt(document.getElementById("num09").value);
	var n10 = parseInt(document.getElementById("num10").value);
	var n11 = parseInt(document.getElementById("num11").value);
	var n12 = parseInt(document.getElementById("num12").value);
	var x1 = (n7*n1)-(n3*n5);
	var y1 = (n7*n2)-(n3*n6);
	var c1 = (n7*n4)-(n3*n8);
	var x2 = (n11*n5)-(n7*n9);
	var y2 = (n11*n6)-(n7*n10);
	var c2 = (n11*n8)-(n7*n12);
	var returnedValue = getValuexy(x1,y1,c1,x2,y2,c2);
	var xval = returnedValue[0];
	var yval = returnedValue[1];
	var zval = (n4-(n1*xval)-(n2*yval))/n3;
	if (n3!=0){
		zval = (n4-(n1*xval)-(n2*yval))/n3;
	}
	else if (n7!=0) {
		zval = (n8-(n5*xval)-(n6*yval))/n7;
	}
	else{
		zval = (n12-(n9*xval)-(n10*yval))/n11;
	}

	document.getElementById("xval1").innerHTML = xval;
	document.getElementById("yval1").innerHTML = yval;
	document.getElementById("zval1").innerHTML = zval;
}

document.getElementById("butt2").addEventListener("click", function(event){
  event.preventDefault()
});

document.getElementById("butt1").addEventListener("click", function(event){
  event.preventDefault()
});