import { Injectable } from '@nestjs/common';
import { NoteBodyDTO } from './dtos/note-body.dto';
import { Note } from 'src/datasource/entities/notes.entity';
import { randomUUID } from 'crypto';
import { NotesRepository } from 'src/datasource/repositories/notes.repository';

@Injectable()
export class NotesService {
    constructor(private readonly notesRepository: NotesRepository) {}

    addNote(payload: NoteBodyDTO) {
        const newNote = new Note();
        newNote.id = randomUUID();
        newNote.title = payload.title ?? 'Untitled';
        newNote.body = payload.body ?? '';
        newNote.tags = payload.tags ?? [];

        return this.notesRepository.insertNote(newNote);
    }
}
