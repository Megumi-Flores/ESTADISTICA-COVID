
//almacenamos los datos del json en 2 arrays
$(document).ready(function(){
	var url  = "https://raw.githubusercontent.com/Megumi-Flores/ESTADISTICA-COVID/main/data.json"/*en linea*/
	$.getJSON(url,function(data){
		console.log(data)
    var date = []//variable para almacenar fecha
    var confirmed = []//variable para almacenar confirmados
    $.each(data.newconfirmeds,function(id,obj){//sirve para pasar los datos
      date.push(obj.date)
      confirmed.push(obj.newconfirmed)
    })
    console.log(confirmed)//necesario´para confirmar f12
    confirmed.shift()

//////////////////////////////////////////////////////////////////////
// para el grafico
    var myChart = document.getElementById("myChart").getContext('2d')
    var chart = new Chart(myChart, {
      type: 'line',//tipo de grafico
      data: {
        labels: date,//ordenado por fecha (eje x)
        datasets:[
          {
            label: "Nuevos Casos Confirmados",//color/nombre que identifica
            data: confirmed,// datos a graficar (eje y)
            backgroundColor: "#f1c40f",
            minBarLength: 100, //longitud de la barra
          },
        ]
      }
    })
	})	
})