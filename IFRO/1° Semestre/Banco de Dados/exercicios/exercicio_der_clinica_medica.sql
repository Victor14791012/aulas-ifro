use aula_ads_atividade_clinica;

create table fucionario(
	func_matricula int,
    constraint  pk_funcionario
    primary key(func_matricula),
    func_nome varchar(40),
    func_cpf varchar(14),
    func_dt_admissao date,
    func_cargo varchar(40),
    func_salario float
);

create table paciente(
	paci_id int auto_increment,
    constraint pk_paciente
    primary key(paci_id),
    paci_nome varchar(45),
    paci_endereco varchar(45),
    paci_dt_nascimento date,
    paci_sexo varchar(15),
    paci_cpf varchar(14)
);


create table medico(
	medi_id int auto_increment,
    constraint pk_medico
    primary key(medi_id),
    medi_crm varchar(20),
    medi_name varchar(45),
    medi_cpf varchar(14),
    medi_endereco varchar(45),
    medi_especialidade varchar(100)
);

create table consultorio(
	cons_nr_consultorio int,
    constraint pk_consultorio
    primary key(cons_nr_consultorio),
    cons_andar int
);

create table consulta(
	id_consulta int auto_increment,
    constraint pk_consulta
    primary key(id_consulta),
    medi_id int,
    paci_id int,
    cons_dt_consulta date,
    cons_diagnostico varchar(200),
    cons_nr_consultorio int,
    constraint fk_medico
    foreign key (medi_id)
    references medico(medi_id),
    constraint fk_paci
    foreign key (paci_id)
    references paciente(paci_id),
    constraint fk_nr_consultorio
    foreign key (cons_nr_consultorio)
    references consultorio(cons_nr_consultorio)
);

insert into fucionario values
(1, 'Carlos Silva', '123.456.789-00', '2020-03-15', 'Recepcionista', 1800.00),
(2, 'Ana Souza', '987.654.321-00', '2019-07-22', 'Enfermeira', 3200.00),
(3, 'João Pereira', '456.789.123-00', '2021-01-10', 'Administrador', 4000.00);

insert into paciente (paci_nome, paci_endereco, paci_dt_nascimento, paci_sexo, paci_cpf) values
('Mariana Alves', 'Rua A, 123', '1995-06-12', 'Feminino', '111.222.333-44'),
('Pedro Santos', 'Rua B, 456', '1988-11-03', 'Masculino', '555.666.777-88'),
('Lucas Rocha', 'Rua C, 789', '2000-02-25', 'Masculino', '999.888.777-66');

insert into medico (medi_crm, medi_name, medi_cpf, medi_endereco, medi_especialidade) values
('CRM12345', 'Dr. Roberto Lima', '222.333.444-55', 'Av. Central, 100', 'Cardiologia'),
('CRM67890', 'Dra. Fernanda Costa', '333.444.555-66', 'Av. Brasil, 200', 'Dermatologia'),
('CRM54321', 'Dr. Paulo Mendes', '444.555.666-77', 'Av. Norte, 300', 'Ortopedia');

insert into consultorio values
(101, 1),
(102, 1),
(201, 2);

insert into consulta (medi_id, paci_id, cons_dt_consulta, cons_diagnostico, cons_nr_consultorio) values
(1, 1, '2024-04-10', 'Consulta de rotina - sem alterações', 101),
(2, 2, '2024-04-11', 'Alergia de pele', 102),
(3, 3, '2024-04-12', 'Dor no joelho - suspeita de lesão', 201);