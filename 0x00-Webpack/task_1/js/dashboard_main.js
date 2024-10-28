import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Function to update the counter
let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Create elements and append them to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Bind the debounce function from Lodash to the click event
$('#start-button').on('click', _.debounce(updateCounter, 300));
