let inputBox = document.getElementById("inputbox"); 
let listContainer = document.getElementById("list-container"); 

function addTask(){
    if(inputBox.value === ''){
        alert("The task box is empty!");
    } else {
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value ; 
        listContainer.appendChild(li) ; 
        inputBox.value = '' ; 

        // creating the cross button

        let crossButton = document.createElement("span") ; 
        crossButton.innerHTML = "\u00d7" ; 
        li.appendChild(crossButton) ; 

        console.log("Button clicked , task added !")
    }
    saveData();
    console.log("data saved"); 
};

listContainer.addEventListener("click" , function(event){
    if(event.target.nodeName == "LI"){
        event.target.classList.toggle("checked");
        console.log("toggle event of checked or unchecked.") 
        saveData();
        console.log("data saved");
    } 
});

listContainer.addEventListener("click" , function(event){
    if(event.target.nodeName == "CROSSBUTTON"){
        let parent = event.target.parentElement ;
        parent.remove();
        console.log("task deleted");
        saveData(); 
        console.log("data saved");
    }
}); 

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML) ; 
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") ; 
}

showTask(); 
console.log("website was refreshed.")

function showPage(desiredPage){
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('show')
    }); 

    var selectedPage = document.getElementById(desiredPage);
        selectedPage.classList.add('show');
}