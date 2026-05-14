CREATE DATABASE aula_ads_atividade;
use aula_ads_atividade;
create table funcionario(
	id_funcionario int auto_increment,
    constraint pk_funcionario
    primary key(id_funcionario),
    login_funcionario varchar(45),
    senha_funcionario varchar(45),
    nome_funcioanrio varchar(45)
);

create table cliente(
	id_cliente int auto_increment,
    constraint pk_cliente
    primary key(id_cliente),
    CPF_cliente bigint(11),
    nome_cliente varchar(200),
    endereco_rua_cliente varchar(45),
    endereco_bairro_cliente varchar(45),
    endereco_numero_cliente varchar(45),
    telefone_cliente bigint(9)
    
);

create table barbeiro(
	id_barbeiro int auto_increment,
    constraint pk_barbeiro
    primary key(id_barbeiro),
    nome_barbeiro varchar(45),
    servico_barbeiro varchar(200)
);

create table agendamento(
	id_agendamento int auto_increment,
    constraint pk_agendamento
    primary key(id_agendamento),
    data_agendamento date,
    hora_agendamento time,
    id_funcionario int,
    id_cliente int,
    id_barbeiro int,
    constraint fk_funcionario
    foreign key (id_funcionario)
    references funcionario(id_funcionario),
    constraint fk_cliente
    foreign key (id_cliente)
    references cliente(id_cliente),
    constraint fk_barbeiro
    foreign key (id_barbeiro)
    references barbeiro(id_barbeiro)
);

create table servico(
	id_servico int auto_increment,
    constraint pk_servico
    primary key(id_servico),
    nome_servico varchar(45),
    descricao_servico varchar(200),
    tempo_servico time,
    valor_servico float
);

create table servicos_agendamento(
id_agendamento int,
constraint fk_agendamento
foreign key(id_agendamento)
references agendamento(id_agendamento),
id_servico int,
constraint fk_servico
foreign key(id_servico)
references servico(id_servico),
preco_total float
)

