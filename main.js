const Commands = [
    { key: 'github', name: 'github', url: 'https://github.com/' }
]

const InputValue = document.querySelector('#searchInput');

const handleEvent = e => {
    if (e.key === 'Enter' && InputValue.value !== '') {
        console.log("Enviar");
        ValidateData(e.target.value);
    }
}

const ValidateData = value => {
    const [command, level] = value.toLowerCase().split(",");
    const Data = { value: command.split(":"), level };
    execute(Data);
}

const execute = (Data) => {
    const { value } = Data;

    const result = Commands.find(e => {
        return e.key === value[0];
    });

    if (result) {
        const url = result.url;

        if (chrome.tabs) {
            chrome.tabs.create({ url, active: true });
        } else {
            window.open(url, '_blank');
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    InputValue.addEventListener("keydown", e => {
        handleEvent(e);
    })
});