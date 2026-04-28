using System;
using System.Collections.Generic;

class Online_Voting_Poll_Dashboard
{
    class Poll { public string Title = ""; public int Votes; }
    static void Main()
    {
        List<Poll> polls = new List<Poll>();
        // Create poll dashboard data.
        polls.Add(new Poll { Title = "Best Language C#", Votes = 10 });
        polls.Add(new Poll { Title = "Best Language Java", Votes = 8 });
        // Update and delete poll.
        polls[0].Votes += 2;
        polls.RemoveAt(1);
        // Read dashboard data.
        foreach (Poll p in polls)
            Console.WriteLine(p.Title + " votes: " + p.Votes);
    }
}
