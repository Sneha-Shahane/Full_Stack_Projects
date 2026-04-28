using System;
using System.Collections.Generic;

class Online_Appointment_Booking
{
    class Appointment { public string Name = ""; public string Time = ""; }
    static void Main()
    {
        List<Appointment> appointments = new List<Appointment>();
        // Create appointments.
        appointments.Add(new Appointment { Name = "Anu", Time = "10:00" });
        appointments.Add(new Appointment { Name = "Vikram", Time = "11:00" });
        // Update and delete appointment.
        appointments[0].Time = "10:30";
        appointments.RemoveAt(1);
        // Read appointments.
        foreach (Appointment a in appointments)
            Console.WriteLine(a.Name + " at " + a.Time);
    }
}
