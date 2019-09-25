var barchart = c3.generate({
  bindto: "#bar",
  color: {
    pattern: ["#00AAEE", "#ACF8E2"]
  },
  padding: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 15
  },
  data: {
    columns: [["External", 200, 100, 400]],
    type: "bar"
  },
  legend: {
    show: false
  },
  grid: {
    x: {
      show: false
    },
    y: {
      show: true
    }
  },
  axis: {
    x: {
      padding: {
        left: 0,
        right: 0
      },
      tick: {
        fit: false,
        outer: false
      },
      type: "category",
      categories: ["Top 100", "101-200", "201-300"]
    },
    y: { show: false }
  },
  tooltip: {
    contents: function(d) {
      return (
        "<div data_tooltip=" +
        d[0].value +
        "&nbsp;min" +
        " data_tooltip_pos='down'></div>"
      );
    }
  },
  bar: {
    width: {
      ratio: 0.1 // this makes bar width 50% of length between ticks
    }
    // or
    //width: 100 // this makes bar width 100px
  }
});

var svg = d3
  .select("#bar")
  .append("svg")
  .attr("width", 500)
  .attr("height", 300);

var defs = svg.append("defs");

var gradient = defs
  .append("linearGradient")
  .attr("id", "svgGradient")
  .attr("x1", "0%")
  .attr("x2", "100%")
  .attr("y1", "0%")
  .attr("y2", "100%");

gradient
  .append("stop")
  .attr("class", "start")
  .attr("offset", "0%")
  .attr("stop-color", "red")
  .attr("stop-opacity", 1);

gradient
  .append("stop")
  .attr("class", "end")
  .attr("offset", "100%")
  .attr("stop-color", "blue")
  .attr("stop-opacity", 1);

// d3.select('#bar').insert('div', ':first-child')
//   .attr('class', 'pie_legend')
//   .insert('ul').attr('class', 'list-group')
//   .selectAll('span')
//   .data(['External', 'Internal'])
//   .enter().append('li').attr('class', 'list-group-item')
//   .append('div').attr('class', 'legend-label')
//   .attr('data-id', function(id) {
//     return id;
//   })
//   .append('div', '.legend-label')
//   .html(function(id) {
//     var data = barchart.data(id);
//     return id;
//   })
//   .on('mouseover', function(id) {
//     barchart.focus(id);
//     $(this).addClass('active');
//   })
//   .on('mouseout', function(id) {
//     barchart.revert();
//     $(this).removeClass('active');
//
//   })
//   .insert('span', '.legend-label').attr('class', 'badge')
//   .each(function(id) {
//     d3.select(this).style('background-color', barchart.color(id));
//   })
