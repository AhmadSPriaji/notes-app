import { Note } from "../entities/notes.entity";

export class NotesRepository {
  noteDatasource: Note[];
  constructor() {
    this.noteDatasource = [];
  }

  insertNote(note: Note): string {
    this.noteDatasource.push(note);
    return note.id;
  }
}
