# Ajax exemplo
    Exemplo de aplicação usando ajax puro (sem JQuery)
    
# INSTRUÇÕES DE COMO DEVEM SER A ESTRUTURA DAS TABLEAS DO BD:
create table user(
    id int not null auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null,
    primary key(id)
) default charset = utf8;

ceate table estado(
    id_estado int not null auto_increment,
    nome varchar(30) not null,
    uf varchar(2) not null,
    pais varchar(20) not null,
    primary key(id_estado)
) default charset = utf8;

create table cidade(
    id_cidade not null auto_increment,
    nome varchar(50) not null,
    estado int not null,
    primary key(id_cidade),
    foreign key(estado) references estado(id_estado)
)  default charset = utf8;

#OBS:
Para usar executar a aplicação para ver os usuarios cadastrados e/ou as cidades de acordo com o estado escolhido, vá até o arquivo public/index.php e descomente a linha 103 e comente a linha 102, e vice-versa. A aplicação não retorna os dois códigos devido aos dois usarem a função onload do JavaScript. Caso deseje, você pode deixar a linha 103 comentada e descomentar as linhas 132 a 161 no arquivo public/assets/user.js para a aplicação retornar tudo.
