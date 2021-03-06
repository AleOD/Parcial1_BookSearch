var item, title, author, publisher, link, img;
var displayList = document.getElementById("results");
var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=search+";
var placeHldr = '<img src ="img/emptyImg">';
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
    img = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr ;


  document.getElementById("results").innerHTML += '<div>' + formatPrint(title1,author1,publisher1,bookLink1,img) + '</div>';


    //image missing

  }
  console.log("Result");
  console.log(displayList.innerHTML);
}
/*
* @param title1 author1 publisher1 bookLink1
* @return htmlCard
*/


function formatPrint(titles,authors,publishers,bookLinks,bookImg){
  var htmlCard =
  `
          <div class ="cont-2">
            <h5 > ${titles} </h5>
            <p > Author: ${authors} </p>
            <p > Publisher: ${publishers} </p>
            <img src = "${bookImg}">
            <div class="btn">
            <a href="${bookLinks} ">Go to Book</a>
            </div>
          </div>
            `
  return htmlCard;
}