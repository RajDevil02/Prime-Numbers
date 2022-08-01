function hellofun(){
		
		var num1 = document.getElementById("demo").value;
		var crisp = document.getElementById("prime");
		
		if (num1==""){
			crisp.innerHTML = "Enter the Number";
		}
		else if (num1==1){
			crisp.innerHTML = "Neither Odd nor even";
		}
		else if (num1==2){
			crisp.innerHTML = "a prime number";
		}
		else {
			var count1 = 0;
			for(var i=2;i<num1;i++){
				if(num1%i==0){
					count1 = count1 + 1;
					break;
				}
				else{
					count1 = 0;
				}
			}
			if (count1 == 1){
				document.getElementById("prime").innerHTML = "not prime number";
			}
			else{
				document.getElementById("prime").innerHTML = "a prime number";
			}
		}
				
		
	}
function hellofun1(){
		
		
		var num1 = parseInt(document.getElementById("demo").value);
		var num2 = parseInt(document.getElementById("demo1").value);
		var primes = [];
		
		
		for (var i=num1;i<=num2;i++){
			if (i===1){continue;}
			var count1 = 0;
			for (var j=2;j<i;j++){
				if (i%j==0){
					count1 = count1 + 1;
					break;
			}
			else{
				count1 = 0;
			}
			
		}
		if (count1 != 1){
		primes.push(" "+i);
		}
			
					
		
	}
	document.getElementById("prime").innerHTML = primes;
	document.getElementById("totval").innerHTML = primes.length;
	}
	
function cleara(){
		document.getElementById("demo").value = ""
		document.getElementById("demo1").value = ""
		document.getElementById("prime").innerHTML = "";
	}
	
