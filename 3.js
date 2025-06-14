function addTask(){
    const input=document.getElementById("taskInput")
    const taskInput=input.value.trim()
    if(taskInput!=="")
    {
    
      const ul=document.getElementById("todoList")
      const li=document.createElement("li")
      const span=document.createElement("span")
      span.textContent=taskInput

      const editbutton=document.createElement("button")
      editbutton.textContent="Edit"
      editbutton.onclick=()=>edit_task(span)

      const removebutton=document.createElement("button")
      removebutton.textContent="Delete"
      removebutton.onclick=()=>remove_task(li)

      li.appendChild(span)
      li.appendChild(editbutton)
      li.appendChild(removebutton)

      ul.appendChild(li)
      input.value=""

    }
    else
    {
        alert("Please enter valid task")
    }
}
function edit_task(span)
{
    const newtask=prompt("Edit your task:",span.textContent)

    if(newtask!==null && newtask.trim()!=="")
    {
        span.textContent=newtask.trim()
    }
}
function remove_task(li)
{
    const ul=document.getElementById("todoList")
    ul.removeChild(li)
}