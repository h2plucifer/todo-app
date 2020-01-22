onload=()=>console.log("loaded ...")
let pendingTasks=[];
let addInput=document.getElementById('add-input');
let taskDisplay=document.getElementById('task-display')

function addTask(){
    
    let newTask=addInput.value;
    pendingTasks=newTask;
    taskDisplay.appendChild(document.createTextNode(pendingTasks))
    taskDisplay.appendChild(document.createElement("br"));
  
}



function deleteTask(){
    for(i=0;i<2;i++){
    taskDisplay.removeChild(taskDisplay.firstChild);
}


}