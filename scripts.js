
"use strict";

const toggleVisibility = (...ids) => {
    for (const id of ids) {
        const e = document.getElementById(id);
        e.style.display = e.style.display !== 'none'
         ? 'none'
         : 'block';
    }
};

const init = () => {
    const elements = document.getElementsByClassName('hidden');
    for (const e of elements) {
        e.style.display = 'none';
    }
};
