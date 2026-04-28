using System;
using System.Collections.Generic;

class Online_Complaint_Registration_System
{
    class Complaint { public string Title = ""; public string Status = ""; }
    static void Main()
    {
        List<Complaint> complaints = new List<Complaint>();
        // Create complaints.
        complaints.Add(new Complaint { Title = "Late delivery", Status = "Open" });
        complaints.Add(new Complaint { Title = "Wrong item", Status = "Open" });
        // Update and delete complaint.
        complaints[0].Status = "Resolved";
        complaints.RemoveAt(1);
        // Read complaints.
        foreach (Complaint c in complaints)
            Console.WriteLine(c.Title + " - " + c.Status);
    }
}
