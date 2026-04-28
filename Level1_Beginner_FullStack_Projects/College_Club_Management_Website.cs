using System;
using System.Collections.Generic;

class College_Club_Management_Website
{
    class Member { public string Name = ""; public string Role = ""; }
    static void Main()
    {
        List<Member> members = new List<Member>();
        // Create club members.
        members.Add(new Member { Name = "Tina", Role = "Member" });
        members.Add(new Member { Name = "Raj", Role = "Volunteer" });
        // Update and delete member.
        members[0].Role = "President";
        members.RemoveAt(1);
        // Read members.
        foreach (Member m in members)
            Console.WriteLine(m.Name + " - " + m.Role);
    }
}
