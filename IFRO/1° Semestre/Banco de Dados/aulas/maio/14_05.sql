use cadastro;

select a.alun_nome, m.mat_data, c.curs_nome
from alunos as a, matricula as m, cursos as c 
where
a.alun_id = m.alunos_id
and
m.cursos_id = c.curs_id
and
a.alun_nome like '%Talita%' ;

select profissao,
count(*) as "Quantidade" from alunos
group by profissao;
