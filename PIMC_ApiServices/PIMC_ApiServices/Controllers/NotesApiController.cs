using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PIMC.Model;
using PIMC.Services;

namespace PIMC_ApiServices.Controllers
{
    public class NotesApiController : ApiController
    {
        // GET: api/NotesWebApi
        public List<Note> Get()
        {
            NotesManager manager = new NotesManager();
            return manager.GetNoteList();
        }

        // GET: api/NotesWebApi/5
        public Note Get(int id)
        {
            NotesManager manager = new NotesManager();
            return manager.GetNoteByID(id);
        }

        // POST: api/NotesApi
        public void Post([FromBody]string value)
        {
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
