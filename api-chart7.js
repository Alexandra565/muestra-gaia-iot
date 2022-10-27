/*****************************************************************************/
//---------------------RELOJ DE LA TEMPERATURA-----------------------//
/*****************************************************************************/

var temperatura = [];
// Consumo de la API
fetch("dataSet.json")
  // Then necesita una promesa, y esa promesa se resuelve con una respuesta
  .then((datos_obtenidos) => datos_obtenidos.json())

  //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
  .then(function transformar(datos_obtenidos) {
    // Iteramos sobre cada dato
    datos_obtenidos.forEach(function agregar(datos_obtenidos) {
      //Si los datos son diferentes de vacío
      if (datos_obtenidos.temperatura != undefined) {
        temperatura.push(datos_obtenidos.temperatura);
      }
    });

    let ultimoValor = temperatura[temperatura.length - 1];
    console.log(ultimoValor);

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: ultimoValor,
        title: { text: "Temperatura (°C)" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: { axis: { range: [0, 50] } },
      },
    ];
    var layout = {
      height: 280,
      template: {
        data: {
          indicator: [
            {
              title: { text: "Temperatura" },
              mode: "number+delta+gauge",
              delta: { reference: 90 },
            },
          ],
        },
      },
    };
    Plotly.newPlot("div7", data, layout);
  });
