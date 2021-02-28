$(document).ready(function(){
	var url  = "https://raw.githubusercontent.com/Megumi-Flores/ESTADISTICA-COVID/main/data.json"
	$.getJSON(url,function(data){
		console.log(data)

    var confirmed = []
    $.each(data.newconfirmeds,function(id,obj){
      confirmed.push(obj.newconfirmed)
    })
    console.log(confirmed)
    confirmed.shift()

    var myChart = document.getElementById("myChart").getContext('2d')
    var chart = new Chart(myChart, {
      type: "line",
      data: {
        labels: confirmed,
        datasets: [
          {
            label: "New Confirmed Cases",
            data: newconfirmed,
            backgroundColor: "#f1c40f",
            minBarLength: 100,
          },
        ]
      }
      options:{}
    })
	})	
})