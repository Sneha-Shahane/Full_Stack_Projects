using System;
using System.Collections.Generic;

class Digital_Clock_Alarm_System
{
    class Alarm { public string Time = ""; public bool Enabled; }
    static void Main()
    {
        List<Alarm> alarms = new List<Alarm>();
        // Create alarms.
        alarms.Add(new Alarm { Time = "06:00", Enabled = true });
        alarms.Add(new Alarm { Time = "07:30", Enabled = true });
        // Update and delete alarm.
        alarms[1].Time = "07:45";
        alarms.RemoveAt(0);
        // Read alarms.
        foreach (Alarm a in alarms)
            Console.WriteLine(a.Time + " Enabled: " + a.Enabled);
    }
}
