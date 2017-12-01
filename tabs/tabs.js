//create tabs that display info when clicked.
function openTab(event, tabName) {
    //correctly select the correct tab and deselct where appropriate.
    let i, tabData, tabLinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
    
}