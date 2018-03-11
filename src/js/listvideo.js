var listVideo =[

        {
            title: '[MV] BTS(방탄소년단) _ DOPE(쩔어)',
            srcImg: 'src/video/dope.webp',
            srcVideo: 'https://www.youtube.com/embed/BVwAVbKYYeM'
        },
        {
            title: '[MV] BTS(방탄소년단) _ I NEED U',
            srcImg: 'src/video/I need you.webp',
            srcVideo: 'https://www.youtube.com/embed/NMdTd9e-LEI'
        },
        {
            title:'[MV] BTS(방탄소년단) _ Boy In Luv(상남자)',
            srcImg: 'src/video/boy in luv.webp',
            srcVideo: 'https://www.youtube.com/embed/m8MfJg68oCs'
        },
        {
            title:'[MV] BTS(방탄소년단) _ War of Hormone(호르몬 전쟁)',
            srcImg: 'src/video/War of hormone.webp',
            srcVideo: 'https://www.youtube.com/embed/XQmpVHUi-0A'
        },
        {
            title:'[MV] BTS(방탄소년단) _ Just One Day(하루만)',
            srcImg: 'src/video/Just One Day.webp',
            srcVideo: 'https://www.youtube.com/embed/DTcKkcyS410'
        },
        {
            title:'[MV] BTS(방탄소년단) _ Danger',
            srcImg: 'src/video/Danger.webp',
            srcVideo: 'https://www.youtube.com/embed/bagj78IQ3l0'
        },
        {
            title:'BTS(방탄소년단) 가요대제전 Intro performance Trailer',
            srcImg: 'src/video/performance.webp',
            srcVideo: 'https://www.youtube.com/embed/hoTBL39i60M'
        },
        {
            title:'[MV] BTS(방탄소년단) _ No More Dream (Dance ver.)',
            srcImg: 'src/video/No More Dream.webp',
            srcVideo: 'https://www.youtube.com/embed/pUkViXyQTI4'
        },
        {
            title:'[MV] BTS(방탄소년단) _ N.O(엔.오)',
            srcImg: 'src/video/NO.webp',
            srcVideo: 'https://www.youtube.com/embed/mmgxPLLLyVo'
        },
        {
            title: "BTS (防弾少年団) 'FOR YOU' Official MV",
            srcImg: 'src/video/for you.webp',
            srcVideo: 'https://www.youtube.com/embed/TTG6nxwdhyA'
        }

]
var parentDIV = document.getElementById("nho");
for (var i = 0; i < listVideo.length; ++i) {
    var myImg = document.createElement("img");
    myImg.src = listVideo[i].srcImg;
    myImg.alt = listVideo[i].srcVideo;
    myImg.title = listVideo[i].title;
    myImg.onclick = function () {
        var the  = document.getElementById("to");
        the.src = myImg.alt;
        document.getElementById("header").innerHTML=myImg.title;
    };
    parentDIV.appendChild(myImg);
}
