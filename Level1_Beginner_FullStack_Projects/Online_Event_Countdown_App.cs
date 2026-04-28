using System;
using System.Collections.Generic;

class Online_Event_Countdown_App
{
    class EventItem { public string Name = ""; public int DaysLeft; }
    static void Main()
    {
        List<EventItem> events = new List<EventItem>();
        // Create event countdowns.
        events.Add(new EventItem { Name = "Workshop", DaysLeft = 5 });
        events.Add(new EventItem { Name = "Hackathon", DaysLeft = 10 });
        // Update and delete event.
        events[0].DaysLeft = 4;
        events.RemoveAt(1);
        // Read countdowns.
        foreach (EventItem e in events)
            Console.WriteLine(e.Name + " starts in " + e.DaysLeft + " days");
    }
}
