using System;
using System.Collections.Generic;

class Student_Portfolio_Website
{
    class Project { public string Title = ""; public string Skill = ""; }
    static void Main()
    {
        List<Project> projects = new List<Project>();
        // Create portfolio projects.
        projects.Add(new Project { Title = "Calculator", Skill = "C#" });
        projects.Add(new Project { Title = "Blog Page", Skill = "HTML" });
        // Update and delete records.
        projects[0].Skill = "C# Console Apps";
        projects.RemoveAt(1);
        // Read records.
        foreach (Project p in projects)
            Console.WriteLine(p.Title + " shows " + p.Skill);
    }
}
