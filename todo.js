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
// saving and storing data in the list

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML) ; 
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") ; 
}

showTask(); 
console.log("website was refreshed.")

// navigation in between the tabs 

function showPage(desiredPage){
    var showtab = document.querySelector('.show');
    if(showtab){
        showtab.classList.remove('show');
        showtab.classList.add('page');
    }
    var selectedPage = document.getElementById(desiredPage); 
    if (selectedPage) {
        selectedPage.classList.add('show');
        selectedPage.classList.remove('page');
    }

}
 
// storing the data in the titleBar 

function saveTitleBar(){
    localStorage.setItem("dataTitleBar" , titleBar.innerHTML); 
}

function showTitleBar(){
    titleBar.innerHTML = localStorage.getItem("dataTitleBar") ; 
}
console.log("website was refreshed."); 

// creating a new list

function createList(){
    let titleBar = document.querySelector('.titleBar');

    // Check if titleBar is valid before proceeding
    if (!titleBar) {
        console.error('Error: titleBar is not a valid DOM element');
        return;
    }
    let newList = document.createElement('div');
    titleBar.appendChild(newList) ; 
    newList.classList.add('titleContent') ; 
    newList.classList.add('List2')
    newList.innerHTML="List2" ; 
    console.log(newList);
    saveTitleBar() ; 

    let newPage = document.createElement('div') ; 
    newPage.classList.add('container');
    newPage.classList.add('page');  
    newPage.setAttribute('id' , 'page3') ; 
    console.log(newPage); 

    console.log(titleBar);
    // not working portion . 
    newList.addEventListener('click' , showPage('page3')) ;
    saveTitleBar();

    console.log(titleBar.innerHTML);
}
