function configDonut() {
  return {
    type: 'doughnut',
    data: {
      labels: ["In order", "Out of order"],
      datasets: [{
        data: [300, 50],
        backgroundColor: [
          "#0088CC",
          "#00EEAA",
        ],
        borderWidth: 0
      }]
    },
    options: {
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
      plugins: {
        deferred: {
          delay: 100      // delay of 500 ms after the canvas is considered inside the viewport
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true
      },
      cutoutPercentage: 75,
      legend: false,
      legendCallback: function(chart) {
        var text = [];
        text.push('<ul class="' + chart.id + '-legend">');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          text.push('<span class="circle" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span><li><span>');
          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push('</span></li>');
        }
        text.push('</ul>');
        return text.join("");
      },
      tooltips: {
        enabled: false,
    	},
    }
  }
}

window.onload = function() {
  var container = document.querySelector('.donut');
  var div = document.createElement('div');
  div.classList.add('chart-container');

  var canvas = document.createElement('canvas');
  div.appendChild(canvas);
  canvas.setAttribute('id', 'donut');
  container.appendChild(div);

  var ctx = canvas.getContext('2d');
  var config = configDonut();
  var donut = new Chart(ctx, config);

  $("#legend01").html(donut.generateLegend());
  // $("#legend01").on('click', "li", function() {
  //   donut.data.datasets[0].data[$(this).index()] += 50;
  //   donut.update();
  // });
};
