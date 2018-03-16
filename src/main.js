import { AgeMaker } from './agemaker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#agemaker-form').submit(function(event) {
    event.preventDefault();
    // var goal = $('#goal').val();
    // var output = pingPong(goal);
    // output.forEach(function(element) {
      $('#results').append("Another test");
    // });
  });
});
