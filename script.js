var cofre = [];
var infotela = document.querySelector('h2.infotela')

var inputUser = document.querySelector('input#txtlogin')
var inputPassword = document.querySelector('input#txtpassword')
var botaoLogin = document.querySelector('input.botaologin');

var labelcadastrese = document.querySelector('label#labelcadastrese');
var botaocadastrese = document.querySelector('input#cadastrese');

function telaCadastro(){
    infotela.textContent = 'CADASTRO'

    botaoLogin.value = 'CADASTRE-SE';
    botaoLogin.onclick = cadastro;

    labelcadastrese.textContent = 'Já tem conta?';
    botaocadastrese.value = 'Faça Login'
    botaocadastrese.onclick = telaLogin;
}

function telaLogin(){
    infotela.textContent = 'ENTRAR'

    botaoLogin.value = 'LOGIN';
    botaoLogin.onclick = verificarLogin;

    labelcadastrese.textContent = 'Ainda não tem conta?';
    botaocadastrese.value = 'Cadastre-se'
    botaocadastrese.onclick = telaCadastro;
}

function cadastro(){
    let userCad = inputUser.value;
    let senhaCad = inputPassword.value;

    if(userCad == '' || senhaCad == ''){
        window.alert('Insira um campo valido')
    } else{
        let novoCad = { user: userCad, password: senhaCad};
        cofre.push(novoCad);
        console.table(cofre);
        window.alert(`Usuário Cadastrado: Usuário: ${userCad} Senha: ${senhaCad}`);
    }

    inputUser.value = '';
    inputPassword.value = '';
}

function verificarLogin(){
    let userLogin = inputUser.value;
    let senhaLogin = inputPassword.value;

    if(userLogin == '' || senhaLogin == ''){
        window.alert('Insira um campo valido')
    } else{
        let acesso = cofre.find(item => item.user === userLogin); //retorna true ou undefined
        if(acesso){
            if(acesso.password === senhaLogin){
                window.alert(`Bem vindo, ${userLogin}`)
            } else{
                window.alert('Senha Incorreta!')
            }
        } else{
            //usuário n encontrado - undefined
            window.alert(`Usuário ${userLogin} não encontrado`)
        }
    }

    inputUser.value = ''
    inputPassword.value = ''
}