using System;
using System.Collections.Generic;

class Course_Enrollment_Website
{
    class Enrollment { public string Student = ""; public string Course = ""; }
    static void Main()
    {
        List<Enrollment> enrollments = new List<Enrollment>();
        // Create enrollments.
        enrollments.Add(new Enrollment { Student = "Riya", Course = "C#" });
        enrollments.Add(new Enrollment { Student = "Karan", Course = "HTML" });
        // Update and delete enrollment.
        enrollments[1].Course = "JavaScript";
        enrollments.RemoveAt(0);
        // Read enrollments.
        foreach (Enrollment e in enrollments)
            Console.WriteLine(e.Student + " enrolled in " + e.Course);
    }
}
