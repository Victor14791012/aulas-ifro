CREATE DATABASE aula_ads_atividade_clinica;
use aula_ads_atividade;
use aula_ads_atividade_clinica;

create table funcionario(
	id_funcionario int auto_increment,
    constraint pk_funcionario
    primary key(id_funcionario),
    login_funcionario varchar(45),
    senha_funcionario varchar(45),
    nome_funcioanrio varchar(45)
);

insert into funcionario (login_funcionario,senha_funcionario,nome_funcioanrio) values('Vitão', "123", "Victor Carvalho");

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
    constraint fk_funcionario foreign key (id_funcionario) references funcionario(id_funcionario),
    constraint fk_cliente foreign key (id_cliente) references cliente(id_cliente),
    constraint fk_barbeiro foreign key (id_barbeiro) references barbeiro(id_barbeiro)
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
);


insert into barbeiro(nome_barbeiro,servico_barbeiro) values('Carlos Henrique', 'Corte,Barba');
insert into barbeiro(nome_barbeiro,servico_barbeiro) values('Marcos Meireles', 'Corte,Barba');

insert into funcionario(login_funcionario,senha_funcionario, nome_funcioanrio) values(1021, 123,'Marta Gomes');
insert into funcionario(login_funcionario,senha_funcionario, nome_funcioanrio) values(1022, 123,'Letícia Back');
insert into funcionario(login_funcionario,senha_funcionario, nome_funcioanrio) values(1023, 123,'Matuasalem Leonidas');

insert into cliente(CPF_cliente, nome_cliente, endereco_rua_cliente, endereco_bairro_cliente, endereco_numero_cliente, telefone_cliente) values(35264257451, 'Maria Betania','João Demetrio', 'Jardim das Oliveiras', 1023,69985776655);
insert into cliente(CPF_cliente, nome_cliente, endereco_rua_cliente, endereco_bairro_cliente, endereco_numero_cliente, telefone_cliente) values(35264257452, 'Mateus Morete','Jucelino', 'COAB', 5236,69985776656);
insert into cliente(CPF_cliente, nome_cliente, endereco_rua_cliente, endereco_bairro_cliente, endereco_numero_cliente, telefone_cliente) values(35264257453, 'Marco Benicio',' Major ', 'Nova Vilhena', 8622 , 69985776657);
insert into cliente(CPF_cliente, nome_cliente, endereco_rua_cliente, endereco_bairro_cliente, endereco_numero_cliente, telefone_cliente) values(35264257454, 'Roberto Carlos','  Capitão Castro ', ' Barão 3', 4125 ,  69985776658);
insert into cliente(CPF_cliente, nome_cliente, endereco_rua_cliente, endereco_bairro_cliente, endereco_numero_cliente, telefone_cliente) values(35264257455, 'Igor Ferreira',' Betania ', ' Barão 2', 2535 , 69985776659);

insert into servico(nome_servico, descricao_servico, tempo_servico, valor_servico) values('Corte masculino', 'Cortes com a maquina e tesoura', '01:00', 30);
insert into servico(nome_servico, descricao_servico, tempo_servico, valor_servico) values('Corte feminino', 'Cortes com a maquina e tesoura', '01:30', 45);
insert into servico(nome_servico, descricao_servico, tempo_servico, valor_servico) values('Barba', 'Cortes com a maquina e tesoura', '00:30', 15);

insert into agendamento(data_agendamento, hora_agendamento, id_funcionario, id_cliente, id_barbeiro) values('2023-05-15', '08:00', 2, 1, 1);
insert into agendamento(data_agendamento, hora_agendamento, id_funcionario, id_cliente, id_barbeiro) values('2023-05-16', '09:30', 2, 2, 2);
insert into agendamento(data_agendamento, hora_agendamento, id_funcionario, id_cliente, id_barbeiro) values('2023-05-17', '07:00', 3, 3, 3);
insert into agendamento(data_agendamento, hora_agendamento, id_funcionario, id_cliente, id_barbeiro) values('2023-05-18', '08:00', 1, 4, 2);

insert into servicos_agendamento(id_agendamento, id_servico, preco_total) values(1, 2, 45);
insert into servicos_agendamento(id_agendamento, id_servico, preco_total) values(2, 1, 30);
insert into servicos_agendamento(id_agendamento, id_servico, preco_total) values(4, 1, 30);
insert into servicos_agendamento(id_agendamento, id_servico, preco_total) values(4, 3, 15);
insert into servicos_agendamento(id_agendamento, id_servico, preco_total) values(4, 2, 30);
