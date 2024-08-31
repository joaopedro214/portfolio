document.addEventListener("DOMContentLoaded", function() {
    // Obter o botão
    const voltarTopoBotao = document.getElementById("voltaProTopo");

    // Mostrar o botão ao rolar 20px para baixo a partir do topo
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            voltarTopoBotao.style.display = "block";
        } else {
            voltarTopoBotao.style.display = "none";
        }
    };

    // Quando o usuário clicar no botão, volta para o topo
    voltarTopoBotao.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});