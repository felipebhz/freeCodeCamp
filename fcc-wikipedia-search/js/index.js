$("#search-button").click(function() {
	var searchText = $("#searchbox").val();
	var urlAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchText+"&format=json&origin=*";
	
	$.ajax({
     url: urlAPI,
     type: "GET",
     dataType: "json",
     success: function(data){
			for(i=0;i<5;i++){
				$("#result-item").append("<a target='_blank' href='https://en.wikipedia.org/?curid="+ data.query.search[i].pageid +"'><h2 id='article-title'>" + 																data.query.search[i].title + "</h2></a> <p id='article-snippet'>"+ data.query.search[i].snippet +"</p>");
			}
								
 	}});
});