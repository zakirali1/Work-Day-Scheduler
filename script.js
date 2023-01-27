
 $(document).ready(function() {

let CurrentDay = $('#currentDay')
let currentTime = moment().format("HH:mm");

let today = moment().format("ddd, MMMM Do YYYY");

CurrentDay.text(today)

localStorage.setItem("currentDay", today)
localStorage.setItem("currentTime", currentTime);

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

const logic = () => {

    let current = moment().hour()
// console.log(current)

    $(".time-block").each(function () {
        let time_block = parseInt($(this).attr("id").substring(2))
       // console.log(time_block)

        if(time_block < current) {
            $(this).addClass("past")
        } else if(time_block === current) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    });

    $(".saveBtn").on('click', function() {
        let activity = $(this).siblings(".description").val()
       // console.log(activity);

        let parent = $(this).parent().attr("id");

        localStorage.setItem(parent, activity);
    });

};

logic();

