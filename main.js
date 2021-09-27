$(document).ready(function() {
// write your code here

// use the $.getJSON method to download the contents of the data.json file
// iterate through the top spots and create a table row for each spot
// create a link to the location using the long and lat provided

$.getJSON("data.json", function(data) {
var spots = '';
$.each(data, function(key, value) {
    spots += '<tr>';
    spots += '<td>' + value.name + '</td>';
    spots += '<td>' + value.description + '</td>';
    var link = 'https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1];
    spots += '<td>' + '<a class="btn" href="'+link+'">Link to location in Google Maps.</a>' + '</td>';
    spots += '<tr>';
    });
    $('#sdtopspots').append(spots);
});

});
