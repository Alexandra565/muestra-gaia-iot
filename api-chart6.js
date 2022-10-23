var presion=[];
// Consumo de la API
fetch('dataSet.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.presion != undefined ) {
                presion.push(datos_obtenidos.presion);
            }
        });

    let mayor=0;
    for ( i = 0; i < presion.length; i++) {
        if(presion[i]>mayor){
            mayor=presion[i];
        }
    }
   console.log(mayor);

   
        
   var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      //value: mayor,
      value: 687,
      title: { text: "Presion" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 1000] } },
      marker: {
        color: 'red',
        size: 12
      }
    }
  ];
  var layout = {
    height: 280,
    template: {
      data: {
        indicator: [
          {
            title: { text: "presion" },
            mode: "number+delta+gauge",
            delta: { reference: 90 }
          }
        ]
      }
    }

  };
  //var layout = { width: 500, height: 300 };
  Plotly.newPlot('div6', data, layout);


});

