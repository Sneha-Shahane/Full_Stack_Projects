using System;
using System.Collections.Generic;

class Virtual_Notice_Board
{
    class Notice { public string Title = ""; public string Date = ""; }
    static void Main()
    {
        List<Notice> notices = new List<Notice>();
        // Create notices.
        notices.Add(new Notice { Title = "Exam Date", Date = "2026-05-01" });
        notices.Add(new Notice { Title = "Holiday", Date = "2026-05-10" });
        // Update and delete notice.
        notices[0].Date = "2026-05-02";
        notices.RemoveAt(1);
        // Read notices.
        foreach (Notice n in notices)
            Console.WriteLine(n.Title + " on " + n.Date);
    }
}
