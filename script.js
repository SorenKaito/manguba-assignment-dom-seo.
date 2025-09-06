
document.getElementById('changeTextBtn').addEventListener('click', function () {
    const p = document.getElementById('myParagraph');
    if (p) {
        p.textContent = 'The paragraph text has been changed!';
    }
});

document.getElementById('addItemBtn').addEventListener('click', function () {
    const ul = document.getElementById('myList');
    const li = document.createElement('li');
    li.textContent = 'New list item';
    ul.appendChild(li);
});

document.getElementById('removeItemBtn').addEventListener('click', function () {
    const ul = document.getElementById('myList');
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    } else {
        const p = document.getElementById('myParagraph');
        if (p) {
            p.remove();
        }
    }
});

document.getElementById('restoreParagraphBtn').addEventListener('click', function () {
    if (!document.getElementById('myParagraph')) {
        const newP = document.createElement('p');
        newP.id = 'myParagraph';
        newP.textContent = 'This is a paragraph (restored).';
        const firstButton = document.getElementById('changeTextBtn');
        document.body.insertBefore(newP, firstButton);
    }
});
