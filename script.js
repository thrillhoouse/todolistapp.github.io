

const textBox = document.getElementById("input_area");
const listing = document.getElementById("contents");
var tasknum = 0;



function moreTasks(){
    tasknum++;

    if(textBox.value === ''){
        alert("write down a task");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = textBox.value;
        listing.appendChild(list);
        let cross = document.createElement("span");
        cross.innerHTML = ""
        list.appendChild(cross);
        
        let img = document.createElement("img");
        list.appendChild(img);
        img.src = "pngs/win7trash.png";

    }
    textBox.value = "";

    if(tasknum > 12) {
        //explanation: this code basically makes a variable that selects all li tags
        //then it makes a parent variable that attaches a array to the first variable
        //this appears to make it subtractable.
        //and then the second to last line removes the element (child) by 
        //calling the getli variable, going to its array, and subtracting one from it.
        let getli = document.querySelectorAll("li");
        let parentli = getli[0].parentNode;
        parentli.removeChild(getli[getli.length - 1]);
        alert("You have reached the max amount of tasks.");
        
};

};

console.log(tasknum);

//same thing but for the img
listing.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
    }
    else if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        tasknum -= 1;
    }
}, false);







