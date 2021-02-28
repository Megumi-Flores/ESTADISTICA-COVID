$(document).ready(function(){
	var	url = ""

	$.getJSON(url,function(data){
		console.log(data)

		var total_active,total_recovered,total_deaths,totas_confirmed

		total_active = data.statewise[0]total_active
		total_recovered = data.statewise[0]total_recovered
		total_deaths = data.statewise[0]total_deaths
		total_confirmed = data.statewise[0]total_confirmed
})