import {MigrationInterface, QueryRunner} from "typeorm";

export class tablesGenertion1584467997971 implements MigrationInterface {
    name = 'tablesGenertion1584467997971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "correo" character varying(100) NOT NULL, "clave" character varying(200) NOT NULL, "createdAt" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), CONSTRAINT "UQ_d3cf8c651c0e94ea522b61ca3ac" UNIQUE ("correo"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "donantes" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "tip_id" character varying(1) NOT NULL, "num_id" character varying(12) NOT NULL, "direccion" character varying(80), "createdAt" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), CONSTRAINT "PK_d94a9cba58603c226b8323039e7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "empleados" ("id" SERIAL NOT NULL, "nombre" character varying(30) NOT NULL, "apellido" character varying(30) NOT NULL, "ci" character varying(8) NOT NULL, "cargo" character varying(30), "createdAt" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), "fk_user" integer NOT NULL, CONSTRAINT "REL_6a397a3e03453059b36fd53263" UNIQUE ("fk_user"), CONSTRAINT "PK_73a63a6fcb4266219be3eb0ce8a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "marca" character varying(60) NOT NULL, "gr_paq" integer NOT NULL, "tipo" character varying(30), "createdAt" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "inventarios" ("id" SERIAL NOT NULL, "cant" integer NOT NULL, "fecha_reg" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas') NOT NULL, "fecha_ven" date, "valor_usd" NUMERIC(3, 2), "contratador" character varying(60), "fk_user" integer NOT NULL, "fk_don" integer, "fk_prod" integer NOT NULL, CONSTRAINT "PK_95497c8cd6a8604110c7a7cbf34" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "recetas" ("id" SERIAL NOT NULL, "nombre" character varying(60) NOT NULL, "gr_persona" integer NOT NULL, "createdAt" TIMESTAMP default (now() AT TIME ZONE 'America/Caracas'), CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "empleados" ADD CONSTRAINT "FK_6a397a3e03453059b36fd53263c" FOREIGN KEY ("fk_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_86b383484e4ade28d53652ea7b3" FOREIGN KEY ("fk_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_e84109871971c72b8d935e971fc" FOREIGN KEY ("fk_don") REFERENCES "donantes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" ADD CONSTRAINT "FK_3ccf6f0b87fbdd31a41d27c8726" FOREIGN KEY ("fk_prod") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_3ccf6f0b87fbdd31a41d27c8726"`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_e84109871971c72b8d935e971fc"`, undefined);
        await queryRunner.query(`ALTER TABLE "inventarios" DROP CONSTRAINT "FK_86b383484e4ade28d53652ea7b3"`, undefined);
        await queryRunner.query(`ALTER TABLE "empleados" DROP CONSTRAINT "FK_6a397a3e03453059b36fd53263c"`, undefined);
        await queryRunner.query(`DROP TABLE "recipes"`, undefined);
        await queryRunner.query(`DROP TABLE "inventarios"`, undefined);
        await queryRunner.query(`DROP TABLE "productos"`, undefined);
        await queryRunner.query(`DROP TABLE "empleados"`, undefined);
        await queryRunner.query(`DROP TABLE "donantes"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
