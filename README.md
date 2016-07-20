Tutorial MEAN Stack
Para setup do ambiente de programação (MEAN + GIT):
Para usuários Windows:
1) Instale GIT Kranken (plataforma com recursos gráficos para git) -> https://www.gitkraken.com/
2) Instale NodeJS -> https://nodejs.org/en/
3) Instale MongoDB -> https://www.mongodb.com/download-center#community
4) Crie a pasta db em C:\data\db (esse é o diretório padrão do Mongo)
5) Clone esse repositório
6) Inicie o MongoDB -> pode-se usar esse comando "C:\Program Files\MongoDB\Server\3.2\bin\mongod"
7) Use o comando npm install na pasta do projeto
8) Mude a variável port do arquivo server.js para a constante 3000
9) Use o comando node server.js
10) Acesse o website em localhost:3000

Para usuários Ubuntu:
1) Instale GIT Kranken (plataforma com recursos gráficos para git) -> https://www.gitkraken.com/
2) Instale NodeJS:
cd ~
wget http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
tar xzvf node-v*
cd node-v*
./configure
make
sudo make install
cd ~
rm -rf ~/node-v*

3) Instale MongoDB:
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install mongodb-org

4) Inicie o MongoDB:
sudo service mongod start

6) Clone esse repositório
7) Use o comando npm install na pasta do projeto
8) Mude a variável port do arquivo server.js para a constante 3000
9) Use o comando node server.js
10) Acesse o website em localhost:3000

Opcional:
1) Use o editor de texto Atom -> https://atom.io/

IMPORTANTE:
Para upload (push) dos seus arquivos crie uma branch com o seu nome nesse projeto.