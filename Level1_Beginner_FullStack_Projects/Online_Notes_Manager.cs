using System;
using System.Collections.Generic;

class Online_Notes_Manager
{
    class Note { public string Title = ""; public string Text = ""; }
    static void Main()
    {
        List<Note> notes = new List<Note>();
        // Create notes.
        notes.Add(new Note { Title = "Shopping", Text = "Buy milk" });
        notes.Add(new Note { Title = "Study", Text = "Practice loops" });
        // Update and delete notes.
        notes[0].Text = "Buy milk and bread";
        notes.RemoveAt(1);
        // Read notes.
        foreach (Note n in notes)
            Console.WriteLine(n.Title + " - " + n.Text);
    }
}
