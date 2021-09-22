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

function updateInput(ish){
    parag = document.querySelectorAll('[id*="p-"]');;
    for (let i=1; i <= parag.length; i++){
            document.getElementById(`p-${i}`).classList.remove('text-gray-200');    
    }

    if (window.find(ish) === false){
        alert('String Not Found, Try Again');
    } else {
        console.log(parag);
        var myPattern = new RegExp('(\\w*'+ish+'\\w*)','gi');
        for (let i=1; i <= parag.length; i++){
            if (document.getElementById(`p-${i}`).innerHTML.match(myPattern) === null){
                document.getElementById(`p-${i}`).classList.add('text-gray-200');
            }
            
        }
        window.find(ish);
    }
}