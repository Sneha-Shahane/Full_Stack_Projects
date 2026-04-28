using System;
using System.Collections.Generic;

class Student_Result_Management_System
{
    class Result { public string Student = ""; public int Marks; }
    static void Main()
    {
        List<Result> results = new List<Result>();
        // Create result records.
        results.Add(new Result { Student = "Neha", Marks = 80 });
        results.Add(new Result { Student = "Sam", Marks = 65 });
        // Update and delete result.
        results[1].Marks = 70;
        results.RemoveAt(0);
        // Read result with grade condition.
        foreach (Result r in results)
            Console.WriteLine(r.Student + " Grade: " + (r.Marks >= 75 ? "A" : "B"));
    }
}
