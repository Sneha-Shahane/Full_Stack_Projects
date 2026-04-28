using System;
using System.Collections.Generic;

class Online_Voting_System
{
    class Candidate { public string Name = ""; public int Votes; }
    static void Main()
    {
        List<Candidate> candidates = new List<Candidate>();
        // Create candidates.
        candidates.Add(new Candidate { Name = "Alice", Votes = 0 });
        candidates.Add(new Candidate { Name = "Bob", Votes = 0 });
        // Update votes and delete candidate.
        candidates[0].Votes++;
        candidates[0].Votes++;
        candidates.RemoveAt(1);
        // Read result.
        foreach (Candidate c in candidates)
            Console.WriteLine(c.Name + " votes: " + c.Votes);
    }
}
