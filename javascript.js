//untuk tombol mode gelap
let toggle=document.getElementById("toggleDark")
const body = document.body;


toggle.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")){
        toggle.textContent ="☀️"
    }
    else{
toggle.textContent="🌙"
    }
    
})

//image slider
let next;
let index =0
let image =document.getElementById("slider")
let gambar=[
"me.jpeg",
"instagram.jpg"
]

function update(){
    index++;

if(index >= gambar.length){
    index = 0;
}
image.src=gambar[index];

}
setInterval(update,3000)



