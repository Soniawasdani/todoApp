 
 
 var list =  document.getElementById("list");
 
 var Completed =  document.getElementById("complt")
 
 
 
 function  addItem(){
//create li with text node
var add = document.getElementById("todo")
var li = document.createElement("li")
var liText = document.createTextNode(todo.value)
li.appendChild(liText)


//create delete button
var delBtn = document.createElement("button")
delBtn.innerHTML = '<i class="fa fa-trash"></i>';
delBtn.setAttribute("class","btn btn-danger")
delBtn.setAttribute("onclick","delitem(this)")

li.appendChild(delBtn)



//Edit button

var editBtn = document.createElement("button")
editBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
editBtn.setAttribute("class","btn btn-info")
editBtn.setAttribute("onclick","edititem(this)")
li.appendChild(editBtn)



//Check button

var checkBtn = document.createElement("button")
checkBtn.innerHTML = '<i class="fa fa-check"></i>';
checkBtn.setAttribute("class","btn btn-success")
checkBtn.setAttribute("onclick","checkitem(this)")
li.appendChild(checkBtn)





list.appendChild(li)


todo.value = ""




 }


function delitem(e){

e.parentNode.remove()


}


//delete all
function delAll(){

list.innerHTML = ""



}


//edit button

function edititem(e){

var editValue = prompt("Enter updated value",e.parentNode.firstChild.nodeValue) 
e.parentNode.firstChild.nodeValue =editValue

}





// check item

function checkitem(e){

  
    const parent = e.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = 'none';
    editBtn.style.display = 'none'
}