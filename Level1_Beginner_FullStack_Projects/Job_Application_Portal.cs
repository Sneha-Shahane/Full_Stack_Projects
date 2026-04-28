using System;
using System.Collections.Generic;

class Job_Application_Portal
{
    class Application { public string Name = ""; public string Status = ""; }
    static void Main()
    {
        List<Application> applications = new List<Application>();
        // Create applications.
        applications.Add(new Application { Name = "Nita", Status = "Submitted" });
        applications.Add(new Application { Name = "Dev", Status = "Submitted" });
        // Update and delete application.
        applications[0].Status = "Shortlisted";
        applications.RemoveAt(1);
        // Read applications.
        foreach (Application a in applications)
            Console.WriteLine(a.Name + " - " + a.Status);
    }
}
