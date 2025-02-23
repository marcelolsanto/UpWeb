function scroll_home() {
    var element = document.getElementById("home");
    element.scrollIntoView();
}
function scroll_valores() {
    var element = document.getElementById("servicos");
    element.scrollIntoView();
}

function scroll_projetos() {
    var element = document.getElementById("promocoes");
    element.scrollIntoView();
}
function scroll_portfolio() {
    var element = document.getElementById("contato");
    element.scrollIntoView();
}
var clicks = {organizacao:0,criatividade:0,compromisso:0,missao:0,visao:0,valor:0}

    function mostrar_ocultar_organizacao() {
        if (clicks.organizacao %2 == 0) {
            clicks.organizacao++;
            mostrar();
        } else {
            clicks.organizacao++;
            ocultar();
        }
        function mostrar() {
            h3_organizacao.style.display = 'flex';
            p_organizacao.style.display = 'flex';
            btn_organizacao2.style.display ='block';
            btn_organizacao1.style.display ='none';
        }
        function ocultar() {
            h3_organizacao.style.display = 'none';
            p_organizacao.style.display = 'none';
            btn_organizacao2.style.display = 'none';
            btn_organizacao1.style.display = 'block';
        }
    }
    function mostrar_ocultar_criatividade() {
        if (clicks.criatividade %2 == 0) {
            clicks.criatividade++;
            mostrar();
        } else {
            clicks.criatividade++;
            ocultar();
        }
        function mostrar() {
            h3_criatividade.style.display = 'flex';
            p_criatividade.style.display = 'flex';
            btn_criatividade2.style.display ='block';
            btn_criatividade1.style.display ='none';
        }
        function ocultar() {
            h3_criatividade.style.display = 'none';
            p_criatividade.style.display = 'none';
            btn_criatividade2.style.display = 'none';
            btn_criatividade1.style.display = 'block';
        }
    }

    function mostrar_ocultar_compromisso() {
        if (clicks.compromisso %2 == 0) {
            clicks.compromisso++;
            mostrar();
        } else {
            clicks.compromisso++;
            ocultar();
        }
        function mostrar() {
            h3_compromisso.style.display = 'flex';
            p_compromisso.style.display = 'flex';
            btn_compromisso2.style.display ='block';
            btn_compromisso1.style.display ='none';
        }
        function ocultar() {
            h3_compromisso.style.display = 'none';
            p_compromisso.style.display = 'none';
            btn_compromisso2.style.display = 'none';
            btn_compromisso1.style.display = 'block';
        }
    }

    function mostrar_ocultar_missao() {
        if (clicks.missao %2 == 0) {
            clicks.missao++;
            mostrar_texto();
        } else {
            clicks.missao++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_missao.style.display = 'block';
            p_missao.style.display = 'block';
        }
        function ocultar_texto() {
            h3_missao.style.display = 'none';
            p_missao.style.display = 'none';
        }
    }

    function mostrar_ocultar_visao() {
        if (clicks.visao %2 == 0) {
            clicks.visao++;
            mostrar_texto();
        } else {
            clicks.visao++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_visao.style.display = 'block';
            p_visao.style.display = 'block';
        }
        function ocultar_texto() {
            h3_visao.style.display = 'none';
            p_visao.style.display = 'none';
        }
    }

    function mostrar_ocultar_valor() {
        if (clicks.valor %2 == 0) {
            clicks.valor++;
            mostrar_texto();
        } else {
            clicks.valor++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_valor.style.display = 'block';
            p_valor.style.display = 'block';
        }
        function ocultar_texto() {
            h3_valor.style.display = 'none';
            p_valor.style.display = 'none';
        }
    }
