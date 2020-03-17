import {MigrationInterface, QueryRunner} from "typeorm";

export class UserEmployeeRefactor1584028412837 implements MigrationInterface {
    name = 'UserEmployeeRefactor1584028412837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "correo" character varying(100) NOT NULL, "clave" character varying(200) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_d3cf8c651c0e94ea522b61ca3ac" UNIQUE ("correo"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "empleados" ("id" SERIAL NOT NULL, "nombre" character varying(30) NOT NULL, "apellido" character varying(30) NOT NULL, "CI" character varying(8) NOT NULL, "cargo" character varying(30), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "Fk_user" integer, CONSTRAINT "REL_cd7c8423804fc6ab45d8dc2f50" UNIQUE ("Fk_user"), CONSTRAINT "PK_73a63a6fcb4266219be3eb0ce8a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "empleados" ADD CONSTRAINT "FK_cd7c8423804fc6ab45d8dc2f50b" FOREIGN KEY ("Fk_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`CREATE TABLE "donantes" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "Tip_id" character varying(1) NOT NULL, "Num_id" character varying(12) NOT NULL, "Direccion" character varying(80), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_d94a9cba58603c226b8323039e7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "marca" character varying(60) NOT NULL, "gr_paq" integer NOT NULL, "tipo" character varying(30), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "inventarios" ("id" SERIAL NOT NULL, "Cant" integer NOT NULL, "Fecha_reg" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), "Fecha_ven" TIMESTAMP WITH TIME ZONE DEFAULT now(), "Valor_Usd" NUMERIC(3, 2), "Contratador" character varying(60), "Fk_user" integer, "Fk_don" integer, "Fk_Prod" integer, CONSTRAINT "REL_4613ccfef3a0807c70fdff3443" UNIQUE ("Fk_user"), CONSTRAINT "REL_8343d3c61afa443c067b171fc5" UNIQUE ("Fk_don"), CONSTRAINT "REL_0ad1c33f3f1a8ed9801564950a" UNIQUE ("Fk_Prod"), CONSTRAINT "PK_95497c8cd6a8604110c7a7cbf34" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "recipes" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "gr_persona" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_4613ccfef3a0807c70fdff34432" FOREIGN KEY ("Fk_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_8343d3c61afa443c067b171fc5d" FOREIGN KEY ("Fk_don") REFERENCES "donantes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_0ad1c33f3f1a8ed9801564950a4" FOREIGN KEY ("Fk_Prod") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleados" DROP CONSTRAINT "FK_cd7c8423804fc6ab45d8dc2f50b"`, undefined);
        await queryRunner.query(`DROP TABLE "empleados"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_0ad1c33f3f1a8ed9801564950a4"`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_8343d3c61afa443c067b171fc5d"`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_4613ccfef3a0807c70fdff34432"`, undefined);
        await queryRunner.query(`DROP TABLE "recipes"`, undefined);
        await queryRunner.query(`DROP TABLE "inventarios"`, undefined);
        await queryRunner.query(`DROP TABLE "productos"`, undefined);
        await queryRunner.query(`DROP TABLE "donantes"`, undefined);
    }

}
