import {MigrationInterface, QueryRunner} from "typeorm";

export class UserEmployeeRefactor1584028412837 implements MigrationInterface {
    name = 'UserEmployeeRefactor1584028412837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "correo" character varying(100) NOT NULL, "clave" character varying(200) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_d3cf8c651c0e94ea522b61ca3ac" UNIQUE ("correo"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "empleados" ("id" SERIAL NOT NULL, "nombre" character varying(30) NOT NULL, "apellido" character varying(30) NOT NULL, "CI" character varying(8) NOT NULL, "cargo" character varying(30), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "Fk_user" integer, CONSTRAINT "REL_cd7c8423804fc6ab45d8dc2f50" UNIQUE ("Fk_user"), CONSTRAINT "PK_73a63a6fcb4266219be3eb0ce8a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "empleados" ADD CONSTRAINT "FK_cd7c8423804fc6ab45d8dc2f50b" FOREIGN KEY ("Fk_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleados" DROP CONSTRAINT "FK_cd7c8423804fc6ab45d8dc2f50b"`, undefined);
        await queryRunner.query(`DROP TABLE "empleados"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
