$(document).ready(function(){
	var url  = "https://raw.githubusercontent.com/Megumi-Flores/ESTADISTICA-COVID/main/data.json"
	$.getJSON(url,function(data){
		console.log(data)
    var date = []
    var confirmed = []
    $.each(data.newconfirmeds,function(id,obj){
      date.push(obj.date)
      confirmed.push(obj.newconfirmed)
    })
    console.log(confirmed)
    confirmed.shift()
//////////////////////////////////////////////////////////////////////
    var myChart = document.getElementById("myChart").getContext('2d')
    var chart = new Chart(myChart, {
      type: 'line',//tipo de grafico
      data: {
        labels: date,//ordenado por fecha (eje x)
        datasets:[
          {
            label: "New Confirmed Cases",//color/nombre que identifica
            data: confirmed,// datos a graficar (eje y)
            backgroundColor: "#f1c40f",
            minBarLength: 100, //longitud de la barra
          },
        ]
      }
    })
	})	
})