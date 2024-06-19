const campoLogin = document.getElementById('username')
const campoSenha = document.getElementById('password')
const campoNovoLogin = document.getElementById('newusername')
const campoNovaSenha = document.getElementById('newpassword')
const campoRepSenha = document.getElementById('reppassword')
const campoNovoTitulo = document.getElementById('newtitle')
const campoNovoAutor = document.getElementById('author')
const campoNovoGenero = document.getElementById('gender')
const campoNovoIsbn = document.getElementById('isbn')



function logar(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));

                window.location.href='home.html'
                break;
            }
        }        
    }
    alert(mensagem)
}

function cadastrar(){

    if(campoNovaSenha.value != campoRepSenha.value || campoRepSenha.value == '' || campoRepSenha.value == null) {
        alert("senha invalida!");
    }
    else{
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");  

    } 
}

function logout(){
    window.location.href='index.html'
}



function cadastrarLivro(){

    if(true) {
        const livro = {
            titulo: campoNovoTitulo.value,
            autor: campoNovoAutor.value,
            genero: campoNovoGenero.value,
            isbnDoLivro: campoNovoIsbn.value,
        };
        let bliblioteca = JSON.parse(localStorage.getItem("bliblioteca"));
        if (bliblioteca == null) {
            
            bliblioteca = [];
        }
        bliblioteca.push(livro);
        localStorage.setItem("bliblioteca", JSON.stringify(bliblioteca));
        alert("o livro cadastrado com sucesso!");  
    }
}