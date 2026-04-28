using System;
using System.Collections.Generic;

class Feedback_Collection_System
{
    class Feedback { public string Name = ""; public string Message = ""; }
    static void Main()
    {
        List<Feedback> feedbacks = new List<Feedback>();
        // Create feedback.
        feedbacks.Add(new Feedback { Name = "User1", Message = "Good service" });
        feedbacks.Add(new Feedback { Name = "User2", Message = "Slow support" });
        // Update and delete feedback.
        feedbacks[1].Message = "Support improved";
        feedbacks.RemoveAt(0);
        // Read feedback.
        foreach (Feedback f in feedbacks)
            Console.WriteLine(f.Name + ": " + f.Message);
    }
}
