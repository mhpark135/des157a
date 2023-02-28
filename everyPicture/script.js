(function () {
	'use strict';
    console.log('im in');
    
    const container = document.getElementsByClassName('peace1');
    const theImg = document.getElementsByClassName('pea1');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;
    
    container.addEventListener('mousemove',reportPos);

    function reportPos(event) {
        const mousePosX = Math.ceil((event.clientX - (container.getBoundingClientRect().left))/percent);

        if (prevLoc !== mousePosX) {
            let addedPx = mousePosX * 30;
            theImg.style.width = (800 + addedPx) + 'px';
            prevLoc = mousePosX;
            console.log(prevLoc);
        }
    }

})();
// END IIFE