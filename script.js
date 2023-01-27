
//  let save = $("#saveBtn")

 $(document).ready(function() {

let CurrentDay = $('#currentDay')
let currentTime = moment().format("HH:mm");

let today = moment().format("ddd MMMM, Do YYYY");

CurrentDay.text(today)

localStorage.setItem("currentDay", today)
localStorage.setItem("currentTime", currentTime);


})

const logic = () => {
// event.preventDefault();

    $(".description").each(function () {
        localStorage.setItem("item", $(this).val());
    })
}

logic()
// save.on('click', logic)

