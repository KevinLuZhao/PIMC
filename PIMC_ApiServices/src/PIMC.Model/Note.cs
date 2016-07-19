using System;
using System.Xml.Serialization;

namespace PIMC.Model
{
    public class Note
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        //public NoteType Type { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }

        private NoteType _noteType;

        // ... more members


        [XmlIgnore]
        public NoteType Type
        {
            get { return _noteType; }
            set { _noteType = value; }
        }

        [XmlElement("Type")]
        public int TypeInt
        {
            get { return (int)_noteType; }
            //set { _noteType = (NoteType)value; }
        }
    }

    public enum NoteType
    {
        Account,
        GeneralMessage
    }
}
