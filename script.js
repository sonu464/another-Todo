let item = document.getElementById("item");
let todobox = document.getElementById("to-do-box");


item.addEventListener('keyup',function(e){
    if (e.key == "Enter") {
        addTodo(this.value);
        this.value = "";
    } else {
        
    }
})

const addTodo = function(item){
    const x = document.createElement("span");
    x.innerHTML = 'x';
    const li = document.createElement("li");
    li.innerHTML=item;

    li.addEventListener('click',function(){
        this.classList.toggle("done")
    })

    x.addEventListener('click',function(){
        li.remove()
    })

    todobox.appendChild(li);
    li.appendChild(x);
}

