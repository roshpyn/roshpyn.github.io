function showOrHideDdmenu(){
    if(document.getElementById){
        let ddmenu = document.getElementById("menu-list").style;
        let visable = document.getElementById("menu-checkbox").checked;
        if (visable) {
            ddmenu.display = "block"
            return;
        }
        ddmenu.display = "none"
    }
}