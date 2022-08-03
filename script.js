//Identify the Prime
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

//Prime range
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
	
//For Divisibles and Prime Factors

function divisibleby() {
			document.getElementById("prime").innerHTML = pass1();
			var checkfactors = primefactors();
			if (checkfactors.length==0){
				document.getElementById("prime1").innerHTML = "The Given number is a prime number. So No prime factors";
			}
			else {document.getElementById("prime1").innerHTML = primefactors();}
		
		
	}
	function pass1(){
		var dnum = parseInt(document.getElementById("demo").value);
		var dlist = [];
		for(var i=1;i<=dnum;i++){
			if(dnum%i==0){
				dlist.push(i);
			}
		}
		return dlist;
		}
		
	function primefactors() {
		var dnum = parseInt(document.getElementById("demo").value);
		var dlist = [];
		var dprime = [];
		var bool = "";
		for(var i=1;i<=dnum;i++){
			if(dnum%i==0){
				dlist.push(i);
			}
		}
		for (var i=0; i<dlist.length;i++){
			var bool = primefunction(dlist[i]);
			if (bool=='y'){
				dprime.push(dlist[i]);
			}
		}
		return dprime;
		
	}
	
	function primefunction(a){
		
		var num1 = a;
		var crisp = document.getElementById("prime");
		var num2 = parseInt(document.getElementById("demo").value);
		
		
		if (num1==1){
			return "n";
		}
		else if (num1==2){
			return "y";
		}
		else if (num1==num2){
		return 'n';
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
				return "n";
			}
			else{
				return "y";
			}
		}
				
		
	}



//For Clear All Functions	
function cleara(){
		var i = document.getElementById("demo");
		var j = document.getElementById("prime");
		var k = document.getElementById("demo1");
		var l = document.getElementById("prime1");
		var m = document.getElementById("totval");
		var ival = [i,j,k,l,m];
		//var iner = [j,l];
		
		for (var n=0;n<5;n++){
			try{
				ival[n].value = "";
				
			}
			catch(err){
				continue;}
				
			
			
		}
		for (var n=0;n<5;n++){
			try{
				ival[n].innerHTML = "";
				
			}
			catch(err){
				continue;}
				
			
			
		}
		
	}
