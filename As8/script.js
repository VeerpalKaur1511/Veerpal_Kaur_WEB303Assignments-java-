// add a table to the page 
let $table = $('<table/>');
// add to the body of document
$('body').append($table);

// add a title for the table before table 


// add a thead and tbody on the table 
$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

//create the heading row
let $headingRow = $('<tr/>').addClass('headingRow');
// add this row to thead
$('thead').append($headingRow);
$headingRow.append($('<td/>').text('Firstname'));
$headingRow.append($('<td/>').text('LastName'));
$headingRow.append($('<td/>').text('Age'));
$headingRow.append($('<td/>').text('Occupation'));
$headingRow.append($('<td/>').text('City'));
$headingRow.append($('<td/>').text('CharName'));
$headingRow.append($('<td/>').text('Role'));

// create an input box before table

$('h1').after('<input/>');
$('input').attr('id', 'search');

// dd  a button after table 
$('table').after( '<button id="filterAM">A-M (0)</button>')
$('table').after('<button id="filterNZ">N-Z (0)</button>')

// get content of json file 

$.ajax({
    type: "get",
    url: "emp.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
        //loop through response received
        $.each(response, function(index, value){
            // create row
            let $row = $('<tr/>').addClass('row');
            // add td to the row
            $row.append($('<td id="fname"></td>').text(value.firstname));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td> </td>').text(value.occupation));
            $row.append($('<td></td>').text(value.city));
            $row.append($('<td></td>').text(value.charName));
            $row.append($('<td></td>').text(value.role));

            // add rows to table 
            $('tbody').append($row);
        });
        // Start SEArching by occupation 
        // lets add an id = occu to that cell 

        let $firstnames = $('tbody #fname');
        let $search = $('#search');
        // create the cache array - element and text
        let cache = [];
        let trr = $('tr');

        $firstnames.each(function(){
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(cache);
        // search function
        function searchFirstname(){
            let query = this.value.trim().toLowerCase();
            cache.forEach(function(firstname){
                let index=0;
                if(query){
                    index = firstname.text.indexOf(query);
                }
                firstname.element.style.background = index === -1 ? 'rgb(221, 230, 173)' : 'darkgreen';
                firstname.element.style.color = index === -1 ? 'black' : 'white';
                if($(search).val() == " "){
                    firstname.element.style.color = 'black';
                    firstname.element.style.background = 'rgb(221, 230, 173)'
                }

            });

        }
       if('oninput' in $search[0]){
           $search.on('input', searchFirstname);
        }else{
            $search.on('input', searchFirstname);
        }
    },
});
// filter functions for buttons
$('#filterAM').on('click', function () {
    filterTable('A', 'M');
});

$('#filterNZ').on('click', function () {
    filterTable('N', 'Z');
});

// filter function
function filterTable(startChar, endChar) {
    let count = 0;

    $('tbody .row').each(function () {
        let lastName = $(this).find('td:nth-child(2)').text(); // assuming last name is in the second column
        let firstChar = lastName.trim().charAt(0).toUpperCase();

        if (firstChar >= startChar && firstChar <= endChar) {
            $(this).show();
            count++;
        } else {
            $(this).hide();
        }
    });

    // update the filter button text with the count
    if (startChar === 'A') {
        $('#filter-AM').text('A - M (${count})');
    } else {
        $('#filter-NZ').text('N - Z (${count})');
    }
}
    
        

