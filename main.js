// Creating a function to attach to the button
// having an event listener attached to the button to invoke the function
function ChangePicture(listNum,listPic){
    listPic[0].src='images/'+listNum[0]+'.png';
    listPic[1].src='images/'+listNum[1]+'.png';
    listPic[2].src='images/'+listNum[2]+'.png';
    listPic[3].src='images/'+listNum[3]+'.png';
    listPic[4].src='images/'+listNum[4]+'.png';
    listPic[5].src='images/'+listNum[5]+'.png';
}

function Generate(){
    for(i=0;i<1000;i++){
        setTimeout(function X(){
            var r1 = Math.floor(Math.random()*(7-1)+1);
            var r2 = Math.floor(Math.random()*(7-1)+1);
            var r3 = Math.floor(Math.random()*(7-1)+1);
            var r4 = Math.floor(Math.random()*(7-1)+1);
            var r5 = Math.floor(Math.random()*(7-1)+1);
            var r6 = Math.floor(Math.random()*(7-1)+1);
            var listofNums = [r1,r2,r3,r4,r5,r6];
            var listofPics = [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6];
            ChangePicture(listofNums,listofPics);
        },0);
    }
}

// Getting The Button
var Button = document.getElementById("gen");
// Adding an event listener to the button
Button.addEventListener('click',Generate);

// Getting the images to change
var Pic1 = document.getElementById('pic1');
var Pic2 = document.getElementById('pic2');
var Pic3 = document.getElementById('pic3');
var Pic4 = document.getElementById('pic4');
var Pic5 = document.getElementById('pic5');
var Pic6 = document.getElementById('pic6');
