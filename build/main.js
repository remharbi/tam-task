document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.')
});


let check_click = function(id){
    document.getElementById(`${id}`).classList.toggle('done');
    document.getElementById(`p-${id}`).classList.toggle('cross');
    document.getElementById(`c-${id}`).classList.toggle('hidden');

}

let menu = document.getElementById('menu');

let hide = function(){
    document.getElementById('side-menu').classList.toggle('hidden');
}


menu.addEventListener("click", hide);