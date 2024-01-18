const tasklist = document.getElementById("tasklist");
const taskinput = document.getElementById("taskinput");

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText !== "") {

        const maxText = taskText.substring(0, 34);

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${maxText}</span>
        <button class="deleteButton" onClick="deleteTask(this)">-</button>
        `;
        tasklist.appendChild(li);
        taskinput.value = "";
    }
}  

function deleteTask(button) {
    const li = button.parentElement;
    tasklist.removeChild(li);
}