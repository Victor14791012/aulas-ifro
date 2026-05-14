alter table alunos add alun_nascimento date ;
alter table alunos modify aluno_nascimento datetime not null;
alter table alunos change alun_nascimento aluno_nascimento date not null;

alter table aluno rename to alunos;
describe alunos;

alter table alunos drop aluno_nascimento;

create table produto(
	prod_id int, 
    prod_name varchar(45),
    prod_preco decimal(10,2)
);

alter table produto;

insert into alunos values(1234567899, 1 , '2023-10-28 19:30:35');

alter table produto add constraint pk_produto primary key (prod_id);
describe produto;

create table categoria(
	cate_id int,
    cate_nome varchar(45)
);
alter table produto add prod_categoria int;