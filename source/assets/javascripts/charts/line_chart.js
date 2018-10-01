var chart = c3.generate({
  bindto: '#line',
  type : 'line',
  padding: {
    top: 80,
    left: 10,
    right: 10,
    bottom: 20
  },
  color: {
    pattern: ['#00AAEE']
  },
  legend:{
    show: false
  },
  point: {r:5},
  grid: {
      x: {
        show: true,
        lines: [{value: 4.5, class: 'last'}]
      },
      y: {
        show: false
      }
  },
  axis: {
     x: {
      padding: {
        left: 0,
        right: 0
      },

       tick: {
        fit: true,
        outer: false
      },
       type: 'category',
       categories: ["Label1", "Label2", "Label3", "Label4", "Label5"],

     },
    y: {show:false}
  },
    data: {
        x: 'x',
        columns: [
            ['x', 'Jun', 'Mar', 'Jun', 'Sept', 'Dec'],
            ['data1', 30, 300, 100, 400, 150]
        ]
    },
    oninit: function () {
      this.main.append('rect')
        .style('fill', 'white')
        .attr('x', 0.5)
        .attr('y', -0.5)
        .attr('width', this.width)
        .attr('height', this.height)
        .transition().duration(1500)
        .attr('x', this.height)
        .attr('height', 0)
        .remove();
},
    tooltip: {
      contents: function (d) {
        return "<div data_tooltip=" + d[0].value + "&nbsp;min" + " data_tooltip_pos='down'></div>";
      }
    }
});
// setTimeout(function () {
// chart.load({
//   columns: [
//       ['x', 'Jua', 'Mar', 'Jun', 'Sept', 'Dic'],
//       ['data1', 30, 200, 100, 400, 150]
//   ]
// });
// }, 1000);
