using System;
using System.Collections.Generic;

class Online_Address_Book
{
    class Address { public string Name = ""; public string City = ""; }
    static void Main()
    {
        List<Address> addresses = new List<Address>();
        // Create address records.
        addresses.Add(new Address { Name = "Geeta", City = "Pune" });
        addresses.Add(new Address { Name = "Sahil", City = "Surat" });
        // Update and delete address.
        addresses[1].City = "Ahmedabad";
        addresses.RemoveAt(0);
        // Read addresses.
        foreach (Address a in addresses)
            Console.WriteLine(a.Name + " lives in " + a.City);
    }
}
