const CurrentShortcuts = JSON.parse(localStorage.getItem("shortcuts"));
window.onload = function () {
    loadShortcuts();
}

const loadShortcuts = () => {

    const ul = document.getElementById('shortcuts-container-ul');

    if (CurrentShortcuts) {
        CurrentShortcuts.forEach(element => {
            let editIcon = document.createElement('img');
            editIcon.src = '../../assets/delete-alert.png';
            editIcon.className = "delete-icon";
            editIcon.onclick = function (element) {
                debugger;
                deleteShortcut(element.target);
            };

            let span = document.createElement('span');
            span.innerText = "Atalho: " + element.key;
            span.setAttribute('key',element.key);

            let li = document.createElement('li');
            li.className = "edit-li";
            
            li.appendChild(span);
            li.appendChild(editIcon);
            ul.appendChild(li);
        });
    } else {
        let li = document.createElement('li');
        li.innerText ="Você ainda não criou atalhos T_T";
        ul.appendChild(li);
    }
}

const deleteShortcut = (element) => {
    const span = element.previousSibling;
    const li = element.parentElement;

    const key = span.getAttribute('key');

    let elementFound = CurrentShortcuts.find(element => element.key == key);
    CurrentShortcuts.pop(elementFound);

    localStorage.setItem('shortcuts', JSON.stringify(CurrentShortcuts));

    li.remove();
}

