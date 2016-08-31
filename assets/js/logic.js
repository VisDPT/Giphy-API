$('button').on('click', function() {
var car = $(this).data('car');
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10"; 


$.ajax({
	url: queryURL,
	method: 'GET'
})
    .done(function(response){
    	console.log (response);
        //response.data because image info is inside the data key
        var results = response.data;

        //for loop to display only 10 results
        for(var i =0; i<results.length; i++){
        	var carDiv = $('<div class = "item">');
        	
        	var rating = results[i].rating;
        	
        	var p = $('<p>').text("Rating: " + rating);
        		
        	var carImage = $('<img>');
        	carImage.attr('src', results[i].images.fixed_height.url);

        	carDiv.append(p);
        	carDiv.append(carImage);
        	$('#gifsAppearHere').prepend(carDiv);

        	//DATA STATE ON CLICK

        }

    });
});
//=====================SEARCH BUTTON ON CLICK FUNCTIONWITH NEW BUTTON=====================
//Search Button On click
$('#searchBtn').on('click', function() {
    // Get Search Term
    queryTerm = $('#search').val().trim()
    // Add in the Search Term
    var newURL = "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(newURL);

    //ADD a button with search term
    var searchResultButton = ('<button>'+ queryTerm+ '</button>')
    $('.searchedCarButtons').append(searchResultButton);

    //add function to the new button
    $('.searchedCarButtons').on("click", function(){
        $.ajax({
            url:newURL,
            method: 'GET'
        })
        .done(function(response){
             console.log (response);

             var searchResults = response.data;

             for (var i=0; i<searchResults.length; i++){
                var searchedCarDiv = $('<div class = "searchedItem">');

                var searchedRating = searchResults[i].rating;
                
                var searchedP = $('<p>').text("Rating: " + searchedRating);
                
                var searchedCarImg = $('<img>');
                searchedCarImg.attr('src', searchResults[i].images.fixed_height.url);
                
                searchedCarDiv.append(searchedP);
                searchedCarDiv.append(searchedCarImg);
                $('gifsAppearHere').prepend(searchedCarDiv);
             }

        });
    });

});