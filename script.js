$(document).ready(function () {
  var todaysDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todaysDate); //displays time and date at top of screen.
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".entry").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text); //allows user to save entry to local storage by clicking saveBtn.
    alert("Entry saved to Local Storage."); //user is alerted when entry is saved.
  });

  function blockColors() {
    // each time block is assigned a specific color depending on the current time.
    var hour = moment().hours();

    $(".time-block").each(function () {
      var currentTime = parseInt($(this).attr("id"));

      if (currentTime > hour) {
        $(this).addClass("future");
      } else if (currentTime < hour) {
        $(this).addClass("past");
      } else if (currentTime === hour) {
        $(this).addClass("present");
      }
    });
  }

  blockColors();
});
