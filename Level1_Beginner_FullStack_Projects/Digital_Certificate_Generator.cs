using System;
using System.Collections.Generic;

class Digital_Certificate_Generator
{
    class Certificate { public string Name = ""; public string Course = ""; }
    static void Main()
    {
        List<Certificate> certificates = new List<Certificate>();
        // Create certificates.
        certificates.Add(new Certificate { Name = "Pooja", Course = "C# Basics" });
        certificates.Add(new Certificate { Name = "Amit", Course = "HTML" });
        // Update and delete certificate.
        certificates[1].Course = "Web Basics";
        certificates.RemoveAt(0);
        // Read certificates.
        foreach (Certificate c in certificates)
            Console.WriteLine(c.Name + " completed " + c.Course);
    }
}
