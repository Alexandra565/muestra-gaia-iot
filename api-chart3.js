var hora = [];
var humedad=[];

// Consumo de la API
fetch('dataSet.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.hora != undefined && datos_obtenidos.humedad) {
                hora.push(datos_obtenidos.hora);
                humedad.push(datos_obtenidos.humedad);
            }
        });

        var trace1 = {
            x: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            y: humedad,
            mode: 'lines',
            marker: {
              color: 'rgb(51, 255, 85  )',
              size: 12
            }
          };
                // Estilos de la gráfica
        var layout =
        {
            title: 'HUMEDAD',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'FECHA'
            },
            yaxis:
            {
               title: 'HUMEDAD'
            }
        };
          
          var data = [trace1];
          
        Plotly.newPlot('div3', data,layout);
    });