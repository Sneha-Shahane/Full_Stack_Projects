using System;
using System.Collections.Generic;

class Online_Polling_App
{
    class Option { public string Text = ""; public int Votes; }
    static void Main()
    {
        List<Option> options = new List<Option>();
        // Create poll options.
        options.Add(new Option { Text = "Tea", Votes = 0 });
        options.Add(new Option { Text = "Coffee", Votes = 0 });
        // Update votes and delete option.
        options[1].Votes++;
        options[1].Votes++;
        options.RemoveAt(0);
        // Read result.
        foreach (Option o in options)
            Console.WriteLine(o.Text + ": " + o.Votes);
    }
}
