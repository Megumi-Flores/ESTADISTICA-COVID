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



[
  {
    "active": "Switzerland",
    "confirmed": "",
    "deaths": "0",
    "recovered": "0",
    "date": "29/04/2020 22:37:46"
  },
  {
    "active": "Switzerland",
    "confirmed": "",
    "deaths": "0",
    "recovered": "0",
    "date": "29/04/2020 22:37:46"
  }
]
