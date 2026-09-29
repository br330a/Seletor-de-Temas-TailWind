const temaSalvo = localStorage.getItem('theme');
const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(temaSalvo === 'dark' || (!temaSalvo && prefereEscuro)){
    document.documentElement.classList.add('dark');
}else{
    document.documentElement.classList.remove('dark');
}

//Mapeamento dos elementos do DOM

const htmlElem = document.documentElement;

const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');
const btnSystem = document.getElementById('btnSystem');

const statusTexto = document.getElementById('statusTexto');

//Escuta preferencias do SO via Media Query

const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)');

//Estilos para destacar o botão ativo
const classeAtivo = ['bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-slate-900', 'dark:text-white'];
const classeInativo = ['text-slate-500', 'dark:text-slate-400', 'hover:text-slate-900', 'dark:hover:text-white'];

//Função para atualizar a interface dos botões
function atualizarBotoes(opcaoAtiva){
    [btnLight, btnDark, btnSystem].forEach(btn => {
        btn.classList.remove(...classeAtivo);
        btn.classList.add(...classeInativo);
    });

    if(opcaoAtiva === 'light'){
        btnLight.classList.add(...classeAtivo);
        btnLight.classList.remove(...classeInativo);

    }else if(opcaoAtiva === 'dark'){
        btnDark.classList.add(...classeAtivo);
        btnDark.classList.remove(...classeInativo);
    }else {
        btnSystem.classList.add(...classeAtivo);
        btnSystem.classList.remove(...classeInativo);
    }
}