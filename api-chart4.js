var hora = [];
var presion=[];
const color2 = 'rgb(255,83,127)';
var col2 = [];

// Consumo de la API
fetch('dataSet.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.hora != undefined && datos_obtenidos.presion) {
                hora.push(datos_obtenidos.hora);
                presion.push(datos_obtenidos.presion);
                col2.push(color2);
            }
        });

        var trace1 = {
            x: [6, 89, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            y: presion,
            mode: 'lines',
            marker: {
              color: 'rgb(255,83,127)',
              size: 12
            }
          };
                // Estilos de la gráfica
        var layout =
        {
            title: 'PRESION',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'FECHA'
            },
            yaxis:
            {
               title: 'PRESION'
            }
        };
          
          var data = [trace1];
          
        Plotly.newPlot('div1', data,layout);
    });