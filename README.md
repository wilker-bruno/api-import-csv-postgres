## O que este projeto faz?
Faz upload de um arquivo.csv com vários usuários no ReactJS e envia um por um para ser cadastrado no banco de dados com NodeJS e PostgreSQL, controlando o feedback do backend sobre os usuários cadastrados

## Bibliotecas usadas
- redux
- react-redux
- csv
- react-dropzone

## Como executar?
- Clone o repositório
- Acesse o backend e execute um yarn para instalar as depedências
- Configure o acesso ao banco de dados
- Execute a migrate para criar a tabela no banco de dados (yarn sequelize db:migrate)
- Execute o servidor (yarn dev)
- Acesse o frontend e execute um yarn para instalar as depedências
- Execute o cliente web (yarn start)
- Faça upload dos arquivos e depois clique no botão 'Cadastrar'
- Veja os dados cadastrados no banco

## Problemas encontrados
A ideia inicial era não usar o Redux, compartilhar o estado apenas com useState. Ao carregar os usuários em um array e enviar cada um para ser cadastrado no banco de dados, o retorno de cada chamada era tratado verificando se correu tudo bem (atualizando o usuário no array com save = true) ou se teve algum erro (error= true, usuário já cadastrado por exemplo), mas cada retorno de chamada enxergava o estado como o inicial (todos os usuários com save e error igual a false) e assim no frontend parecia que apenas um usuário tinha sido cadastrado. O problema parece ser por conta do useState ser assíncrono, tentei algumas alternativas mas sem sucesso, mais sobre o problema de vários setState no mesmo método [aqui](https://medium.com/reactbrasil/10-obst%C3%A1culos-frequentes-encontrados-pelos-novos-tripulantes-do-react-7672c4facf58). A solução encontrada foi utilizar o Redux e cada retorno de chamada passou a enxergar o mesmo estado e no frontend é informado o estado de cada usuário (se foi cadastrado ou se teve erro).

## Bibliografia
- [Medium problemas comuns em react](https://medium.com/reactbrasil/10-obst%C3%A1culos-frequentes-encontrados-pelos-novos-tripulantes-do-react-7672c4facf58)
- [Rocketseat como fazer upload em reactjs](https://youtu.be/G5UZmvkLWSQ)
