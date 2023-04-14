// <!--Header displays the current date and a 24H time format--->
$(function () {
  function displayTime() {
    $("#currentDay").text(dayjs().format("MMM D, YYYY [at] h:mm:ss A"));
  }
  setInterval(displayTime, 1000);
});
   
   //<!--Display the current date and hour-->
   // Get the current hour using Day.js in 24-hour format
   var currentHour = dayjs().hour();
  // Loop through each time-block element using the jQuery .each() method
// $(".time-block").each(function() {
//   // Get the hour from the id attribute of the current element and convert to a number
//   var blockHour = parseInt($(this).attr("id"));
  
//   // Compare the current hour to the hour of the current element and add or remove classes accordingly
//     if (blockHour < currentHour) {
//       $(this).addClass("past");
//       $(this).removeClass("present future");
//     } else if (blockHour === currentHour) {
//       $(this).addClass("present");
//       $(this).removeClass("past future");
//     } else {
//       $(this).addClass("future");
//       $(this).removeClass("past present");
//    }
// });


   //<!-----Save button and local storage--->
   $(".saveBtn").on("click", function() {
    var eventText = $(this).siblings(".description").val();
    var eventId = $(this).parent().attr("id");
    
    localStorage.setItem(eventId, eventText);
  });
  
   

  var textAreas = document.querySelectorAll(".description")
  for (let i = 0; i < textAreas.length; i++) {
    let hour = i+9
    textAreas[i].value = localStorage.getItem("hour-"+hour)
    
  }
 //<!----Clear local storage--->
  //hour-9 (9am-5pm???) 
  //timeBlock Past - Gray, Red - Present, Green - Future -ask how to change the color
  // if ($(".row").s)
// console.log($(".row").attr("id"))
let hour;
for (let i = 0; i < textAreas.length; i++) {
  hour = i+9
  // console.log(hour)
  if(hour == dayjs().hour()){
    // console.log("test")
    console.log(hour)
    $("#hour-"+hour).addClass("present")
  }
  else   // console.log(hour)
  if(hour < dayjs().hour()){
    // console.log("test")
    console.log(hour)
    $("#hour-"+hour).addClass("past")
  }
  else   // console.log(hour)
  if(hour > dayjs().hour()){
    // console.log("test")
    console.log(hour)
    $("#hour-"+hour).addClass("future")
  }
}
// $(".row").attr("id")
// console.log($(".row").children("textarea").val())





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//  TODO: Add a listener for click events on the save button. This code should
//     use the id in the containing time-block as a key to save the user input in
//     local storage. HINT: What does `this` reference in the click listener
//     function? How can DOM traversal be used to get the "hour-x" id of the
//     time-block containing the button that was clicked? How might the id be
//     useful when saving the description in local storage?
    
//     TODO: Add code to apply the past, present, or future class to each time
//     block by comparing the id to the current hour. HINTS: How can the id
//     attribute of each time-block be used to conditionally add or remove the
//     past, present, and future classes? How can Day.js be used to get the
//     current hour in 24-hour time?
    
//     TODO: Add code to get any user input that was saved in localStorage and set
//     the values of the corresponding textarea elements. HINT: How can the id
//     attribute of each time-block be used to do this?
    
//     TODO: Add code to display the current date in the header of the page.