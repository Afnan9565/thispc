function showfolder(){
    const folders = document.getElementById("folders");
    const showicon = document.getElementById("showiconf");
    if(folders.style.display === "grid"){
        folders.style.display = "none";
        showicon.classList.remove("fa-angle-down");
        showicon.classList.add("fa-angle-right");
    }
    else{
        folders.style.display = "grid";
        showicon.classList.add("fa-angle-down");
        showicon.classList.remove("fa-angle-right");
    }
}


function showdrive(){
    const drives = document.getElementById("drives");
    const showicon = document.getElementById("showicond");
    if(drives.style.display === "grid"){
        drives.style.display = "none";
        showicon.classList.remove("fa-angle-down");
        showicon.classList.add("fa-angle-right");
    }
    else{
        drives.style.display = "grid";
        showicon.classList.add("fa-angle-down");
        showicon.classList.remove("fa-angle-right");
    }
}