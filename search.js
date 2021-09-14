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
      // console.log("el resultado del error es");
      // console.log(myjson);
      // console.log("Estos fueron todos los encontrados");
      // console.log(myjson.totalItems);
      if(myjson.totalItems>0){
       printResults(myjson);        
      }
      else{
        printError();
      }
     } 
     );     
  })
  .catch(err => {  // en caso de error
     console.log(err);
     printError();

  } );
  
  }
}

function printError(){
  displayList.innerHTML = "Error : no books were found";
  console.log("Error");
}
function printResults(res){


  for (var i = 0; i < res.items.length; i+=1) {
    item = res.items[i];
    title1 = item.volumeInfo.title;
    author1 = item.volumeInfo.authors;
    publisher1=item.volumeInfo.publisher;
    bookLink1=item.volumeInfo.previewLink;


  document.getElementById("results").innerHTML += '<div">' + formatPrint(title1,author1,publisher1,bookLink1) + '</div>';


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
          <div>
            <h5 class =""> ${titles} </h5>
            <p class =""> Author: ${authors} </p>
            <p class =""> Publisher: ${publishers} </p>
            <p class =""> link: ${bookLinks} </p>
          </div>

  `
  return htmlCard;
}