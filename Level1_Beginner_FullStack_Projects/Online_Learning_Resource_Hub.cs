using System;
using System.Collections.Generic;

class Online_Learning_Resource_Hub
{
    class Resource { public string Title = ""; public string Type = ""; }
    static void Main()
    {
        List<Resource> resources = new List<Resource>();
        // Create learning resources.
        resources.Add(new Resource { Title = "C# Video", Type = "Video" });
        resources.Add(new Resource { Title = "Loops PDF", Type = "PDF" });
        // Update and delete resource.
        resources[1].Type = "Document";
        resources.RemoveAt(0);
        // Read resources.
        foreach (Resource r in resources)
            Console.WriteLine(r.Title + " - " + r.Type);
    }
}
