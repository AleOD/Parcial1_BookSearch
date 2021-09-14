var item, title, author, publisher, link, img
var displayList = document.getElementById("output");
var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
//var placeHldr = '<img src = '
var searchTerm;
var data;

function searchBook(){
	
	displayList.innerHTML = " ";
	searchTerm =  document.getElementById("search").value;
  //console.log('esta buscando esta onda')
  //console.log(searchTerm );
	if(searchTerm === "" || searchTerm === null){
		//printError();
	}

	else{
		  var request = new Request(bookUrl + searchTerm,
     {
       method : 'GET',
       //headers: new Headers({ 'Content-Type': 'application/json'})
     });

  fetch(request)
  .then(function(res) {   // si hay exito
     console.log('res');
     console.log(res);
     //printResults(res);
     res.json()
     .then(function(myjson) {
       printResults(myjson);
       console.log('results =');
       console.log(myjson);
        
     } 
     );
        //printResults(myjson);
  })
  .catch(err => {  // en caso de error
     console.log(err);
  } );
	
  }
}

//function printError(){
	
//}
function printResults(res){
  //console.log('ahora imprime esto');
  //console.log(res);
  for (var i = 0; i < res.items.length; i+=1) {
    item = res.items[i];
    title1 = item.volumeInfo.title;
    author1 = item.volumeInfo.authors;
    publisher1=item.volumeInfo.publisher;
    bookLink1=item.volumeInfo.previewLink;


  displayList.innerHTML += '<div class = "row mt-4">' + formatPrint(title1,author1,publisher1,bookLink1) + '</div>'

  console.log(displayList)

    //image

  }
}

function formatPrint(title,author,publisher,bookLink){
  var htmlCard = `
  <div class = "colg-lg-6> 
    <div class = "row no-gutters">
      <div class = "col-md-8">
        <div class = "card-body">
          <h5 class ="card-title"> ${title}</h5>
          <p class ="card-text"> ${author}</p>
          <p class ="card-text"> ${publisher}</p>
          <p class ="card-text"> ${bookLink}</p>
        </div>
      </div>
    </div>
  </div>`

  return htmlCard;
}
