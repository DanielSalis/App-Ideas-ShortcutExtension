
const Commands = JSON.parse(localStorage.getItem("shortcuts"));

const InputValue = document.querySelector('#searchInput');
const deleteAllIcon = document.getElementById("deleteAllIcon");

const handleEvent = e => {
    if (e.key === 'Enter' && InputValue.value !== '') {
        console.log("Enviar");
        execute(e.target.value);
    }
}

const execute = (inputValue) => {

    const result = Commands.find(e => {
        return e.key === inputValue;
    });

    if (result) {
        try {
            let url = result.url;
            if (chrome.tabs) {
                chrome.tabs.create({ url, active: true });
            } else {
                window.open(url, '_blank');
            }
        }
        catch {
            alert('Parâmetro não encontrado');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    InputValue.addEventListener("keydown", e => {
        handleEvent(e);
    });
    deleteAllIcon.addEventListener("click", e => {
        localStorage.clear();
    })
});

// document.addEventListener("DOMContentLoaded", () => {

// });