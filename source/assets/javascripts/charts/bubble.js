var chart = c3.generate({
  bindto: '#bubble',
  padding: {
    top: 50,
    left: 40,
    right: 40,
    bottom: 0
  },
  color: {
    pattern: ['#00AAEE']
  },
  data: {
    type: 'bubble',
    pairs: [{
        x: '3L',
        y: '12',
        value: 10000
      },
      {
        x: '9L',
        y: '50',
        value: 20000
      },
      {
        x: '15L',
        y: '90',
        value: 39990
      },
    ]
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
       categories: ["Label1", "Label2", "Label3", "Label4", "Label5"],

     },
  },
  tooltip: {
    contents: function (d) {
      return "<div data_tooltip=" + d[0].value + "&nbsp;min" + " data_tooltip_pos='down'></div>";
    }
  },
  grid: {
    x: {
      show: false
    },
    y: {
      show: false
    }
  },
});
