using System;
using System.Collections.Generic;

class URL_Shortener
{
    class Link { public string LongUrl = ""; public string ShortCode = ""; }
    static void Main()
    {
        List<Link> links = new List<Link>();
        // Create short links.
        links.Add(new Link { LongUrl = "https://example.com/products", ShortCode = "ex1" });
        links.Add(new Link { LongUrl = "https://example.com/blog", ShortCode = "ex2" });
        // Update and delete links.
        links[1].ShortCode = "blog";
        links.RemoveAt(0);
        // Read links.
        foreach (Link l in links)
            Console.WriteLine(l.ShortCode + " -> " + l.LongUrl);
    }
}
