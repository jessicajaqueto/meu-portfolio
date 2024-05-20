const pickAll = document.querySelector('html');
const pickCheck = document.getElementById('input-dark');

pickCheck.addEventListener('change', function() {
    pickAll.classList.toggle('darkmode');
});

const isDarkTheme = window.matchMedia("(prefers-colors-scheme: dark)").matches;

function darkTheme(theme){
    if(theme){
        pickAll.classList.toggle('darkmode'); 
        pickCheck.checked = true;
    }else{
        pickCheck.checked = false;
    }    
}

darkTheme(isDarkTheme);