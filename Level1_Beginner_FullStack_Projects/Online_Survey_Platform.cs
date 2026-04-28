using System;
using System.Collections.Generic;

class Online_Survey_Platform
{
    class Response { public string Name = ""; public string Answer = ""; }
    static void Main()
    {
        List<Response> responses = new List<Response>();
        // Create survey responses.
        responses.Add(new Response { Name = "User1", Answer = "Yes" });
        responses.Add(new Response { Name = "User2", Answer = "No" });
        // Update and delete response.
        responses[1].Answer = "Yes";
        responses.RemoveAt(0);
        // Read responses.
        foreach (Response r in responses)
            Console.WriteLine(r.Name + " answered " + r.Answer);
    }
}
