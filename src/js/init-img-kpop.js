
var arr = [
    'src/img/jhope/4.jpg',
    'src/img/jhope/5.jpg',
    'src/img/jhope/6.jpg',
    'src/img/jhope/7.jpg',
    'src/img/jhope/8.jpg',
    'src/img/jhope/1-1.jpg',
    'src/img/jhope/9.jpg',
    'src/img/jhope/10.jpg',
    'src/img/jimin/1.jpg',
    'src/img/jimin/2.jpg',
    'src/img/jimin/3.jpg',
    'src/img/jimin/4.jpg',
    'src/img/jimin/5.jpg',
    'src/img/jimin/6.png',
    'src/img/jimin/7.jpg',
    'src/img/jimin/9.jpg',
    'src/img/jin/1.jpg',
    'src/img/jin/2.jpg',
    'src/img/jin/3.jpg',
    'src/img/jin/4.jpg',
    'src/img/jin/5.jpg',
    'src/img/jin/6.jpg',
    'src/img/jin/7.jpg',
    'src/img/jin/8.jpg',
    'src/img/jin/9.jpg',
    'src/img/jungkook/1.jpg',
    'src/img/jungkook/3.jpg',
    'src/img/jungkook/4.jpg',
    'src/img/jungkook/5.jpg',
    'src/img/jungkook/jungkook.jpg',
    'src/img/jungkook/10.jpg',
    'src/img/jimin/10.jpg',
    'src/img/jungkook/8.jpg',
    'src/img/jungkook/6.jpg',
    'src/img/rm/1.jpg',
    'src/img/rm/2.jpg',
    'src/img/rm/3.jpg',
    'src/img/rm/4.jpg',
    'src/img/rm/5.jpg',
    'src/img/rm/7.jpg',
    'src/img/rm/8.jpg',
    'src/img/rm/9.png',
    'src/img/jungkook/9.jpeg',
    'src/img/suga/1.jpg',
    'src/img/suga/2.jpg',
    'src/img/suga/3.jpg',
    'src/img/suga/4.jpg',
    'src/img/suga/5.jpg',
    'src/img/suga/8.jpg',
    'src/img/suga/7.jpg',
    'src/img/rm/10.jpg',
    'src/img/v/3.jpg',
    'src/img/v/1.jpg',
    'src/img/v/2.jpg',
    'src/img/v/4.jpg',
    'src/img/v/5.jpg',
    'src/img/v/7.jpg',
    'src/img/suga/10.png',
    'src/img/v/9.jpg',
    'src/img/v/6.jpg',
    'src/img/v/8.jpg'
]
var myDiv = document.getElementById("myDiv");
for (var i = 0; i < arr.length; i++){
    var myChildDiv = myDiv.getElementsByTagName('div')[i % 6];
    var myAmazingDiv = document.createElement("p");
    myAmazingDiv.className = "contain";
    var myImg = document.createElement("img");
    myImg.src = arr[i];
    myAmazingDiv.appendChild(myImg);
    myChildDiv.appendChild(myAmazingDiv);
}
