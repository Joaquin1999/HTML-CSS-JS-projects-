

ampm=document.getElementById('ampm');
function displayTime(){

    let dateTime = new Date();

    let hr= dateTime.getHours();
    let min= padzero(dateTime.getMinutes());
    let sec=padzero(dateTime.getSeconds());

    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM';
    }
    else{
        ampm.innerHTML='AM';
    }
    
    hr=padzero(hr);
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;

}


function padzero(num){

    return num<10?"0"+num:num;
}

setInterval(displayTime,100)

// ampm = document.getElementById('ampm')
// function displayTime(){
//     let dateTime = new Date();
//     let hr = dateTime.getHours();
//     let min = padZero(dateTime.getMinutes());
//     let sec = padZero(dateTime.getSeconds()); 
//     if(hr>12){
//         ampm.innerHTML = 'PM'
//         hr = hr - 12
//     }
//     else{
//         ampm.innerHTML = 'AM'
//     }
//     hr = padZero(hr);
//     document.getElementById('hours').innerHTML = hr;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;    
// }

// function padZero(num){
//     return num<10?"0"+num:num
// }

// setInterval(displayTime, 100)




console.log("hai");