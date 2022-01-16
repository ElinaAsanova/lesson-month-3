function addTask() {
    const input = document.getElementById("input");
    const newTask = input.value;
if (newTask != "") {
    const item = document.createElement("li");
    item.innerHTML='<input type="button" class="done" onclick="markDone(this.parentNode)"\n' +
        '            value="&#x2713;" />'+
                    '<input type="button" class="remove" onclick="remove(this.parentNode)"\n' +
        '             value="&#x2715;"/>'+
                      newTask;
                      document.getElementById("tasks").appendChild(item);
    }
}
addTask()
function markDone (item) {
    item.className = 'finished';


}

function remove (item) {
    item.className =  'No';
    item.remove();
}

function doAbout() {

}

function clearAbout() {

}



