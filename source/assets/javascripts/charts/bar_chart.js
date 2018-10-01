var barchart = c3.generate({
  bindto: '#bar',
  color: {
    pattern: ['#00AAEE', '#ACF8E2']
  },
  padding: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 50
  },
    data: {
        columns: [
            ['External', 200, 100, 400, 150, 250],
            ['Internal', 100, 140, 200, 150, 50]
        ],
        type: 'bar'
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
        type: 'category',
        categories: ["Spa", "UK", "Bra", "USA", "Mex"],
       },
      y: {show:false}
    },
    tooltip: {
      contents: function (d) {
        return "<div data_tooltip=" + d[0].value + "&nbsp;min" + " data_tooltip_pos='down'></div>";
      }
    },
    bar: {
        width: {
            ratio: 0.3 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});



d3.select('#bar').insert('div', ':first-child')
  .attr('class', 'pie_legend')
  .insert('ul').attr('class', 'list-group')
  .selectAll('span')
  .data(['External', 'Internal'])
  .enter().append('li').attr('class', 'list-group-item')
  .append('div').attr('class', 'legend-label')
  .attr('data-id', function(id) {
    return id;
  })
  .append('div', '.legend-label')
  .html(function(id) {
    var data = barchart.data(id);
    return id;
  })
  .on('mouseover', function(id) {
    barchart.focus(id);
    $(this).addClass('active');
  })
  .on('mouseout', function(id) {
    barchart.revert();
    $(this).removeClass('active');

  })
  .insert('span', '.legend-label').attr('class', 'badge')
  .each(function(id) {
    d3.select(this).style('background-color', barchart.color(id));
  })
