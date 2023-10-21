/*
    Assignment 05
    Name : Veerpal kaur
    Student Id : 0826070
*/
$(document).ready(function () {

    class ContentItem {
        // properties 
        id;
        name;
        description;
        categoryGenre;
    
        // constructor
        constructor(id,name,description,categoryGenre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
          }

        //methods
        updateContentItem(id,name,description,categoryGenre){
            if((this.id == id) && (name != null) && (description != null) && (categoryGenre != null)){
                this.name = name;
                this.description = description;
                this.categoryGenre = categoryGenre;
            }
        }
        tostring() {
            $('#content-item-list').append(
                '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
                 '<h2>Name:- '+ this.name+'</h2>'+
                 '<p>Description :- '+ this.description+' </p>'+
                 '<div>categoryGenre :- '+ this.categoryGenre+' </div>'+
                  '</div>');
         
        }
    }
    // crete a list of Singers
    let allitems = [
        {
        id : '1',
        name : 'Jassi Gill',
        description : 'Singer',
        categoryGenre : 'Big band' 
      },
      {
        id : '2',
        name : 'Jass Manak',
        description : 'Actor',
        categoryGenre : 'Comedy' 
      },
      {
        id : '3',
        name : 'Navjeet',
        description : 'Hero',
        categoryGenre : 'Rock' 
    },
      {
        id : '4',
        name : 'Guri',
        description : 'artist & actor',
        categoryGenre : 'Pop' 
    },
      {
        id : '5',
        name : 'Diljeet',
        description : 'Singer & actor',
        categoryGenre : 'Jazz' 
      }
    ]
    for(i = 0; i < allitems.length; i++){
      $('#content-item-list').append(
  '<div class ="content-item-wrapper"id= "content-item-' +allitems[i].id +'">'+
   '<h4>Name:- '+ allitems[i].name+'</h4>'+
   '<p>Description :- '+ allitems[i].description+' </p>'+
   '<div> CategoryGenre :- '+ allitems[i].categoryGenre+' </div>'+
    '</div>');
    
  };
    contentItem.forEach(contentItem => {

        const contentItemHTML = contentItem.toString();
        // Create a jQuery element from the HTML
        const $contentItem = $(contentItemHTML);
        // Apply styles to the .content-item-wrapper
        $contentItem.find('.content-item-wrapper').css({
            border: '3px solid black',  
            width: '400px',           
            padding: '15px',          
            margin: '8px auto',      
        });
    });
    //succssfull button click
          $('#successful-button').click(function(){
            updateContentItemSuccessfully();
        });
        //unsuccssfull button click
        $('#unsuccessful-button').click(function(){
            updateContentItemUnsuccessfully();
        });
});
