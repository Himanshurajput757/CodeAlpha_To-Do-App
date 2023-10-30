const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
var userData = [];


//Add userinput data in a localstorage
function saveTasks(task) {
    localStorage.setItem("list", JSON.stringify(task));

}

// Add eventlistner in inputbox 
item.addEventListener("keyup",
    function (e) {
        const notes = item.value.trim();
        if (e.key == "Enter") {
            e.preventDefault()
            //console.log(tasks)
            userData.push(notes)
            saveTasks(userData)
            //console.log(notes)
            addToDo(notes)
            item.value = "";

        }
        
    });


    //create a Addtodo function show the inputbox value in listitem
const addToDo = (item) => {

    const listitem = document.createElement("li");
    listitem.innerHTML +=
        `${item}
    <i class="fa-solid fa-x"></i>
`;

    listitem.addEventListener("click",
        function () {
            this.classList.toggle("done")
            removeTask()
        })

    listitem.querySelector("i").addEventListener("click",
        function () {
            listitem.remove()
            removeTask()
        })
    toDoBox.appendChild(listitem)
}

//retrive the item in localstroge
if (localStorage.getItem("list") != null) {
    
    userData = JSON.parse(localStorage.getItem("list"));
    //console.log(userData)
    userData.forEach((data) => {
        addToDo(data)
    })
}
//create a removetask function remove the value in a array and save the after localstorage 
function removeTask()
{
    var li_el = document.querySelectorAll("li")
    var i ;
    var arr_list = [];
    for(i =0;i<li_el.length; i++)
    {
        arr_list.push(li_el[i].innerText)
        console.log(arr_list)

    }
    localStorage.setItem("list",JSON.stringify(arr_list));
}
removeTask()

