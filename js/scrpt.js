function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>O seu nome é: <strong>${nome.value}</strong>, o sobrenome é: <strong>${sobrenome.value}</strong>, o peso é: <strong>${peso.value}</strong> kg e a altura é: <strong>${altura.value}</strong> m</p>`;
    }

    form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();