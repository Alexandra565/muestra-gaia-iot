/*****************************************************************************/
//---------------------RELOJ DE LA PRESIÓN ATMOSFÉRICA-----------------------//
/*****************************************************************************/

var presion = [];
// Consumo de la API
fetch("dataSet.json")
  // Then necesita una promesa, y esa promesa se resuelve con una respuesta
  .then((datos_obtenidos) => datos_obtenidos.json())

  //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
  .then(function transformar(datos_obtenidos) {
    // Iteramos sobre cada dato
    datos_obtenidos.forEach(function agregar(datos_obtenidos) {
      //Si los datos son diferentes de vacío
      if (datos_obtenidos.presion != undefined) {
        presion.push(datos_obtenidos.presion);
      }
    });

    let ultimoValor = presion[presion.length - 1];
    console.log(ultimoValor);

    let ultimaHora = datos_obtenidos[datos_obtenidos.length - 1].hora;
    console.log(ultimaHora);

    var divHora = document.getElementById('div_hora');
    divHora.innerHTML += ultimaHora;

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: ultimoValor,
        title: { text: "Presión atmosférica (hPa)" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: { axis: { range: [300, 1100] } },
        marker: {
          color: "red",
          size: 12,
        },
      },
    ];
    var layout = {
      height: 280,
      template: {
        data: {
          indicator: [
            {
              title: { text: "presion" },
              mode: "number+delta+gauge",
              delta: { reference: 90 },
            },
          ],
        },
      },
    };
    Plotly.newPlot("div6", data, layout);
  });
