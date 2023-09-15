import { Body, Controller, Post } from '@nestjs/common';
import { NoteBodyDTO } from './dtos/note-body.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly noteService: NotesService) {}
    @Post()
    postNotes(@Body() body: NoteBodyDTO) {
        const noteId = this.noteService.addNote(body)
        return { noteId };
    }
}
