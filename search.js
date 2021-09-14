var item, title, author, publisher, link, img;
var displayList = document.getElementById("results");
var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=search+";
//var placeHldr = '<img src = '
var searchTerm;
var data;

function searchBook(){
	
	displayList.innerHTML = " ";
	searchTerm =  document.getElementById("search").value;

	if(searchTerm === "" || searchTerm === null){
		//printError();
	}

	else{
		  var request = new Request(bookUrl + searchTerm,
     {
       method : 'GET',

     });

  fetch(request)
  .then(function(res) {   // si hay exito

     res.json()
     .then(function(myjson) {

       printResults(myjson);

        
     } 
     );
        
  })
  .catch(err => {  // en caso de error
     console.log(err);
  } );
	
  }
}

//function printError(){
	
//}
function printResults(res){


  for (var i = 0; i < res.items.length; i+=1) {
    item = res.items[i];
    title1 = item.volumeInfo.title;
    author1 = item.volumeInfo.authors;
    publisher1=item.volumeInfo.publisher;
    bookLink1=item.volumeInfo.previewLink;


  document.getElementById("results").innerHTML += '<div class = "row mt-4">' + formatPrint(title1,author1,publisher1,bookLink1) + '</div>';


    //image missing

  }
  console.log("Result");
  console.log(displayList.innerHTML);
}
/*
* @param title1 author1 publisher1 bookLink1
* @return htmlCard
*/


function formatPrint(titles,authors,publishers,bookLinks){
  var htmlCard =
  ` 
  <div class = "colg-lg-6"> 
    <div class = "card" style="">
      <div class = "row no-gutters">
        <div class = "col-md-8">
          <div class = "card-body">
            <h5 class ="card-title"> ${titles} </h5>
            <p class ="card-text"> Author: ${authors} </p>
            <p class ="card-text"> Publisher: ${publishers} </p>
            <p class ="card-text"> link: ${bookLinks} </p>
          </div>
        </div>
      </div>
    </div>
  </div> 
  `
  return htmlCard;
}
