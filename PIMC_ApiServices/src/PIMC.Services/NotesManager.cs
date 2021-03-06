﻿using System;
using System.Collections.Generic;
using PIMC.Database;
using PIMC.Model;

namespace PIMC.Services
{
    public class NotesManager
    {
        NotesDb db = new NotesDb();
        public List<Note> GetNoteList()
        {
            return db.GetNoteList();
        }

        public Note GetNoteByID(int id)
        {
            return db.GetNoteByID(id);
        }

        public void InsertNote(Note note)
        {
            note.Date = DateTime.Now;
            db.InsertNote(note);
        }

        public void UpdateNote(Note note)
        {
            note.Date = DateTime.Now;
            db.UpdateNote(note);
        }
    }
}
