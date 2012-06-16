
 $(document).ready(function(){
    start_all_waluty();
    change_all_waluty();
    change_name();
    zakladki();
 });

 function zakladki(){
     $("#wykres").hide();
      
      $("#z1").on("click",function(event){
        $("#tabela").show();
        $("#wykres").hide();
        $("#chart").hide();
    });
    $("#z2").on("click",function(event){
      $("#chart").show();
      $("#wykres").show();
      $("#tabela").hide();
    });
 }
 
 function start_all_waluty(){
   
 if($("select[name=set_locale]").attr('id') == 'set_locale')
   {  
      var text = $("select[name=set_locale]").find ("option:selected").text();
      post_ajax("action",text);
   }
 }

 function change_name(){
  if($("select[name=set_name]").attr('id') == 'set_name')
    { 
       $("#chart").show();
      $("select[name=set_name]").change(function(){
         var text = $(this).find("option:selected").text();
         get_ajax("action",text);
      });
      return this;
    }
 }

 function change_all_waluty(){
   if($("select[name=set_locale]").attr('id') == 'set_locale'){
       $("select[name=set_locale]").change(function(){
          var text = $(this).find("option:selected").text();
          post_ajax("action",text);
        });
       return this;
     }
 }

function post_ajax(action,value){
  $.post($(this).attr(action),{set_locale:value},null,"script");
  return false
}

function get_ajax(action,value){

  var parametr = {'set_name':value };
  $.ajax({
		type: 'GET',
		url: '/',
		data: parametr,
		contentType: 'application/json; charset=utf-8', 
		dataType: 'json',
		success: function(html) {
                 json_parse(html);
		},
		beforeSend: function() {
		},
		error: function() {
		}
	});  

}


function wykres(kursy2,daty2,nazwa){
  var cos = $("#chart").appendTo(document.body);
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: cos[0]
        },
        title:{
            text: nazwa
         },
        xAxis: {
            categories: daty2
        },
        yAxis:{
           title: {
            text: "ZŁOTY"
           }
        },
        
        series: [{
            name: nazwa,
            data: kursy2       
        }]
    });

}

function json_parse(ob_json){
 var kursy =new Array();
 var daty =new Array();

 for(var i =ob_json.length-1;i>=0;i--)
     {
       kursy.push(parseFloat(ob_json[i].kurs));
       daty.push(ob_json[i].data);
     }
     var nazwa = ob_json[0].nazwa.toUpperCase();
     wykres(kursy,daty,nazwa);
}



  
