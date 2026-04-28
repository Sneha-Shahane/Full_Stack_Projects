using System;
using System.Collections.Generic;

class Static_Blog_with_CMS_Integration
{
    class CmsPost { public string Title = ""; public bool Published; }
    static void Main()
    {
        List<CmsPost> posts = new List<CmsPost>();
        // Create CMS posts.
        posts.Add(new CmsPost { Title = "Welcome", Published = true });
        posts.Add(new CmsPost { Title = "Draft News", Published = false });
        // Update and delete post.
        posts[1].Published = true;
        posts.RemoveAt(0);
        // Read published posts.
        foreach (CmsPost p in posts)
            if (p.Published) Console.WriteLine("Published: " + p.Title);
    }
}
