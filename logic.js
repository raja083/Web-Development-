setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation= 6*stime;

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
    
},1000)
let i = 0;
let colors = ['yellow','violet', 'red', 'orange','pink','white','cyan'];
function changeColor(){
    document.body.style.backgroundColor = colors[i];
    i++;
    if(i>=colors.length){
        i=0;  
    }
}
setInterval(changeColor, 1000);