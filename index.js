const darkModeToggleBtn = document.getElementById("darkModeToggler");
setTheme();

darkModeToggleBtn.addEventListener('change', (e) => {
    e.stopImmediatePropagation();
    if (e.target.checked === true) {
        localStorage.setItem('darkModeElabled', 'true');

    } else {
        localStorage.setItem('darkModeElabled', 'false');
    }

    setTheme();

})




function setTheme() {
    const isDarkModeEnabled = localStorage.getItem('darkModeElabled');
    if (isDarkModeEnabled === 'true' && document.body.classList.contains('light-Theme')) {
        document.body.classList.remove('light-Theme');
        document.body.classList.add('dark-Theme');
        darkModeToggleBtn.checked = true;
    } else if (isDarkModeEnabled === 'false' && document.body.classList.contains('dark-Theme')) {
        document.body.classList.remove('dark-Theme');
        document.body.classList.add('light-Theme');
        darkModeToggleBtn.checked = false;
    }
}