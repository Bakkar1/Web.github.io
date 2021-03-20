/*
    use sweet alert if the input is empty
    or create one
*/

//setting up variables
let theInput = document.querySelector('.add-task input'),
    TheAddButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.task-stats span'),
    tasksCopleted = document.querySelector('.tasks-completed span'),
    tasksInLocal = localStorage.getItem('tasksInLocal'),
    tasksClassLocal = localStorage.getItem('tasksClassLocal');

//focus on iput field

window.onload = function(){
    theInput.focus();
    if(tasksInLocal != "" && tasksInLocal != null){
        let noTasksMsg = document.querySelector('.no-tasks-message');
        // remove no tasks message if it exit
        if(document.body.contains(noTasksMsg))
        {
            noTasksMsg.remove();
        }

        let mu = tasksInLocal.split(',');
        mu.pop();
        mu.forEach((task) => {
            addTask(task);
            console.log()
        })
        let classLocals = tasksClassLocal.split(','),
            tasksBoxs = document.querySelectorAll('.task-box');
        classLocals.pop();

        for(let j = 0; j < tasksBoxs.length; j++){
            if(classLocals[j] != ""){
                tasksBoxs[j].classList.add(classLocals[j]);
            }
        }
    }
    calculateTasks();
}

//adding the task
TheAddButton.onclick = function(){
    if(theInput.value == ''){
        sweetAertCalled("far fa-times-circle","fout melding","De title is empty");
    }
    else if(checkOfTaskAllExist())
    {
        theInput.value = "";
        theInput.focus();
        sweetAertCalled("far fa-times-circle","fout melding","De task is alredy exit");
    }
    else
    {
        let noTasksMsg = document.querySelector('.no-tasks-message');
        // remove no tasks message if it exit
        if(document.body.contains(noTasksMsg))
        {
            noTasksMsg.remove();
        }
        addTask(theInput.value);
    }
}
//function add task
function addTask(taskContent){
    //create div element
    let taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    //add click event
    taskBox.addEventListener('click',function(){
        this.classList.toggle('finished');
        calculateTasks();
        tasksLocal();
    })
    //add tekst to div
    let text = document.createTextNode(taskContent);
    taskBox.appendChild(text);

    //create delete span
    let deleteElement = document.createElement('span');
    //add tekst to span
    let textSpan = document.createTextNode("Delete");
    deleteElement.appendChild(textSpan);
    deleteElement.classList.add('delete');

    //add click event on deletElement
    deleteElement.addEventListener('click' ,function(){
        //remove de parent div with content from dom three
        deleteElement.parentElement.remove();
        //check number of task
        if(tasksContainer.childElementCount == 0){
            createNoTasks();
        }
        calculateTasks();
        tasksLocal();
    });

    taskBox.appendChild(deleteElement);
    tasksContainer.appendChild(taskBox);

    //empty the input
    theInput.value = "";
    //focus on field
    theInput.focus();

    calculateTasks();
    tasksLocal();
}

function checkOfTaskAllExist(){
    let isGevonden = false;
    document.querySelectorAll('.task-box').forEach((elm)=>{
        if(theInput.value === elm.firstChild.textContent)
        {
            isGevonden = true;
        }
    })
    return isGevonden;
}

// ======================================================
// create my sweet alert

function sweetAertCalled(iconClass,titleContent,boodschapConten){
    let sweetAlert = document.createElement('div');
    sweetAlert.className = "sweet-alert";

    let icon = document.createElement('i');
    icon.className = iconClass;

    let title = document.createElement('h2');
    title.className = "title";
    title.textContent = titleContent;
    
    let boodschap = document.createElement('p');
    boodschap.className = "boodschap";
    boodschap.textContent = boodschapConten;
    
    sweetAlert.appendChild(icon);
    sweetAlert.appendChild(title);
    sweetAlert.appendChild(boodschap);

    document.body.appendChild(sweetAlert);
    window.setTimeout(function(){
        sweetAlert.style.bottom  = "0";
    }, (200));
    window.setTimeout(()=>{
        sweetAlert.style.bottom  = "-100%";
    },2000)
    window.setTimeout(()=>{
        sweetAlert.remove();
    },2300)
    
}


//create delete aal tasks button
let deleteAllTasks = document.createElement('button');
deleteAllTasks.textContent = "deletAll";

deleteAllTasks.className = "deleteAllTasks";

deleteAllTasks.onclick = function(){
    document.querySelectorAll('.task-box').forEach((elm)=>{
        elm.remove();
    })
    calculateTasks();
    createNoTasks();
    tasksLocal();
}

document.body.appendChild(deleteAllTasks);

let finshAllTasks = document.createElement('button');
finshAllTasks.textContent = "finshaalll";

finshAllTasks.className = "finshAllTasks";

finshAllTasks.onclick = function(){
    document.querySelectorAll('.task-box').forEach((elm)=>{
        elm.classList.add('finished');
    })
    calculateTasks();
}
document.body.appendChild(finshAllTasks);


//function to Create no tsks message
function createNoTasks(){
    let msgSapn = document.createElement('span');
    msgSapn.textContent = "No Tasks To Show";
    
    msgSapn.classList.add('no-tasks-message');
    tasksContainer.appendChild(msgSapn);
}


//function to calculate tasks
function calculateTasks(){
    tasksCount.textContent =  document.querySelectorAll('.task-box').length;
    tasksCopleted.textContent =  document.querySelectorAll('.finished').length;
}

//funtion save tasks in locale storage
function tasksLocal(){
    let itemLocal = "";
    let classLocal = "";
    let i = 0;
    document.querySelectorAll('.task-box').forEach((elm)=>{
        itemLocal += elm.firstChild.textContent + ",";
        classLocal +=  elm.classList.toString().substring(9) + ",";
    })
    localStorage.setItem('tasksInLocal',itemLocal);
    localStorage.setItem('tasksClassLocal',classLocal);
}