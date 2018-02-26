var kidArr = [];

$.getJSON("/db/kids.json", function (data) {
    kidArr = data;
});

$('.m-2').on("keyup", filterByText);
function filterByText(event) {
    var input = event.target;
    var value = input.value.toLowerCase();

    var filteredFilms = kidArr.filter(function (kidArr) {
        var searchIn = kidArr.name + " " + kidArr.age + " " + kidArr.game + " " + kidArr.food;
        return searchIn.toLowerCase().includes(value);
    });

    displayFilms(filteredFilms);
}