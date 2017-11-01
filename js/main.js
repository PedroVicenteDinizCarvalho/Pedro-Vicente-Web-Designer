function abrirMenu(){
	if(window.document.getElementById("socialItem1").style.display === "block"){
		document.getElementById("socialItem1").style.display="none";
	}else{
		document.getElementById("socialItem1").style.display="block";
	 }
	if(window.document.getElementById("socialItem2").style.display === "block"){
		document.getElementById("socialItem2").style.display="none";
	}else{
		document.getElementById("socialItem2").style.display="block";
	 }
	if(window.document.getElementById("socialItem3").style.display === "block"){
		document.getElementById("socialItem3").style.display="none";
	}else{
		document.getElementById("socialItem3").style.display="block";
	 }
	if(window.document.getElementById("socialItem4").style.display === "block"){
		document.getElementById("socialItem4").style.display="none";
	}else{
		document.getElementById("socialItem4").style.display="block";
	 }
	 document.getElementById("button").style.display="none";
}