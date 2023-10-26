
// accordance
$('.accord-label').on('click',function(e){
// prevent the button from the default action -"submit"
e.preventDefault();
// get the button that we are clicking
let $this = $(this);
//loop for every panel
$('.accord-panel').each(function(){
  // make sure that showinh class is removed - no panel
  $this.removeClass('showing');

});
//show the panel for the button taht we click

$this.next().toggleClass('showing');
$this.next().slideToggle()

//hide other panels
$('.accord-panel').not($this.next()).slideUp();
});



// tab panels

// hidden all panels
$('.tab-panel').hide();
$('#tab1').show();
$('.tab-list li').on('click', function(e){
 e.preventDefault();
 // remove the active class
 $('.tab-list li').removeClass('active');

 // hide the panel
 $('.tab-panel').hide();

 //make the li that we clicked 
 $(this).addClass('active');
 // find the right href and id
 let panel= $(this).find('a').attr('href');
 $(panel).show()
 return false;
});