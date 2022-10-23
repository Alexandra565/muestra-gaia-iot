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

    let mayor = 0;
    for (i = 0; i < humedad.length; i++) {
      if (humedad[i] > mayor) {
        mayor = humedad[i];
      }
    }
    console.log(mayor);

    var data = [
      {
        type: "indicator",
        //value: mayor,
        value: 430,
        delta: { reference: 160 },
        gauge: { axis: { visible: false, range: [0, 1000] } },
        domain: { row: 0, column: 0 },
      },
    ];

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        //value: mayor,
        value: 687,
        title: { text: "Humedad" },
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
              title: { text: "Humedad" },
              mode: "number+delta+gauge",
              delta: { reference: 90 }
            }
          ]
        }
      }
  
    };

    Plotly.newPlot("div5", data, layout);
  });
