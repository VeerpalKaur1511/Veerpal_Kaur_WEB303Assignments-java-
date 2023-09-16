/*
	Name : Veerpal Kaur
	Student Id : 0826070
	Assignment 1
*/

$(document).ready(function()
{
$("input").change(function()
{
 let salary= $("#yearly-salary").val();
 let percent= $("#percent").val();
 let result=((salary*percent)/100).toFixed(2);
 $("#amount").text("$" +result);
   });
})
;



