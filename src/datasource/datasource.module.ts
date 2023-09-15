import { Module } from '@nestjs/common';
import { NotesRepository } from './repositories/notes.repository';

@Module({
  providers: [NotesRepository],
  exports: [NotesRepository],
})
export class DatasourceModule {}
