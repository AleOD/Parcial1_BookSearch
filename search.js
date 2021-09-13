var item, title, author, publisher, link, img
var displayList = ""
var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms"
//var placeHldr = '<img src = '
var searchTerm;
var data;

function searchBook(){
	displayList = document.getElementById("output")
	displayList.innerHTML = ""
	searchTerm =   document.getElementById("search");
	if(searchTerm === "" || searchTerm === null){
		printError();
	}

	else{
		  var request = new Request(bookUrl + searchTerm,
     {
       method : 'GET',
       headers: new Headers({ 'Content-Type': 'application/json'})
     });

  fetch(request)
  .then(function(data) {   // si hay exito
     console.log('data');
     console.log(data);
     data.json()
     .then(function(myjson) {
       console.log('results =');
       console.log(myjson);
     });

  })
  .catch(err => {  // en caso de error
     console.log(err);
  });
	}
}

function printError(){
	
}
