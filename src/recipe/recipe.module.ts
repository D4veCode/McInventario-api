import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Recipe])],
    providers: [RecipeService],
    exports: [RecipeService]
})
export class RecipeModule {}