const CurrentShortcuts = JSON.parse(localStorage.getItem("shortcuts"));
window.onload = function () {
    loadShortcuts();
}

const loadShortcuts = () => {

    const ul = document.getElementById('shortcuts-container-ul');

    if (CurrentShortcuts) {
        CurrentShortcuts.forEach(element => {
            let li = document.createElement('li');
            li.innerText ="Atalho: " + element.key;
            ul.appendChild(li);
        });
    } else {
        let li = document.createElement('li');
        li.innerText ="Você ainda não criou atalhos T_T";
        ul.appendChild(li);
    }
}

