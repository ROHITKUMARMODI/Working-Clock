/* for hour 12hr =360 degree =>1hr =360/12=30degree, 60min = 30degree
1min = 30/60min =1/2m
for hour hand (h = 30h + m/2);
for min hand 60min =360deg, 1min = 6degree
min = 6m
for second 60second = 360 degree  1sec =6 degree 
s sec = 6s*/ 

setInterval(()=>{
   let d= new Date();
   let htime =d.getHours();
   let mtime =d.getMinutes();
   let  stime =d.getSeconds();
   let hrotaion = 30*htime + mtime/2;
   let  mrotation = 6*mtime
   let srotation = 6*stime;
    
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second'); 

    hour.style.transform =`rotate(${hrotaion}deg)`
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`
},1000)