using System;
using System.Collections.Generic;

class Online_Discussion
{
    class Comment { public string User = ""; public string Text = ""; }
    static void Main()
    {
        List<Comment> comments = new List<Comment>();
        // Create comments.
        comments.Add(new Comment { User = "User1", Text = "What is C#?" });
        comments.Add(new Comment { User = "User2", Text = "It is a language." });
        // Update and delete comment.
        comments[1].Text = "C# is used to build apps.";
        comments.RemoveAt(0);
        // Read discussion.
        foreach (Comment c in comments)
            Console.WriteLine(c.User + ": " + c.Text);
    }
}
