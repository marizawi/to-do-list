document.addEventListener("DOMContentLoaded", function () {

    var addTask = document.getElementById('addTaskButton');
    var input = document.getElementById('taskInput');
    var list = document.getElementById('taskList');
    var finishedTasksButton = document.getElementById('removeFinishedTasksButton');
    var counter = document.getElementById('counter');

    var newP = document.createElement('p');
    counter.appendChild(newP);

    addTask.addEventListener('click', function () {

        if (input.value.length > 5 && input.value.length < 100) {
            var newLi = document.createElement('li');

            newLi.innerHTML = '<h1>' + input.value + '</h1>' +
                '<button>Delete</button>' +
                '<button>Complete</button>';
            list.appendChild(newLi);

            input.value = "";

            var completeButton = newLi.querySelector('button:last-of-type');
            completeButton.addEventListener('click', function () {
                this.parentElement.classList.toggle('done');
                var counterToDo = document.querySelectorAll('li:not(.done)');
                newP.innerText = "You have " + counterToDo.length + " task(s) left";
            })

            var deleteButton = newLi.querySelector('button:first-of-type');
            deleteButton.addEventListener('click', function () {
                newLi.parentElement.removeChild(newLi);
                var counterToDo = document.querySelectorAll('li:not(.done)');
                newP.innerText = "You have " + counterToDo.length + " task(s) left";
            })

            finishedTasksButton.addEventListener('click', function () {
                var finishedTasks = document.getElementsByClassName('done'); // dlaczego nie mogłam tu szukać w newLi???
                for (var i = 0; i < finishedTasks.length; i++) {
                    finishedTasks[i].parentElement.removeChild(finishedTasks[i]);
                }
            })

            var counterToDo = document.querySelectorAll('li:not(.done)');
            newP.innerText = "You have " + counterToDo.length + " task(s) left";

        } else {
            alert("Your sentence should contain between 5 and 100 words");
        }

    })

});
