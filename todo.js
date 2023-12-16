let input = document.querySelector(".add-task input");
let addbutton = document.querySelector(".add-task .plus");
let taskscontainer = document.querySelector(".tasks-content");
let taskscount = document.querySelector(".tasks-count span");
let taskscompleted = document.querySelector(".tasks-completed span");

window.onload = function(){
    input.focus();
};


addbutton.onclick = function () {

    if (input.value === '') {

         console.log("no value") 

    }else{
        let notasksmsg = document.querySelector(".no-tasks-message");

        if (document.body.contains(document.querySelector('.no-tasks-message'))) {

            notasksmsg.remove();
            
        }

        let mainspan = document.createElement("span");

        let deleteElement = document.createElement("span");

        let text = document.createTextNode(input.value);

        let deletetext = document.createTextNode("delete");

        mainspan.appendChild(text);

        mainspan.className = "task-box";

        deleteElement.appendChild(deletetext);

        deleteElement.className = "delete";

        mainspan.appendChild(deleteElement);

        taskscontainer.appendChild(mainspan);

        input.value ='';

        input.focus();

        calculatetasks(); 
    };
}


document.addEventListener('click' , function(e){

    if (e.target.className == 'delete') {

        e.target.parentNode.remove();
        
        if (taskscontainer.childElementCount == 0) {

            createnotasks();
        }

        
    }

    if (e.target.classList.contains('task-box')) {

        e.target.classList.toggle('finished');
    }

    calculatetasks()
})



function createnotasks() {

    let msgspan = document.createElement('span');

    let msgtext = document.createTextNode('No Tasks To Show');

    msgspan.appendChild(msgtext);

    msgspan.className = 'no-tasks-message';

    taskscontainer.appendChild(msgspan)

    
}


function calculatetasks() {
    
    taskscount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    taskscompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}