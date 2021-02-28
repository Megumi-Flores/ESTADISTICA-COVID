$(document).ready(function(){
	var url  = "https://raw.githubusercontent.com/Megumi-Flores/ESTADISTICA-COVID/main/data.json"
	$.getJSON(url,function(data){
		console.log(data)
	})	
})