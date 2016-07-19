using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using PIMC.Model;

namespace PIMC.Database
{
    public class NotesDb
    {
        public List<Note> GetNoteList()
        {
            List<Note> lstNotes = new List<Note>();
            DataTable tblNotes = SqlHelper.ExecuteSQL("EXEC Notes_GetNoteList");
            foreach (DataRow row in tblNotes.Rows)
            {
                lstNotes.Add(GetNoteFromDataRow(row));
            }
            return lstNotes;
        }

        public Note GetNoteByID(int id)
        {
            DataRow rowNote = SqlHelper.ExecuteDataRow(
                String.Format("EXEC Notes_GetNoteByID {0}", id.ToString()));
            return GetNoteFromDataRow(rowNote);
        }

        private Note GetNoteFromDataRow(DataRow row)
        {
            Note note = new Note()
            {
                Id = Convert.ToInt32(row["ID"]),
                Subject = row["Subject"].ToString(),
                Body = row["Body"].ToString(),
                Type = (NoteType)Convert.ToInt32(row["Type"]),
                Date = Convert.ToDateTime(row["DateTime"])
            };
            return note;
        }
    }
}
