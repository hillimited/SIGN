google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
      
  		var data = new google.visualization.arrayToDataTable([
        ['Sentiment', 'Percent', { role: 'style' }],
        ['Positive',0.3, '#10cfbd'],
        ['Negative',0.4, '#f55753'],
        ['Neutral',0.6, '#dadada'],
      ]);
      
  		var options = {
        legend: 'none',
        vAxis: {
          format: 'percent',
          viewWindow: {
            min: 0,
            max: 1
          }
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }