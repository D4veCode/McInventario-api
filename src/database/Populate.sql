delete from recetas;
delete from inventarios;
delete from productos;
delete from donantes;
delete from empleados;
delete from users;

Insert into users(id,correo,clave)values
(1,'davidasb.27@gmail.com','123456'),
(2,'ferdy.rod23@gmail.com','123456');

Insert into empleados(id,nombre,apellido,ci,cargo,fk_user)values
(1,'David','Serrada','29565150','Developer',1),
(2,'Fernando','Rodriguez','24210861','Developer',2);

Insert into donantes(id,Nombre,tip_id,num_id,direccion)values
(1,'Veronica Vazquez','V','6913539','Macaracuay'),
(2,'Campamento Ranita','J','123456789','Macaracuay'),
(3,'Empresas Polar','J','987654321','Los Ruices');

Insert into productos(id,nombre,marca,gr_paq,tipo)values
(1,'Harina Cachapa','PAN',500,'Carbohidrato'),
(2,'Harina Arepa','PAN',1000,'Carbohidrato'),
(3,'Queso Blanco','Artesanal',300,'Lacteo'),
(4,'Queso Amarillo','Artesanal',200,'Lacteo'),
(5,'Pasta Larga','Capri',500,'Carbohidrato'),
(6,'Pasta Corta','Capri',1000,'Carbohidrato'),
(7,'Costillas','Artesanal',800,'Proteina'),
(8,'Lomito','Artesanal',500,'Proteina'),
(9,'Atun','Bumble Bee',350,'Proteina'),
(10,'Mantequilla','Mavesa',250,'Grasa'),
(11,'Mantequilla','Mavesa',500,'Grasa'),
(12,'Margarina','Shifon',500,'Grasa'),
(13,'Aceite','Maceite',1000,'Grasa'),
(14,'Aceite','Corcovado',900,'Grasa'),
(15,'Cebolla','Artesanal',500,'Vegetal'),
(16,'Cambur','Artesanal',300,'Fruta');

Insert into recetas(id,nombre,gr_persona)Values
(1,'Harina Arepa',50),
(2,'Pasta Corta',125),
(3,'Pasta Larga',125),
(4,'Atun',175);

insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (2, 6, 3, '2020/02/02', '2021/01/13', 4.29, 'Diego Bastidas', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (1, 6, 16, '2020/04/02', '2021/01/17', 3.81, 'Monica Ortega', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (3, 7, 5, '2020/04/20', '2021/01/21', 0.47, 'Monica Ortega', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (4, 10, 6, '2020/02/18', '2021/01/29', 1.7, 'Fernando Rodriguez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (5, 5, 9, '2020/03/31', '2021/01/09', 5.68, 'Diego Bastidas', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (7, 6, 2, '2020/02/27', '2021/01/30', 0.16, 'Fernando Rodriguez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (6, 5, 2, '2020/01/04', '2021/01/29', 2.27, 'Diego Bastidas', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (8, 7, 13, '2020/01/06', '2021/01/12', 0.63, 'Arney Ashburne', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (9, 6, 4, '2020/04/16', '2021/01/09', 2.05, 'Yetta Sutherel', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (10, 5, 15, '2020/03/09', '2021/01/21', 2.9, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (11, 1, 15, '2020/01/19', '2021/01/02', 1.37, 'Marcia Diaz', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (12, 2, 13, '2020/01/27', '2021/01/01', 4.44, 'Maurits Kirsche', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (13, 5, 16, '2020/01/25', '2021/01/08', 0.09, 'Daniel Fernandez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (14, 7, 2, '2020/01/17', '2021/01/06', 6.63, 'Andris Meatyard', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (15, 7, 13, '2020/04/23', '2021/01/04', 5.45, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (16, 5, 15, '2020/01/26', '2021/01/18', 3.25, 'Fernando Rodriguez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (17, 7, 1, '2020/01/09', '2021/01/21', 6.15, 'Frieda Haws', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (18, 1, 15, '2020/02/16', '2021/01/01', 0.71, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (19, 10, 3, '2020/03/12', '2021/01/09', 0.7, 'Cristin Matzl', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (20, 6, 12, '2020/01/27', '2021/01/27', 3.88, 'Vincenz Andreolli', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (21, 2, 4, '2020/04/16', '2021/01/17', 4.72, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (22, 8, 4, '2020/04/18', '2021/01/04', 1.15, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (23, 7, 13, '2020/03/07', '2021/01/22', 0.12, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (24, 9, 6, '2020/04/05', '2021/01/14', 4.82, 'Mose Kubes', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (25, 4, 2, '2020/02/26', '2021/01/09', 0.53, 'Marcia Diaz', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (26, 5, 8, '2020/02/27', '2021/01/22', 2.01, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (27, 2, 4, '2020/02/21', '2021/01/07', 6.15, 'David Serrada', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (28, 5, 6, '2020/01/27', '2021/01/08', 3.62, 'Diego Bastidas', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (29, 46, 7, '2020/03/09', '2021/01/12', 3.09, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (30, 2, 1, '2020/04/03', '2021/01/21', 4.13, 'Aileen Doornbos', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (31, 2, 1, '2020/03/01', '2021/01/26', 3.24, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (32, 7, 15, '2020/02/14', '2021/01/26', 4.21, 'David Serrada', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (33, 6, 10, '2020/01/14', '2021/01/29', 3.27, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (34, 1, 12, '2020/04/12', '2021/01/06', 3.52, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (35, 10, 6, '2020/02/11', '2021/01/09', 6.22, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (36, 3, 14, '2020/04/22', '2021/01/30', 4.85, 'David Serrada', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (37, 2, 2, '2020/04/15', '2021/01/25', 6.17, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (38, 9, 1, '2020/02/23', '2021/01/24', 5.24, 'Orelie Schneider', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (39, 3, 2, '2020/04/11', '2021/01/23', 1.24, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (40, 9, 16, '2020/02/07', '2021/01/23', 1.59, 'Fernando Rodriguez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (41, 8, 11, '2020/03/26', '2021/01/28', 5.42, 'Diego Bastidas', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (42, 8, 8, '2020/01/09', '2021/01/07', 1.52, 'David Serrada', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (43, 8, 2, '2020/01/27', '2021/01/15', 2.66, 'Marcia Diaz', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (44, 10, 13, '2020/03/22', '2021/01/24', 1.64, 'Leticia Pendle', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (45, 7, 11, '2020/03/26', '2021/01/21', 2.78, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (46, 5, 9, '2020/02/20', '2021/01/07', 2.02, 'Monica Ortega', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (47, 10, 2, '2020/02/22', '2021/01/12', 2.08, 'David Serrada', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (48, 7, 9, '2020/01/01', '2021/01/13', 4.26, 'David Serrada', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (49, 8, 2, '2020/04/02', '2021/01/02', 3.38, 'Daniel Fernandez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (50, 4, 14, '2020/03/05', '2021/01/24', 6.54, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (51, 2, 13, '2020/04/17', '2021/01/19', 6.07, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (52, 9, 14, '2020/03/15', '2021/01/20', 3.36, 'Fernando Rodriguez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (53, 8, 12, '2020/02/23', '2021/01/02', 0.3, 'David Serrada', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (54, 9, 16, '2020/04/19', '2021/01/06', 2.06, 'Paco Quenell', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (55, 3, 13, '2020/02/14', '2021/01/22', 0.06, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (56, 8, 13, '2020/02/29', '2021/01/22', 2.67, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (57, 9, 16, '2020/02/21', '2021/01/06', 1.2, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (58, 5, 10, '2020/01/30', '2021/01/07', 0.85, 'David Serrada', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (59, 4, 10, '2020/01/18', '2021/01/10', 1.73, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (60, 6, 6, '2020/02/23', '2021/01/25', 5.91, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (61, 6, 16, '2020/01/09', '2021/01/20', 6.25, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (62, 7, 6, '2020/03/15', '2021/01/07', 3.86, 'David Serrada', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (63, 8, 6, '2020/04/09', '2021/01/21', 2.51, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (64, 6, 11, '2020/01/22', '2021/01/25', 0.32, 'David Serrada', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (65, 6, 16, '2020/01/26', '2021/01/10', 2.99, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (66, 10, 3, '2020/03/28', '2021/01/04', 6.78, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (67, 1, 13, '2020/02/13', '2021/01/03', 0.27, 'Fernando Rodriguez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (68, 9, 7, '2020/01/06', '2021/01/24', 4.35, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (69, 7, 6, '2020/04/08', '2021/01/26', 2.97, 'Fernando Rodriguez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (70, 64, 8, '2020/01/28', '2021/01/16', 0.65, 'Garret Callan', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (71, 38, 15, '2020/04/29', '2021/01/05', 1.28, 'Monica Ortega', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (72, 3, 13, '2020/03/02', '2021/01/24', 4.15, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (73, 4, 4, '2020/02/28', '2021/01/07', 2.88, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (74, 9, 9, '2020/03/27', '2021/01/07', 6.95, 'Fernando Rodriguez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (75, 3, 4, '2020/03/31', '2021/01/09', 2.54, 'David Serrada', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (76, 7, 14, '2020/01/29', '2021/01/03', 4.63, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (77, 4, 5, '2020/04/15', '2021/01/21', 2.29, 'David Serrada', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (78, 5, 5, '2020/02/03', '2021/01/30', 5.93, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (79, 9, 4, '2020/02/15', '2021/01/20', 1.28, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (80, 10, 11, '2020/01/21', '2021/01/16', 5.71, 'Daniel Fernandez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (81, 6, 16, '2020/02/16', '2021/01/25', 2.08, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (82, 8, 9, '2020/02/19', '2021/01/09', 2.51, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (83, 4, 14, '2020/01/27', '2021/01/15', 0.77, 'David Serrada', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (84, 2, 1, '2020/01/01', '2021/01/08', 5.81, 'Daniel Fernandez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (85, 1, 1, '2020/04/21', '2021/01/14', 1.49, 'Benni Klishin', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (86, 9, 11, '2020/03/04', '2021/01/14', 2.5, 'Daniel Fernandez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (87, 8, 13, '2020/02/19', '2021/01/17', 2.36, 'Marcia Diaz', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (88, 3, 9, '2020/04/05', '2021/01/20', 5.39, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (89, 5, 13, '2020/02/25', '2021/01/19', 0.47, 'Monica Ortega', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (90, 10, 2, '2020/04/02', '2021/01/27', 4.42, 'Marcia Diaz', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (91, 8, 8, '2020/01/07', '2021/01/15', 1.17, 'Fernando Rodriguez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (92, 2, 7, '2020/02/21', '2021/01/23', 3.55, 'Marylin Illing', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (93, 7, 4, '2020/02/07', '2021/01/16', 1.04, 'Fernando Rodriguez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (94, 4, 5, '2020/04/18', '2021/01/09', 3.12, 'Fernando Rodriguez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (95, 9, 8, '2020/02/28', '2021/01/13', 5.94, 'Marcia Diaz', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (96, 2, 2, '2020/03/07', '2021/01/04', 6.94, 'Diego Bastidas', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (97, 10, 13, '2020/02/02', '2021/01/20', 2.15, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (98, 6, 5, '2020/02/12', '2021/01/25', 0.6, 'Monica Ortega', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (99, 2, 14, '2020/02/14', '2021/01/31', 0.17, 'Diego Bastidas', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (100, 2, 15, '2020/02/24', '2021/01/15', 2.79, 'Monica Ortega', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (101, 5, 4, '2020/01/03', '2021/01/05', 0.15, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (102, 2, 10, '2020/03/25', '2021/01/30', 6.68, 'David Serrada', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (103, 3, 5, '2020/02/28', '2021/01/06', 5.86, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (104, 5, 2, '2020/04/07', '2021/01/28', 1.63, 'Diego Bastidas', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (105, 7, 6, '2020/02/14', '2021/01/15', 3.0, 'Monica Ortega', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (106, 3, 1, '2020/04/10', '2021/01/11', 6.61, 'Nappie Diano', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (107, 10, 4, '2020/03/19', '2021/01/16', 3.64, 'David Serrada', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (108, 4, 16, '2020/02/26', '2021/01/16', 0.72, 'Marcia Diaz', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (109, 4, 5, '2020/02/06', '2021/01/01', 6.88, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (110, 6, 9, '2020/02/02', '2021/01/09', 3.86, 'Fernando Rodriguez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (111, 3, 2, '2020/04/24', '2021/01/23', 0.74, 'Marcia Diaz', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (112, 4, 1, '2020/04/26', '2021/01/02', 4.32, 'Fernando Rodriguez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (113, 8, 15, '2020/03/20', '2021/01/19', 6.77, 'David Serrada', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (114, 4, 3, '2020/03/21', '2021/01/20', 0.93, 'David Serrada', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (115, 10, 9, '2020/01/08', '2021/01/16', 0.17, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (116, 3, 6, '2020/01/01', '2021/01/04', 0.97, 'Monica Ortega', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (117, 1, 10, '2020/04/20', '2021/01/26', 4.09, 'David Serrada', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (118, 4, 9, '2020/02/16', '2021/01/02', 1.17, 'Diego Bastidas', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (119, 1, 9, '2020/04/22', '2021/01/23', 3.73, 'Diego Bastidas', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (120, 10, 10, '2020/01/04', '2021/01/02', 0.88, 'Marcia Diaz', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (121, 4, 4, '2020/02/19', '2021/01/30', 2.35, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (122, 2, 3, '2020/04/17', '2021/01/14', 1.0, 'Marcia Diaz', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (123, 9, 5, '2020/03/05', '2021/01/11', 4.35, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (124, 4, 1, '2020/04/27', '2021/01/01', 5.03, 'Daniel Fernandez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (125, 2, 9, '2020/04/11', '2021/01/28', 3.0, 'Daniel Fernandez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (126, 7, 5, '2020/02/28', '2021/01/03', 1.59, 'Fernando Rodriguez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (127, 8, 14, '2020/02/10', '2021/01/03', 3.57, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (128, 7, 3, '2020/02/27', '2021/01/23', 6.82, 'Dennet Waye', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (129, 3, 14, '2020/03/15', '2021/01/19', 6.25, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (130, 10, 1, '2020/02/23', '2021/01/01', 4.11, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (131, 6, 11, '2020/02/29', '2021/01/31', 1.46, 'Daniel Fernandez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (132, 2, 10, '2020/04/19', '2021/01/23', 6.83, 'Marcia Diaz', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (133, 7, 10, '2020/03/25', '2021/01/19', 2.45, 'Marcia Diaz', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (134, 6, 1, '2020/03/04', '2021/01/16', 5.14, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (135, 3, 7, '2020/01/11', '2021/01/03', 1.95, 'Marcia Diaz', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (136, 10, 1, '2020/02/04', '2021/01/26', 6.92, 'David Serrada', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (137, 10, 10, '2020/01/11', '2021/01/05', 5.24, 'Monica Ortega', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (138, 6, 4, '2020/04/07', '2021/01/13', 3.15, 'Daniel Fernandez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (139, 4, 5, '2020/03/18', '2021/01/28', 1.76, 'Marcia Diaz', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (140, 2, 5, '2020/03/29', '2021/01/11', 6.26, 'Caritta Bosma', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (141, 8, 14, '2020/02/14', '2021/01/10', 6.25, 'Rick Gittoes', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (142, 10, 13, '2020/02/18', '2021/01/18', 1.61, 'Monica Ortega', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (143, 8, 11, '2020/03/19', '2021/01/04', 0.27, 'Marcia Diaz', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (144, 10, 2, '2020/02/22', '2021/01/04', 1.17, 'Diego Bastidas', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (145, 6, 9, '2020/03/23', '2021/01/25', 5.89, 'Diego Bastidas', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (146, 6, 6, '2020/03/21', '2021/01/02', 1.23, 'Charley Ayres', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (147, 1, 10, '2020/03/31', '2021/01/25', 4.77, 'David Serrada', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (148, 7, 15, '2020/01/16', '2021/01/13', 0.54, 'Monica Ortega', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (149, 10, 15, '2020/01/16', '2021/01/12', 4.41, 'David Serrada', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (150, 4, 13, '2020/04/28', '2021/01/26', 5.47, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (151, 1, 1, '2020/03/18', '2021/01/31', 5.46, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (152, 2, 2, '2020/04/13', '2021/01/19', 6.23, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (153, 10, 12, '2020/01/06', '2021/01/18', 3.53, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (154, 4, 12, '2020/01/01', '2021/01/01', 6.89, 'Giles Gathercole', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (155, 8, 8, '2020/01/23', '2021/01/06', 4.46, 'Monica Ortega', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (156, 8, 14, '2020/02/14', '2021/01/21', 6.54, 'Marcia Diaz', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (157, 3, 1, '2020/03/15', '2021/01/10', 1.4, 'Preston Wicklen', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (158, 10, 2, '2020/02/02', '2021/01/29', 1.74, 'Diego Bastidas', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (159, 9, 3, '2020/01/08', '2021/01/08', 2.5, 'Daniel Fernandez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (160, 4, 5, '2020/04/24', '2021/01/25', 0.23, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (161, 7, 3, '2020/02/09', '2021/01/02', 3.36, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (162, 3, 1, '2020/03/20', '2021/01/03', 6.86, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (163, 10, 12, '2020/03/09', '2021/01/26', 4.62, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (164, 10, 12, '2020/01/12', '2021/01/14', 4.61, 'Daniel Fernandez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (165, 4, 8, '2020/01/14', '2021/01/02', 5.09, 'Marcia Diaz', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (166, 6, 13, '2020/04/27', '2021/01/01', 6.03, 'Marcia Diaz', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (167, 5, 8, '2020/01/24', '2021/01/15', 6.37, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (168, 1, 12, '2020/03/28', '2021/01/08', 4.66, 'Marcia Diaz', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (169, 8, 13, '2020/02/12', '2021/01/20', 4.99, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (170, 4, 4, '2020/03/31', '2021/01/19', 4.85, 'Marcia Diaz', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (171, 5, 14, '2020/01/27', '2021/01/05', 1.78, 'Vladimir Rudgerd', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (172, 4, 9, '2020/01/04', '2021/01/15', 4.09, 'Monica Ortega', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (173, 9, 3, '2020/02/04', '2021/01/14', 0.93, 'Marcia Diaz', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (174, 4, 11, '2020/04/20', '2021/01/18', 5.73, 'Marcia Diaz', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (175, 1, 13, '2020/01/07', '2021/01/19', 6.22, 'Daniel Fernandez', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (176, 2, 5, '2020/04/14', '2021/01/13', 0.05, 'Marcia Diaz', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (177, 8, 13, '2020/03/05', '2021/01/14', 4.13, 'David Serrada', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (178, 4, 1, '2020/02/22', '2021/01/19', 1.12, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (179, 2, 9, '2020/04/24', '2021/01/03', 1.17, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (180, 6, 11, '2020/04/29', '2021/01/08', 4.14, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (181, 6, 8, '2020/02/09', '2021/01/14', 6.75, 'Marcia Diaz', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (182, 8, 16, '2020/01/17', '2021/01/16', 6.81, 'Diego Bastidas', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (183, 7, 16, '2020/01/17', '2021/01/19', 0.67, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (184, 6, 3, '2020/03/15', '2021/01/01', 3.25, 'David Serrada', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (185, 7, 1, '2020/02/09', '2021/01/13', 0.3, 'Fernando Rodriguez', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (186, 2, 7, '2020/02/05', '2021/01/02', 3.89, 'Wendi Snape', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (187, 7, 2, '2020/04/27', '2021/01/16', 3.15, 'Daniel Fernandez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (188, 2, 6, '2020/01/05', '2021/01/27', 5.15, 'Ruthi Tinan', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (189, 5, 4, '2020/01/29', '2021/01/30', 6.0, 'David Serrada', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (190, 4, 2, '2020/04/11', '2021/01/29', 3.95, 'Monica Ortega', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (191, 2, 2, '2020/02/19', '2021/01/13', 4.35, 'Monica Ortega', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (192, 10, 11, '2020/03/12', '2021/01/01', 0.3, 'David Serrada', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (193, 7, 2, '2020/02/05', '2021/01/13', 5.53, 'Fernando Rodriguez', 1, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (194, 5, 11, '2020/04/05', '2021/01/30', 4.25, 'Diego Bastidas', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (195, 5, 10, '2020/01/10', '2021/01/27', 0.15, 'Monica Ortega', 2, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (196, 7, 9, '2020/03/02', '2021/01/23', 0.3, 'Fernando Rodriguez', 3, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (197, 7, 1, '2020/02/02', '2021/01/31', 5.38, 'Daniel Fernandez', 3, 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (198, 1, 5, '2020/04/03', '2021/01/18', 6.03, 'Brent Daughtry', 2, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (199, 8, 7, '2020/01/25', '2021/01/29', 5.56, 'Fernando Rodriguez', 1, 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fecha_ven, valor_usd, contratador, fk_don, fk_user) values (200, 10, 6, '2020/04/16', '2021/01/18', 5.42, 'David Serrada', 3, 2);

insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (201, -6, 8, '2020/05/11', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (202, -14, 8, '2020/05/02', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (203, -5, 13, '2020/06/15', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (204, -15, 15, '2020/05/16', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (205, -4, 13, '2020/05/15', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (206, -12, 6, '2020/05/12', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (207, -8, 7, '2020/06/28', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (208, -10, 4, '2020/06/24', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (209, -13, 1, '2020/06/15', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (210, -5, 8, '2020/06/17', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (211, -10, 1, '2020/05/02', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (212, -5, 8, '2020/05/16', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (213, -6, 2, '2020/05/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (214, -10, 1, '2020/05/02', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (215, -8, 7, '2020/05/03', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (216, -8, 10, '2020/06/03', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (217, -11, 10, '2020/05/06', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (218, -10, 13, '2020/06/23', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (219, -7, 14, '2020/06/22', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (220, -9, 16, '2020/05/28', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (221, -10, 16, '2020/06/25', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (222, -6, 14, '2020/05/14', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (223, -8, 13, '2020/06/08', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (224, -13, 8, '2020/05/13', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (225, -14, 8, '2020/05/07', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (226, -9, 13, '2020/06/04', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (227, -13, 7, '2020/06/04', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (228, -12, 14, '2020/06/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (229, -11, 6, '2020/05/14', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (230, -9, 6, '2020/05/09', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (231, -10, 4, '2020/06/25', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (232, -6, 16, '2020/06/29', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (233, -10, 15, '2020/05/12', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (234, -7, 9, '2020/05/11', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (235, -8, 8, '2020/06/08', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (236, -9, 14, '2020/05/27', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (237, -10, 16, '2020/05/04', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (238, -5, 6, '2020/05/06', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (239, -15, 13, '2020/05/13', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (240, -12, 9, '2020/06/21', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (241, -9, 9, '2020/06/03', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (242, -7, 13, '2020/06/08', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (243, -10, 7, '2020/05/30', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (244, -8, 9, '2020/06/14', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (245, -4, 9, '2020/06/28', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (246, -15, 8, '2020/06/08', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (247, -5, 15, '2020/05/27', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (248, -5, 15, '2020/06/08', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (249, -5, 10, '2020/06/09', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (250, -6, 16, '2020/05/30', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (251, -4, 14, '2020/06/21', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (252, -5, 16, '2020/05/30', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (253, -7, 4, '2020/06/01', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (254, -5, 6, '2020/06/18', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (255, -10, 16, '2020/06/16', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (256, -5, 15, '2020/06/04', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (257, -13, 12, '2020/06/02', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (258, -14, 15, '2020/06/01', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (259, -7, 1, '2020/05/28', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (260, -5, 3, '2020/05/12', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (261, -12, 13, '2020/06/12', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (262, -9, 8, '2020/06/12', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (263, -5, 5, '2020/06/23', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (264, -9, 6, '2020/05/13', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (265, -7, 9, '2020/05/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (266, -13, 7, '2020/05/27', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (267, -6, 3, '2020/06/21', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (268, -7, 15, '2020/06/02', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (269, -15, 6, '2020/06/11', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (270, -10, 13, '2020/05/29', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (271, -9, 7, '2020/05/17', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (272, -12, 2, '2020/05/26', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (273, -7, 8, '2020/05/10', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (274, -5, 10, '2020/05/14', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (275, -5, 15, '2020/06/29', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (276, -7, 15, '2020/05/16', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (277, -9, 16, '2020/05/07', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (278, -6, 12, '2020/06/08', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (279, -2, 16, '2020/06/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (280, -13, 2, '2020/05/05', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (281, -13, 2, '2020/06/17', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (282, -9, 8, '2020/06/25', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (283, -12, 14, '2020/06/22', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (284, -9, 3, '2020/06/28', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (285, -7, 10, '2020/06/09', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (286, -12, 2, '2020/05/17', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (287, -13, 6, '2020/06/13', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (288, -5, 4, '2020/06/14', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (289, -6, 14, '2020/05/10', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (290, -4, 9, '2020/05/22', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (291, -11, 6, '2020/06/22', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (292, -9, 7, '2020/05/21', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (293, -5, 14, '2020/05/16', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (294, -11, 15, '2020/06/09', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (295, -6, 13, '2020/06/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (296, -12, 5, '2020/06/05', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (297, -8, 16, '2020/06/23', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (298, -12, 8, '2020/05/19', 2);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (299, -14, 3, '2020/05/26', 1);
insert into inventarios (id, cant, fk_prod, fecha_reg, fk_user) values (300, -7, 1, '2020/06/12', 1);

ALTER SEQUENCE recetas_id_seq RESTART WITH 5;
ALTER SEQUENCE inventarios_id_seq RESTART WITH 301;
ALTER SEQUENCE productos_id_seq RESTART WITH 17;
ALTER SEQUENCE donantes_id_seq RESTART WITH 4;
ALTER SEQUENCE empleados_id_seq RESTART WITH 3;
ALTER SEQUENCE users_id_seq RESTART WITH 3;