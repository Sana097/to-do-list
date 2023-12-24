
function addTask() 
{
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var message=document.getElementById("message");
    if (taskInput.value.trim() !== "")
     {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);

        taskInput.value = "";
        message.innerHTML="";

    }
else{
    message.innerHTML="pleqse enter a itemd";
}
}

function removeTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}