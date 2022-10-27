/*****************************************************************************/
//---------------------RELOJ DE LA HUMEDAD RELATIVA--------------------------//
/*****************************************************************************/

var humedad = [];
// Consumo de la API
fetch("dataSet.json")
  // Then necesita una promesa, y esa promesa se resuelve con una respuesta
  .then((datos_obtenidos) => datos_obtenidos.json())

  //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
  .then(function transformar(datos_obtenidos) {
    // Iteramos sobre cada dato
    datos_obtenidos.forEach(function agregar(datos_obtenidos) {
      //Si los datos son diferentes de vacío
      if (datos_obtenidos.humedad != undefined) {
        humedad.push(datos_obtenidos.humedad);
      }
    });

    let ultimoValor = humedad[humedad.length - 1];

    console.log(ultimoValor);

    var data = [
      {
        type: "indicator",
        value: ultimoValor,
        delta: { reference: 160 },
        gauge: { axis: { visible: false, range: [20, 80] } },
        domain: { row: 0, column: 0 },
      },
    ];

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: ultimoValor,
        title: { text: "Humedad relativa (%)" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: { axis: { range: [20, 80] } },
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
              title: { text: "Humedad" },
              mode: "number+delta+gauge",
              delta: { reference: 90 },
            },
          ],
        },
      },
    };

    Plotly.newPlot("div5", data, layout);
  });
