const temaSalvo = localStorage.getItem('theme');
const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(temaSalvo === 'dark' || (!temaSalvo && prefereEscuro)){
    document.documentElement.classList.add('dark');
}else{
    document.documentElement.classList.remove('dark');
}