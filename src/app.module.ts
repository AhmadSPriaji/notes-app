import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [NotesModule, DatasourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
