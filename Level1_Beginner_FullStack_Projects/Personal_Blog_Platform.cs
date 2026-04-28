using System;
using System.Collections.Generic;

class Personal_Blog_Platform
{
    class Post { public string Title = ""; public string Body = ""; }
    static void Main()
    {
        List<Post> posts = new List<Post>();
        // Create blog posts.
        posts.Add(new Post { Title = "First Post", Body = "Learning C#." });
        posts.Add(new Post { Title = "Daily Update", Body = "Built an app." });
        // Update and delete posts.
        posts[1].Title = "Coding Update";
        posts.RemoveAt(0);
        // Read remaining posts.
        foreach (Post p in posts)
            Console.WriteLine(p.Title + ": " + p.Body);
    }
}
