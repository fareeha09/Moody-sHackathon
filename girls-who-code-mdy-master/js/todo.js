var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

function addEvent() {
  var userInput = document.getElementById("todo-text").value;
  var list= document.getElementById("unordered");
  var elem= document.createElement("li");
  elem.innerHTML = userInput;
  elem.className= 'list-group-item'
  list.appendChild(elem);
}
(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
