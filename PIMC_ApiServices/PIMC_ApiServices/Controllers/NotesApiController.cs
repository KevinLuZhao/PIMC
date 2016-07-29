using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Mvc;
using PIMC.Model;
using PIMC.Services;
using System.Web.Script.Services;

namespace PIMC_ApiServices.Controllers
{
    public class NotesApiController : ApiController
    {
        NotesManager manager = new NotesManager();
        // GET: api/NotesApi
        public List<Note> Get()
        {
            return manager.GetNoteList();
        }

        // GET: api/NotesWebApi/5
        public Note Get(int id)
        {
            return manager.GetNoteByID(id);
        }

        // POST: api/NotesApi
        [HttpPost]
        public void Post([FromBody]Note note)
        {
            if (note.Id == 0)
                manager.InsertNote(note);
            else
                manager.UpdateNote(note);
        }

        // PUT: api/NotesApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/NotesApi/5
        public void Delete(int id)
        {
        }
    }
}
