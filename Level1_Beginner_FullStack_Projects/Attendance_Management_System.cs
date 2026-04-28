using System;
using System.Collections.Generic;

class Attendance_Management_System
{
    class Attendance { public string Student = ""; public bool Present; }
    static void Main()
    {
        List<Attendance> records = new List<Attendance>();
        // Create attendance records.
        records.Add(new Attendance { Student = "Sara", Present = true });
        records.Add(new Attendance { Student = "Imran", Present = false });
        // Update and delete record.
        records[1].Present = true;
        records.RemoveAt(0);
        // Read attendance.
        foreach (Attendance r in records)
            Console.WriteLine(r.Student + " Present: " + r.Present);
    }
}
