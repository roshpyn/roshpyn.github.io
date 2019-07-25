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
function doOnResize() {
    let ddmenu = document.getElementById("menu-list").style 
    if (window.innerWidth > 800)
    {
        ddmenu.display = "block";
    }
    else{
        ddmenu.display = "none"
    }
}