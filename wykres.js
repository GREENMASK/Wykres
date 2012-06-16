 function drawChart(data,kurs) {
           alert("cos");
      var dataTable = new google.visualization.DataTable();
            dataTable.addColumn('string','Data');
            dataTable.addColumn('number','Kurs'); 
            dataTable.addRows(data.length);
            var i;
             for(i=0;i<data.length;i++){
                  dataTable.setValue(0,0,data[0]);
                  datatable.setValue(0,1,kurs[0]);
                }
                 
                alert(dataTable);
            var chart = new google.visualization.LineChart  			(document.getElementById('chart_div'));
       chart.draw(dataTable, {width: 400, height: 200,
		  title: '', hAxis: {title: ''}});
  }
