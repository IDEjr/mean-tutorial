Tutorial MEAN Stack
Para setup do ambiente de programação (MEAN + GIT):
Para usuários Windows:
1) Instale GIT Kranken (plataforma com recursos gráficos para git) -> https://www.gitkraken.com/
2) Instale NodeJS -> https://nodejs.org/en/
3) Instale MongoDB -> https://www.mongodb.com/download-center#community
4) Crie a pasta db em C:\data\db (esse é o diretório padrão do Mongo)
5) Dê fork nesse repositório
6) Inicie o MongoDB -> pode-se usar esse comando "C:\Program Files\MongoDB\Server\3.2\bin\mongod"
7) Use o comando npm install na pasta do projeto
8) Mude a variável port do arquivo server.js para a constante 3000
9) Use o comando node server.js
10) Acesse o website em localhost:3000
11) Lembre-se de usar o framework semantic, documentado em http://semantic-ui.com/. Para isso, adicione ao seu arquivo html o css e o javascript deles:
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script src="semantic/dist/semantic.min.js"></script>

Para usuários Ubuntu:
1) Instale GIT Kranken (plataforma com recursos gráficos para git) -> https://www.gitkraken.com/
2) Instale NodeJS:
cd ~
wget http://nodejs.org/dist/latest-v4.x/node-v4.4.7.tar.gz
tar -xzvf node-v4.4.7
cd node-v4.4.7
./configure
make
sudo make install
cd ~
rm -rf ~/node-v4.4.7

3) Instale MongoDB:
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install mongodb-org

4) Inicie o MongoDB:
sudo service mongod start

6) Dê fork nesse repositório
7) Use o comando npm install na pasta do projeto
8) Mude a variável port do arquivo server.js para a constante 3000
9) Use o comando node server.js
10) Acesse o website em localhost:3000
11) Lembre-se de usar o framework semantic, documentado em http://semantic-ui.com/. Para isso, adicione ao seu arquivo html o css e o javascript deles:
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script src="semantic/dist/semantic.min.js"></script>

Opcional:
1) Use o editor de texto Atom -> https://atom.io/
2) Packages Atom Beautify e o Pigments para Atom

IMPORTANTE:
Faça upload (push) dos seus arquivos somente no seu repositório 