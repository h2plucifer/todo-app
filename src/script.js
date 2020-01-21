onload=()=>console.log("loaded ...")
let pendingTasks=[];
let addInput=document.getElementById('add-input');
let taskDisplay=document.getElementById('task-display')

function addTask(){
    
    let newTask=addInput.value;
    pendingTasks.push(newTask);
    console.log("Added task value : "+newTask);
    localStorage.setItem("task",newTask);
    console.log("Pending tasks :"+pendingTasks);
    //taskDisplay.innerHTML=localStorage.getItem('task');
    //for(i=0;i<pendingTasks.length;i++){
       //taskDisplay.innerHTML=pendingTasks[i];
       taskDisplay.appendChild(document.createTextNode(pendingTasks[i]))
       taskDisplay.appendChild(document.createElement("br"));
    //}
    
}
function deleteTask(e){
    console.log("Added task value : "+e.target.value);

}