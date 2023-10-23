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
    let allsingers = [
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
    for(i = 0; i < allsingers.length; i++){
      $('#content-item-list').append(
  '<div class ="content-item-wrapper"id= "content-item-' +allsingers[i].id + '">'+
   '<h4>Name:- '+ allsingers[i].name+'</h4>'+
   '<p>Description :- '+ allsingers[i].description+' </p>'+
   '<div> CategoryGenre :- '+ allsingers[i].categoryGenre+' </div>'+
    '</div>'); 
  };
    //succssfull button click
          $('#successful-button').click(function(){
            updateContentItemSuccessfully();
        });
        //unsuccssfull button click
        $('#unsuccessful-button').click(function(){
            updateContentItemUnsuccessfully();
        });
        // Apply styles using jQuery
        $('#content-item-list').append({
          border: '1px solid #000',
          width: '300px', // Adjust as needed
          padding: '10px', // Adjust as needed
          margin: '20px auto', // Center horizontally and add space above and below
      });
});
