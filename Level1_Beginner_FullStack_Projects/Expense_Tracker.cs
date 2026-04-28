using System;
using System.Collections.Generic;

class Expense_Tracker
{
    class Expense { public string Item = ""; public double Amount; }
    static void Main()
    {
        List<Expense> expenses = new List<Expense>();
        // Create expense entries.
        expenses.Add(new Expense { Item = "Food", Amount = 250 });
        expenses.Add(new Expense { Item = "Bus", Amount = 40 });
        // Update and delete expense.
        expenses[0].Amount = 300;
        expenses.RemoveAt(1);
        double total = 0;
        foreach (Expense e in expenses) total += e.Amount;
        Console.WriteLine("Total expense: " + total);
    }
}
