using System;
using System.Collections.Generic;

class To_Do_App_with_Login
{
    class TaskItem { public string Name = ""; public bool Done; }
    static void Main()
    {
        Console.Write("Username: ");
        string user = Console.ReadLine() ?? "";
        Console.Write("Password: ");
        string pass = Console.ReadLine() ?? "";
        // Simple login condition.
        if (user != "admin" || pass != "1234") { Console.WriteLine("Login failed"); return; }
        List<TaskItem> tasks = new List<TaskItem>();
        tasks.Add(new TaskItem { Name = "Learn C#", Done = false });
        tasks.Add(new TaskItem { Name = "Build app", Done = false });
        tasks[0].Done = true; // Update.
        tasks.RemoveAt(1); // Delete.
        foreach (TaskItem t in tasks) Console.WriteLine(t.Name + " Done: " + t.Done);
    }
}
