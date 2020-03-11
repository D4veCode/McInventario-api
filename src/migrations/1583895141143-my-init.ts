import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1583895141143 implements MigrationInterface {
    name = 'myInit1583895141143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "correo" character varying(100) NOT NULL, "clave" character varying(200) NOT NULL, "createdAt" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_37e80954fd8499125ff14c586dd" UNIQUE ("correo"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "empleado" ("id" SERIAL NOT NULL, "nombre" character varying(30) NOT NULL, "apellido" character varying(30) NOT NULL, "CI" character varying(8) NOT NULL, "cargo" character varying(30), "createdAt" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "Fk_user" integer, CONSTRAINT "REL_939bfff04eee76405c47148962" UNIQUE ("Fk_user"), CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_939bfff04eee76405c47148962b" FOREIGN KEY ("Fk_user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_939bfff04eee76405c47148962b"`, undefined);
        await queryRunner.query(`DROP TABLE "empleado"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
