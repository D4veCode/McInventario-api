CREATE DATABASE McInventario;

DROP schema public cascade;
CREATE schema public;

CREATE TABLE Users(
	ID SERIAL UNIQUE,
	Correo varchar(100) NOT NULL UNIQUE,
	Clave varchar(200) NOT NULL,
	CONSTRAINT Pk_Usuario PRIMARY KEY(ID)	
);

CREATE TABLE Empleados(
	ID SERIAL UNIQUE,
	Nombre varchar(30) NOT NULL,
	Apellido varchar(30) NOT NULL,
	CI varchar(8) NOT NULL UNIQUE,
	Cargo varchar(30),
	Fk_user int NOT NULL UNIQUE,
	FOREIGN KEY (Fk_user) REFERENCES Usuario (ID),
	CONSTRAINT Pk_Empleado PRIMARY KEY(ID)	
);

CREATE TABLE Donantes(
	ID SERIAL UNIQUE,
	Nombre varchar(60) NOT NULL UNIQUE,
	Tip_id char(1) NOT NULL,
	Num_id varchar(12) NOT NULL UNIQUE,
	Direccion varchar(80),
	CONSTRAINT Pk_Donante PRIMARY KEY(ID)	
);

CREATE TABLE Productos(
	ID SERIAL UNIQUE,
	Nombre varchar(60) NOT NULL,
	Marca varchar(60) NOT NULL,
	gr_paq int NOT NULL,
	tipo varchar(25),
	CONSTRAINT Pk_Producto PRIMARY KEY(ID)	
);

CREATE TABLE Inventarios(
	ID SERIAL UNIQUE,
	Cant int NOT NULL,
	Fk_Prod int NOT NULL,
	Fecha_reg timestamp default (now() AT TIME ZONE 'America/Caracas'),
	Fecha_ven date,
	Valor_Usd NUMERIC(3, 2),
	Contratador varchar(60),
	Fk_Don int,
	Fk_user int NOT NULL,
	FOREIGN KEY (Fk_user) REFERENCES Usuario (ID),
	FOREIGN KEY (Fk_Prod) REFERENCES Producto (ID),
  	FOREIGN KEY (Fk_Don) REFERENCES Donante (ID),
	CONSTRAINT Pk_Inventario PRIMARY KEY(ID)	
);

CREATE TABLE Recetas(
	ID SERIAL UNIQUE,	
	Nombre varchar(60) NOT NULL,
	gr_persona int NOT NULL,
	CONSTRAINT Pk_Receta PRIMARY KEY(ID)
);
