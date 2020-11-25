const Commands = [
    { key: 'gh', name: 'github', url: 'https://github.com' }
]

const InputValue = document.querySelector('#searchInput');

const handleEvent = e => {
    if (e.key === 'Enter' && InputValue.value !== '') {
        console.log("Enviar");
        ValidateData(e.target.value);
    }
}

const ValidateData = value => {
    const fullCommand = value.split(":");
    const command = fullCommand[0].toLowerCase();
    const auxiliarParamater = fullCommand[1];

    const Data = { value: command, auxiliarParamater: auxiliarParamater };
    execute(Data);
}

const execute = (Data) => {
    debugger;
    const { value, auxiliarParamater } = Data;

    const result = Commands.find(e => {
        return e.key === value;
    });

    if (result) {
        let url = result.url;

        try {
            url = `${url}/${auxiliarParamater}`;
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
    })
});