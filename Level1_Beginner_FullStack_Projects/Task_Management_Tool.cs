using System;
using System.Collections.Generic;

class Task_Management_Tool
{
    class WorkTask { public string Title = ""; public string Status = ""; }
    static void Main()
    {
        List<WorkTask> tasks = new List<WorkTask>();
        // Create tasks.
        tasks.Add(new WorkTask { Title = "Design page", Status = "Open" });
        tasks.Add(new WorkTask { Title = "Test login", Status = "Open" });
        // Update and delete task.
        tasks[0].Status = "Done";
        tasks.RemoveAt(0);
        // Read tasks.
        foreach (WorkTask t in tasks)
            Console.WriteLine(t.Title + " - " + t.Status);
    }
}
