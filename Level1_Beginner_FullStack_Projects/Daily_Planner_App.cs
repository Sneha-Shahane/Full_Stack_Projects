using System;
using System.Collections.Generic;

class Daily_Planner_App
{
    class Plan { public string Time = ""; public string Activity = ""; }
    static void Main()
    {
        List<Plan> plans = new List<Plan>();
        // Create daily plans.
        plans.Add(new Plan { Time = "09:00", Activity = "Study" });
        plans.Add(new Plan { Time = "18:00", Activity = "Exercise" });
        // Update and delete plan.
        plans[0].Activity = "Study C#";
        plans.RemoveAt(1);
        // Read plans.
        foreach (Plan p in plans)
            Console.WriteLine(p.Time + " - " + p.Activity);
    }
}
