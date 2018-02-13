$( document ).ready(function() {
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
    run_page();
	
    setTimeout(fix_card_size, 500);

	
	$('.collapse').on('hide.bs.collapse', function () {
		  // do something…
    	$(this).parent().find('a').html('+ '+$(this).parent().find('a').attr('data-show')+' more');


	});
    
    $('.collapse').on('shown.bs.collapse', function () {
		  // do something…
    	$(this).parent().find('a').html('  ');

	});
    
   
//    	select2-results__option select2-results__option--highlighted
    	
    //	$('.select2-results__option.select2-results__option--highlighted').append('<i class="fa fa-angle-down"></i>');
    
    $('.selectbox').each(function(){
    	var placeholder = $(this).attr('data-placeholder');
    	$(this).SumoSelect({
    		  placeholder: placeholder,
    		   search: true ,
    		   triggerChangeCombined: true,
    		   selectAll: true,
    		   csvDispCount: 1
    	   });
    	
    	
    	
    });
    
   
   sumoSelectChange();
   $(".group_skill_list").readMoreReadLess({
       readMoreText: 'Show more items ...',
       readLessText: 'Show fewer items ...',
       readMoreClass:'button',
       readLessClass:'button'
   });
   
   $('.js-data-example-ajax').select2({
	   ajax: {
	     url: 'https://api.github.com/search/repositories',
	     dataType: 'json'
	     // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
	   }
	 });

});


function run_page() {
	handle_slider();
	handle_rating();
	handle_links();
}

function handle_slider(){
	$('.multiple-items').slick({
		  infinite: false,
		  adaptiveHeight: false,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: false,
		  arrows: true,
		});
}
function create_graph(idd) {
	 var tableRows = [];
	  var result = document.getElementById(idd);
	  var results = [];
	  results.push(result);
	  Array.prototype.forEach.call(results, function(table) {
	  Array.prototype.forEach.call(table.rows, function(row) {
		    var tableColumns = [];
		    Array.prototype.forEach.call(row.cells, function(cell) {
		        var cellText = cell.textContent || cell.innerText;
		        switch (cell.cellIndex) {
		        case 0:
		            tableColumns.push(cellText.trim());
		            break;

		          default:
		            switch (row.rowIndex) {
		              case 0:
		                tableColumns.push(cellText.trim());
		                break;

		              default:
		                tableColumns.push(parseFloat(cellText));
		            }
		        }
		      });
		      tableRows.push(tableColumns);
		    });
	  
	  var display_graph_div = table.getAttribute("data-display");
	  var data = google.visualization.arrayToDataTable(tableRows);
	  var chart = new google.visualization.ColumnChart(document.getElementById(display_graph_div));
	  chart.draw(data);
	  });
}

   function drawChart() {
	   $( ".display_table" ).each(function( index ) {
		   console.log( index + ": " + $( this ).attr('id'));
		   create_graph($( this ).attr('id'));
		 }); 
	   
	   
	  
    	 
    }



function handle_rating() {
	try{
    $(".rateYo").each(function() {
    	  var rating = $( this ).data( "rating" );
    	  var star_width = $( this ).data( "star_width" )+'px';
    	  $( this ).rateYo({
    	        rating: rating,
    	        readOnly: true,
    	        starWidth: star_width
    	      });

    });
	} catch(err) {}
}

function handle_links() {
	$('.nav-link').unbind().click(function() {
		 var hyperlink = $(this).data('link') ;
		  $('.loader').show();
		  $.get( hyperlink, function( data ) {
			  $( "#main_container" ).html( data );
			  $('.loader').hide();
			  run_page();
			});
	});
}

function fix_card_size(){
	
	var maxheight=0;
    $('.group-card-shadow').each(function(){
		if($(this).height() > maxheight)
			maxheight = $(this).height();
	})
	 $('.group-card-shadow').each(function(){
		$(this).css('max-height',maxheight);
		$(this).css('min-height',maxheight);
		
	})
}

function sumoSelectChange(){
	$('.selectbox').unbind().change(function(){
		var selected_value = $(this).val();
		var search_div = $(this).attr('data-searchClass');

		if(selected_value !== null || selected_value != undefined){
			var search_field = $(this).attr('data-searchfield');

		
		$('.'+search_div).each(function(){
			var current_value_in_div = $(this).attr('data-'+search_field);
			
			if(current_value_in_div != undefined || current_value_in_div !== ''){
				try{
			if(selected_value.includes(current_value_in_div) ){
				$(this).parent().show();
			}else{
				$(this).parent().hide();
			}
				}catch(e){
					console.error('selected value'+selected_value);
					console.error('sksksjk '+ current_value_in_div);

					console.error($(this).parent().html());
				}
			}
			
		});
		
		}else{
			$('.'+search_div).each(function(){ $(this).parent().hide(); })
		}
	});
}