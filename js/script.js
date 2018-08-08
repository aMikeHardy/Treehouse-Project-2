/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Store DOM elements to reference and/or manipulate
const students = $('.student-item'); // the list of students

//set up pagination dynamically with JavaScript
showPage(1, students);    // call showPage function to show only the first 10 students.
appendPageLinks(students);    // call function to append page links unobtrusively.
$('.pagination a').eq(0).addClass('active')    // set link button 1's class to "active".

//Hide all students in the list except for the ten to be listed on the designated page number
function showPage(pageNumber, students){
  students.hide();  // hide list items.
  for (let i = 0; i < students.length; i +=1 ){  // cycle through the list.
    if ( i <= (pageNumber * 10)-1 && i >= (pageNumber * 10)-10){  // if index is within the designated range for the page number...
       $(students[i]).show();  //show item.
    }
  }
}

// Function to create and append pagination links
function appendPageLinks(students){
  const numberOfPages = Math.ceil(students.length / 10);   // calculate number of pages.
  $('.page').append('<div class="pagination"><ul></ul></div>');  // create and append page link section dynamically.
  for (let i = 1; i <= numberOfPages; i += 1){   // for each page...
    $('.pagination ul').append('<li><a href="#">' + i + '</a></li>');   // append a button.
  }
}

// Add functionality to the pagination buttons so that they show and hide the correct items
$('.pagination a').on('click', function(e) {  // when link is clicked...
  $('.active').removeClass();  // remove class from active button
  const button = e.target.text;
  $(this).addClass('active');  // add active status to event target
  showPage(button, students);  // call showPage function with the targeted page number
});
