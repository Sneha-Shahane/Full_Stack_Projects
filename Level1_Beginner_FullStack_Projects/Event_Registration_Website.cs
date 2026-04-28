using System;
using System.Collections.Generic;

class Event_Registration_Website
{
    class Registration { public string Name = ""; public string EventName = ""; }
    static void Main()
    {
        List<Registration> registrations = new List<Registration>();
        // Create registrations.
        registrations.Add(new Registration { Name = "Meena", EventName = "Tech Talk" });
        registrations.Add(new Registration { Name = "Arun", EventName = "Workshop" });
        // Update and delete registrations.
        registrations[1].EventName = "Tech Talk";
        registrations.RemoveAt(0);
        // Read registrations.
        foreach (Registration r in registrations)
            Console.WriteLine(r.Name + " registered for " + r.EventName);
    }
}
