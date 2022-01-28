document.addEventListener('scroll', function() {
    window.open('https://www.youtube.com/watch?v=ZXsQAXx_ao0?t=6&autoplay=1&controls=0&loop=1','_blank');
    window.open('https://www.youtube.com/watch?v=zRHzWrWIXog?autoplay=1&controls=0&loop=1','_blank');
});

document.addEventListener('pointermove', function () {

    document.querySelector('body').style.position ="relative"
    var animated = document.createElement("img");
    document.querySelector('body').appendChild(animated);
    let randSize = Math.round((Math.random() * 150));
    animated.style.height = `${randSize * 1.5}px`;
    animated.style.width = `${randSize}px`;
    animated.style.zIndex = `${Math.round((Math.random() * 500))}`
    let shiaArray = ["https://64.media.tumblr.com/2bc3aa7c35c66aadc6b32dd337e94a97/tumblr_npd34ypYaQ1qje999o1_400.gif", "https://i.imgur.com/V4GI3Sw.gif", "https://64.media.tumblr.com/12d694092e856786ee1213fe6829b371/tumblr_nqdgtgVjtI1twx7xgo1_500.gif", "https://33.media.tumblr.com/12d694092e856786ee1213fe6829b371/tumblr_nqdgtgVjtI1twx7xgo1_1280.gif"];
    animated.src = `${shiaArray[Math.round((Math.random() * 3))]}`;
    animated.style.top = `${Math.round((Math.random() * 1030))}px`;
    animated.style.left = `${Math.round((Math.random() * 1870))}px`;
    animated.style.position = "absolute"
});

$('div').click(function() {
    var contentBody = document.querySelector('body');
    contentBody.remove()
    var aNewBodyElement = document.createElement("body");
    document.body = aNewBodyElement;
    var tag1 = document.createElement("iframe");
    document.querySelector('body').appendChild(tag1);
    tag1.style.position = "relative"
    tag1.style.width = '100%';
    tag1.style.height = '110%';
    tag1.style.display = "fixed";
    tag1.allow = "autoplay"
    tag1.src = "https://www.youtube.com/embed/ZXsQAXx_ao0?start=6&autoplay=1";
    var tag2 = document.createElement("iframe");
    document.querySelector('body').appendChild(tag2);
    tag2.style.position = "relative"
    tag2.style.width = '100%';
    tag2.style.height = '110%';
    tag2.style.display = "fixed";
    tag2.allow = "autoplay"
    tag2.hidden = true;
    tag2.src = "https://www.youtube.com/embed/zRHzWrWIXog?start=6&autoplay=1";
});
