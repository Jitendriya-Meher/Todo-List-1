
let enterTodo = document.getElementById('enterTodo');
let addTask = document.getElementById('addTask');
let listOfTask = document.querySelector('.listOfTask');
let numberOfTasks = 0;

const todo = () => {
        let writtenTask = enterTodo.value;
        enterTodo.value="";
    
        if( numberOfTasks >= 8){
            alert("Task Is Full , Complete Your Old Task");
        }
        else if( writtenTask !== ""){
    
            // for creating a task 
            numberOfTasks++;
    
            console.log(writtenTask);
    
            let createDivTag = document.createElement('div');
            createDivTag.setAttribute("id","taskDetails");
    
            let TaskName = document.createElement('p');
            TaskName.setAttribute("id","taskName");
            TaskName.innerText = writtenTask;
    
            let DeleteTask = document.createElement("button");
            DeleteTask.setAttribute("id","deleteTask");
            DeleteTask.innerText = 'Delete';
    
            createDivTag.appendChild(TaskName);
            createDivTag.appendChild(DeleteTask);
    
            listOfTask.appendChild(createDivTag);
    
            // for deleting a task 
            DeleteTask.onclick = () => {
                let parentOfDelete = DeleteTask.parentElement;
                parentOfDelete.style.display = "none";
    
                numberOfTasks--;
            }
    
        }
        else{
            alert("Task Is Empty");
        }
}

addTask.addEventListener('click',todo);

enterTodo.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        todo();
    }
});