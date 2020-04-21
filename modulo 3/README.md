### Exercício Módulo 03 - Async/await

## [Exercício](https://github.com/guilhermeasena32/javascriptES6-rocketseat/blob/master/modulo%203/exercicio.js)

Transforme os seguintes trechos de código utilizando async/await:

```javascript
// Função delay aciona o .then após 1s
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
    delay().then(() => {
      console.log("2s");
      delay().then(() => {
        console.log("3s");
      });
    });
  });
}
umPorSegundo();
```

```javascript
import axios from "axios";
function getUserFromGithub(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Usuário não existe");
    });
}
getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");
```

```javascript
class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Repositório não existe");
      });
  }
}
Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");
```

```javascript
const buscaUsuario = (usuario) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Usuário não existe");
    });
};
buscaUsuario("diego3g");
```
