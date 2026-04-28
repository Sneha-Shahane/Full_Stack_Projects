using System;
using System.Collections.Generic;

class Resume_Builder_Website
{
    class Skill { public string Name = ""; public int Years; }
    static void Main()
    {
        List<Skill> skills = new List<Skill>();
        // Create resume skills.
        skills.Add(new Skill { Name = "C#", Years = 1 });
        skills.Add(new Skill { Name = "HTML", Years = 2 });
        // Update and delete skill.
        skills[0].Years = 2;
        skills.RemoveAt(1);
        // Read resume skills.
        foreach (Skill s in skills)
            Console.WriteLine(s.Name + " - " + s.Years + " years");
    }
}
