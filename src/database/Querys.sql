--Listado de ingresos
select i.cant as "Cantidad de paquetes", p.gr_paq as "Gramos por paquete",i.cant * p.gr_paq as "Total", p.nombre as "Producto", i.fecha_reg as "Fecha", i.fecha_ven as "Fecha Vencimiento", i.valor_usd as "Valor Unitario", i.contratador, d.nombre as "Donante", u.correo as "Usuario" 
from inventario i, producto p, donante d, usuario u
where i.fk_prod = p.id and i.fk_don = d.id and i.fk_user = u.id and i.cant > 0
order by i.fecha_reg;

--Listado de egresos
select i.cant as "Cantidad de paquetes", p.gr_paq as "Gramos por paquete",i.cant * p.gr_paq as "Total", p.nombre as "Producto", i.fecha_reg as "Fecha", u.correo as "Usuario" 
from inventario i, producto p, usuario u
where i.fk_prod = p.id  and i.fk_user = u.id and i.cant < 0
order by i.fecha_reg;

--Inventario Actual de productos en Gramos
select SUM(i.cant * p.gr_paq) as "Total Gr/Ml", p.nombre as "Producto"
from inventario i, producto p
where i.fk_prod = p.id
group by p.nombre
order by 1 desc;

--Top 5 productos mas donados por Gramos
select SUM(i.cant * p.gr_paq) as "Total Gr/Ml", p.nombre as "Producto"
from inventario i, producto p
where i.fk_prod = p.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by p.nombre
order by 1 desc
limit 5;

--top 5 productos mas donados por paquetes
select SUM(i.cant) as "Paquetes",p.gr_paq as "Gramos por paquete", p.nombre as "Producto", i.fk_prod as Id
from inventario i, producto p
where i.fk_prod = p.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by i.fk_prod,p.nombre,p.gr_paq
order by 1 desc
limit 5;

--top 5 donantes por gramos totales
select SUM(i.cant * p.gr_paq) as "Total Gr/Ml", d.nombre as "Donante"
from inventario i, producto p, donante d
where i.fk_prod = p.id and i.fk_don = d.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by d.nombre
order by 1 desc
limit 5;

--top 5 donantes por cantidad de paquetes totales
select SUM(i.cant) as "Total Paquetes", d.nombre as "Donante"
from inventario i, donante d
where i.fk_don = d.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by d.nombre
order by 1 desc
limit 5;

--Top 5 donantes por numero de donaciones
select Count(d.nombre) as "Cantidad de donaciones", d.nombre as "Donante"
from inventario i, donante d
where i.fk_don = d.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by d.nombre
order by 1 desc
limit 5;

--top 5 donantes por valor en dolares por donaciones
select SUM(i.cant*i.valor_usd) as "Cantidad de donaciones", d.nombre as "Donante"
from inventario i, donante d
where i.fk_don = d.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by d.nombre
order by 1 desc
limit 5;

--Valor en dolares en donaciones
select SUM(i.valor_usd*i.cant) as "Valor en dolares"
from inventario i
where i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
order by 1 desc
limit 1;

--Valor en dolares en donaciones por tipo de alimento
select SUM(i.valor_usd*i.cant) as "Valor en dolares", p.tipo as "Tipo de producto"
from inventario i, producto p
where i.fk_prod = p.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by p.tipo
order by 1 desc;

--Top 5 productos mas usados por gramo
select SUM(i.cant * p.gr_paq) as "Total Gr/Ml", p.nombre as "Producto"
from inventario i, producto p
where i.fk_prod = p.id and i.cant < 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by p.nombre
order by 1 asc
limit 5;

--top 5 productos mas usados por paquete
select SUM(i.cant) as "Paquetes",p.gr_paq as "Gramos por paquete", p.nombre as "Producto", i.fk_prod as Id
from inventario i, producto p
where i.fk_prod = p.id and i.cant < 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by i.fk_prod,p.nombre,p.gr_paq
order by 1 asc
limit 5;

--top 5 contratadores por numero de donaciones
select count(i.cant) as "Cantidad de donaciones", i.contratador
from inventario i, producto p
where i.fk_prod = p.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by i.contratador
order by 1 desc
limit 5;

--top 5 contratadores por valor en dolares por donaciones
select SUM(i.valor_usd*i.cant) as "Cantidad de donaciones", i.contratador
from inventario i, producto p
where i.fk_prod = p.id and i.cant > 0 and
i.fecha_reg between TO_DATE('01/01/2020' , 'DD/MM/YYYY') and TO_DATE('30/10/2020' , 'DD/MM/YYYY')
group by i.contratador
order by 1 desc
limit 5;