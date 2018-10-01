var popCanvas = document.getElementById("bubble");

Chart.defaults.global.defaultFontFamily = "Telefonicaregular";
Chart.defaults.global.defaultFontSize = 13;
Chart.defaults.global.defaultColor= '#fff';

var popData = {
  datasets: [{
    label: ['Deer Population'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 20,
      y: 10,
      r: 25
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 20,
      y: 10,
      r: 10
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "rgba(78,200,231,.5)",
    borderColor: "rgba(78,200,231,.5)",
  }]
};

var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData,
  options: {
    plugins: {
      deferred: {
        delay: 800      // delay of 500 ms after the canvas is considered inside the viewport
      }
    },
    layout: {
      padding: {
          left: 18,
          right: 50,
          top: 0,
          bottom: 30
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
   },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  },
});
