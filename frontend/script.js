axios.defaults.baseURL = 'http://localhost:8000/'

function makeLogin() {
    const user = document.getElementsByName('usuario')[0].value;
    const passwd = document.getElementsByName('senha')[0].value;

    const data = {
        username: user,
        password: passwd
    };
    axios.post('auth/obtain_token', data)
        .then(response => {
            console.log('Response: ', response.data);
            localStorage.setItem('token', response.data.token);
            window.location.href = "index.html";
            alert('Usuário logado com sucesso!');
        })
        .catch(error => {
            console.log('Response: ', passwd);
            console.log('Error: ', error);
            alert('Usuário ou senha incorretos!');
        });
};