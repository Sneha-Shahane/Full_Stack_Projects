using System;
using System.Collections.Generic;

class Online_Feedback_Analyzer
{
    class Feedback { public string Text = ""; public int Rating; }
    static void Main()
    {
        List<Feedback> feedbacks = new List<Feedback>();
        // Create feedback ratings.
        feedbacks.Add(new Feedback { Text = "Great", Rating = 5 });
        feedbacks.Add(new Feedback { Text = "Okay", Rating = 3 });
        // Update and delete feedback.
        feedbacks[1].Rating = 4;
        feedbacks.RemoveAt(0);
        // Analyze feedback with a condition.
        foreach (Feedback f in feedbacks)
            Console.WriteLine(f.Text + " Sentiment: " + (f.Rating >= 4 ? "Positive" : "Neutral"));
    }
}
