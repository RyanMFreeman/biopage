const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    const cursorX = e.pageX;
    const cursorY = e.pageY;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
});







