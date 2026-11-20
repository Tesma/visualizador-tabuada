const numberDialog = document.getElementById('number-input') //dialog para inserir o numero
const numberInput = numberDialog.querySelector('input') //input do dialog
const h2 = document.querySelector('h2') //subtitulo

//não deixa o dialog ser cancelado apertando a tecla esc
numberDialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
  }
});

//mostra o modal dialog
numberDialog.showModal();

//
function checkValue() {
    var value = numberInput.value;
    value = Math.min(Math.max(value, 1),10)

    numberInput.value = value
}

//gera a tabuada
function generateTable() {
    checkValue();
    numberDialog.close();

    const value = numberInput.value;
    h2.innerText = 'Tabuada do ' + value

    const table = document.createElement('table')
    document.querySelector('body').appendChild(table)

    const thead = document.createElement('thead')
    thead.innerHTML = `
        <tr>
            <th scope="col">Operação</th>
            <th scope="col">Resultado</th>
        </tr>
    `
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    for (var mult = 1; mult < 11; mult++) {
        const result = value * mult
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <th scope="row">${value}x${mult}</th>
            <td>${result}</td>
        `
        tbody.appendChild(tr)
    }

    table.appendChild(tbody)

    const againBt = document.createElement('button')
    againBt.innerText = 'Nova tabuada'

    //reinicia a pagina para inserção de um novo numero
    againBt.onclick = () => {
        window.location.reload()
    }
    document.querySelector('body').appendChild(againBt)
}

numberInput.addEventListener('change', checkValue)