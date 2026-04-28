using System;
using System.Collections.Generic;

class Online_Quiz_Application
{
    class Question { public string Text = ""; public string Answer = ""; }
    static void Main()
    {
        List<Question> quiz = new List<Question>();
        quiz.Add(new Question { Text = "Capital of India?", Answer = "Delhi" });
        quiz.Add(new Question { Text = "2 + 2?", Answer = "4" });
        int score = 0;
        // Ask each question and check answers.
        foreach (Question q in quiz)
        {
            Console.Write(q.Text + " ");
            if ((Console.ReadLine() ?? "").Equals(q.Answer, StringComparison.OrdinalIgnoreCase)) score++;
        }
        quiz[0].Text = "Capital city of India?"; // Update.
        quiz.RemoveAt(1); // Delete.
        Console.WriteLine("Score: " + score);
    }
}
