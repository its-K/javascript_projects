
let url="https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";
$.ajax({ 
	type: 'GET',
    url: url,
    success: function(response){ 
        for(i=0;i<=200;i++){
            ele=response[i];
            starPercentage = (ele['average_rating'] / 5) * 100;
            starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
            dat=`<tr><td>${ele['bookID']}</td><td>${ele['title']}</td><td>${ele['authors']}</td><td><div class="stars-outer">
            <div class="stars-inner" style="width:${starPercentageRounded}"></div><br>${ele['average_rating']}</td><td>${ele['isbn']}</td><td>${ele['language_code']}</td><td>${ele['ratings_count']}</td><td>${ele['price']}</td>
            <td><button class="btn">Buy now</button></td></tr>`;
            $('tbody').append(dat);
        }
    },
    error: function(response){
        console.log(response);
    }
});


$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $("table").addSortWidget();