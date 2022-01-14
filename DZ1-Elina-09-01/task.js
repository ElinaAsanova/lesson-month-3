
let string3 = document.getElementById("string-3")
let string5 = document.getElementById("string-5")//6
let string2 = document.getElementById("string-2")//5
let string4 = document.getElementById("string-4")
let string6 = document.getElementById("string-6")

console.log(`${string3.textContent}`)
console.log(`${string5.textContent}`)
console.log(`${string2.textContent}`)
console.log(`${string4.textContent}`)
console.log(`${string6.textContent}`)

//2
let divs = document.querySelectorAll(".element")
for (let i = 0; i < divs.length; i++) {
    if (i < 3){
        divs[i].style.color = "red"
    }else{
        divs[i].style.color = "green"
    }
}

///3
let ToDoList = document.getElementById("todo-list")

const taskss = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for (let i = 0; i < taskss.length; i++) {
    let li = document.createElement('li')
    li.className = 'task'
    li.innerHTML = taskss[i]
    ToDoList.appendChild(li);
}
///4

document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '<hr/>');
});

///5
let food = document.querySelectorAll(".item")
let div = document.createElement("div")
div.innerText = 'Canned Fish'
let span = document.createElement('span')
span.innerText = 'x4'

div.appendChild(span)
food[1].remove()
food[4].replaceWith(div)

//////////////6
let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Введите текст для элемента списка", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }



