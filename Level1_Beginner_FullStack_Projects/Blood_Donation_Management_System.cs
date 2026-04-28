using System;
using System.Collections.Generic;

class Blood_Donation_Management_System
{
    class Donor { public string Name = ""; public string BloodGroup = ""; }
    static void Main()
    {
        List<Donor> donors = new List<Donor>();
        // Create donors.
        donors.Add(new Donor { Name = "Isha", BloodGroup = "A+" });
        donors.Add(new Donor { Name = "Mohan", BloodGroup = "O+" });
        // Update and delete donor.
        donors[0].BloodGroup = "A-";
        donors.RemoveAt(1);
        // Read donors.
        foreach (Donor d in donors)
            Console.WriteLine(d.Name + " - " + d.BloodGroup);
    }
}
