using System;
using System.Collections.Generic;

class Static_Company_Website_Admin_Panel
{
    class Page { public string Title = ""; public bool Published; }
    static void Main()
    {
        List<Page> pages = new List<Page>();
        // Create website pages.
        pages.Add(new Page { Title = "Home", Published = true });
        pages.Add(new Page { Title = "Careers", Published = false });
        // Update and delete page.
        pages[1].Published = true;
        pages.RemoveAt(0);
        // Read pages.
        foreach (Page p in pages)
            Console.WriteLine(p.Title + " Published: " + p.Published);
    }
}
