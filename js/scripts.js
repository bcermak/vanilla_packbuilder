// Event Listener for list item path - appending path to listDiv after click.

const button = document.getElementsByClassName("item");


if (button) {
    for (let i =0; i < button.length; i++) {
        button[i].addEventListener("click", btnItem => {
            console.log(btnItem.path[0]);
            let listDiv = document.getElementById("listDiv");
            listDiv.append(btnItem.path[0]);  
        })
    }
}

