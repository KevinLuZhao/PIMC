using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    }
}
