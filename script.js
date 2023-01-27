
// on load, set the following and output to DOM
 $(document).ready(function() {

    // jquery equivalent of querySelector
let CurrentDay = $('#currentDay')
// Get current time and format as hours and minutes
let currentTime = moment().format("HH:mm");

// get current date, year and format as days, month and year
let today = moment().format("ddd, MMMM Do YYYY");

// output as value for Current Day;
CurrentDay.text(today)

// save to local storage
localStorage.setItem("currentDay", today)
localStorage.setItem("currentTime", currentTime);

// bring in previously saved values from local storage for respective elements
$("#hr8 .description").val(localStorage.getItem("hr8"));
$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));


});

// function to colour code, past, present and future

const logic = () => {

    // set current variable to time in hour
    let current = moment().hour()
// console.log(current)

// loop through each row and grab IDs, convert to integer. using substring to grab the numerical value while omitting the string before.
    $(".time-block").each(function () {
        let time_block = parseInt($(this).attr("id").substring(2))
       // console.log(time_block)

    //    if/else to check if current hour is the same as ID number for rows
        if(time_block < current) {
            $(this).addClass("past")
        } else if(time_block === current) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    });

    // click event
    $(".saveBtn").on('click', function() {
        // use this to refer to the savebtn, search tags, and save their values
        let activity = $(this).siblings(".description").val()
       // console.log(activity);

    //  grab parent id value e.g. hr8
        let parent = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(parent, activity);
    });

};

// call function over to run through logic
logic();

