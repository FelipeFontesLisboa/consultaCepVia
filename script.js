function buscarCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.erro) {
                document.getElementById("resultado").innerHTML = "CEP não encontrado.";
            } else { 
                var endereco = "localidade: " + data.localidade + "<br>" +
                    "logradouro: " + data.logradouro + "<br>" +
                    "complemento: " + data.complemento + "<br>" +
                    "bairro: " + data.bairro + "<br>" +
                    "ddd: " + data.ddd + "<br>" +
                    "ibge: " + data.ibge + "<br>" +
                    "uf: " + data.uf;

                document.getElementById("resultado").innerHTML = endereco;
            }
        })
        .catch(function (erro) {
            console.log(erro);
        })
}

