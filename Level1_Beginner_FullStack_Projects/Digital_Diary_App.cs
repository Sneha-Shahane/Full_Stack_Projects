using System;
using System.Collections.Generic;

class Digital_Diary_App
{
    class Entry { public string Date = ""; public string Text = ""; }
    static void Main()
    {
        List<Entry> diary = new List<Entry>();
        // Create diary entries.
        diary.Add(new Entry { Date = "2026-04-28", Text = "Started a project." });
        diary.Add(new Entry { Date = "2026-04-29", Text = "Practiced C#." });
        // Update and delete entry.
        diary[0].Text = "Started a C# project.";
        diary.RemoveAt(1);
        // Read diary.
        foreach (Entry e in diary)
            Console.WriteLine(e.Date + ": " + e.Text);
    }
}
