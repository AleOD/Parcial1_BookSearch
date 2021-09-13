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
  .then(function(res) {   // si hay exito
     console.log('data');
     console.log(data);
     data.json()
     .then(function(myjson) {
       console.log('results =');
       console.log(myjson);
       printResults();
     });

  })
  .catch(err => {  // en caso de error
     console.log(err);
  });
	}
}

//function printError(){
	
//}
function printResults(){
  for (var i = 0; i<res.itesm.length; i+=3) {
    item.res.items[i];
    title1 = item.volumeInfo.title;
    author1 = item.volumeInfo.author;
    publisher1=item.volumeInfo.publisher;
    bookLink1=item.volumeInfo.previewLink;

    item.res.items[i+1];
    title2 = item.volumeInfo.title;
    author2 = item.volumeInfo.author;
    publisher2=item.volumeInfo.publisher;
    bookLink2=item.volumeInfo.previewLink;

    item.res.items[i+2];
    title3 = item.volumeInfo.title;
    author3 = item.volumeInfo.author;
    publisher3 =item.volumeInfo.publisher;
    bookLink3 =item.volumeInfo.previewLink;

  outputList.innerHTML += '<div class = "row mt-4'> + formatPrint(title1,author1,publisher1,bookLink1) + formatPrint(title2,author2,publisher2,bookLink2) + formatPrint(title3,author3,publisher3,bookLink3);

    //image

}
}

// function formatPrint(title,author,publisher,bookLink){
//   var htmlCard = `
//   <div class = "colg-lg-6> 
//   <div class = "row no-gutters">
//     <div class = "col-md-4"

//   `

//   return htmlCard;
// }
