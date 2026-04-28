using System;
using System.Collections.Generic;

class Online_FAQ_System
{
    class FAQ { public string Question = ""; public string Answer = ""; }
    static void Main()
    {
        List<FAQ> faqs = new List<FAQ>();
        // Create FAQ items.
        faqs.Add(new FAQ { Question = "How to login?", Answer = "Use email." });
        faqs.Add(new FAQ { Question = "How to pay?", Answer = "Use card." });
        // Update and delete FAQ.
        faqs[0].Answer = "Use your email and password.";
        faqs.RemoveAt(1);
        // Read FAQs.
        foreach (FAQ f in faqs)
            Console.WriteLine(f.Question + " Answer: " + f.Answer);
    }
}
