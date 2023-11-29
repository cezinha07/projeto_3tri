function login() {
    const username = document.getElementById('username').value;
    const passowrd = document.getElementById('passowrd').value;



    if(username === 'usuario' && passowrd === 'senha') {
        document.getElementById('statusMesage').innerText = 'login bem sucedido';
    

    }else{
        document.getElementById('statusmesage').innerText = 'email ou senha invalida, tente novamente'
    }
}

function submitOpinioes() {
    const opnioesInput = document.getElementById('opnioesInput');
    const opnioesList = document.getElementById('opinioesList');

    if(opnioesInput.value.trim() !== '') {
        const opinioesItem = document.createElement('div');
        opinioesItem.className = 'opnioes-item';
        opinioesItem.textContent = opnioesInput.value;
        opnioesList.appendChild(opinioesItem);

        opnioesInput.value = '';
    } else{
        alert('Digite uma opniao sobre o Celc antes de enviar');
    }
}