function openNav() {
    document.querySelector(".nav").style.opacity = "0.95";
    document.querySelector(".nav").style.right = "-20%";
}
  
function closeNav() {
    document.querySelector(".nav").style.opacity = "0";
    document.querySelector(".nav").style.right = "100%";
}

function scrollDown(target)
{
    document.getElementById(target).scrollIntoView
    ({
        behavior: 'smooth',
    });
}

function uploadFile(target) {
    document.querySelector(".file-name").innerHTML = target.files[0].name;
}


function load_ex() {
    const diff = document.getElementById('diff')
    const author = document.getElementById('author')
    const chapter = document.getElementById('chapter')

}