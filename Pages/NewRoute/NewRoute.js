const submitButton = document.getElementById('addRoute-submit-button');
submitButton.onclick = (e) => {
    const originalRoute = document.getElementById('originalRoute-input');
    const shortcut = document.getElementById('shortcut-input');
    
    saveNewRoute(originalRoute, shortcut);
}

const saveNewRoute = (originalRoute, shortcut) => {
    const item = {
        name: '',
        key: shortcut.value,
        url: originalRoute.value,
    };

    const shortcuts = JSON.parse(localStorage.getItem('shortcuts'));
    
    shortcuts ? addNewRoute(shortcuts, item) : createObject(item);
}

const addNewRoute = (shortcuts, item) => {
    console.log(shortcuts);
    shortcuts.push(item);
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
}

const createObject = (item) => {
    localStorage.setItem("shortcuts", JSON.stringify([item]));
}