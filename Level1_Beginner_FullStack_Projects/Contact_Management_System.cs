using System;
using System.Collections.Generic;

class Contact_Management_System
{
    class Contact { public string Name = ""; public string Phone = ""; }
    static void Main()
    {
        List<Contact> contacts = new List<Contact>();
        // Create contacts.
        contacts.Add(new Contact { Name = "Asha", Phone = "11111" });
        contacts.Add(new Contact { Name = "Rahul", Phone = "22222" });
        // Update and delete.
        contacts[0].Phone = "99999";
        contacts.RemoveAt(1);
        // Read contacts.
        foreach (Contact c in contacts)
            Console.WriteLine(c.Name + " - " + c.Phone);
    }
}
