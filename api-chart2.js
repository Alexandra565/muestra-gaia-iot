var hora = [];
var temperatura=[];


// Consumo de la API
fetch('dataSet.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.hora != undefined && datos_obtenidos.temperatura) {
                hora.push(datos_obtenidos.hora);
                temperatura.push(datos_obtenidos.temperatura);
            }
        });

        var trace1 = {
            x: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            y: temperatura,
            type: 'scatter'
          };
                // Estilos de la gráfica
        var layout =
        {
            title: 'TEMPERATURA',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'FECHA'
            },
            yaxis:
            {
               title: 'TEMPERATURA'
            }
        };
          
          var data = [trace1];
          
        Plotly.newPlot('div2', data,layout);
    });