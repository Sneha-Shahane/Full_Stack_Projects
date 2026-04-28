using System;
using System.Collections.Generic;

class Personal_Finance_Tracker
{
    class Transaction { public string Type = ""; public double Amount; }
    static void Main()
    {
        List<Transaction> transactions = new List<Transaction>();
        // Create income and expense.
        transactions.Add(new Transaction { Type = "Income", Amount = 1000 });
        transactions.Add(new Transaction { Type = "Expense", Amount = 300 });
        // Update and delete transaction.
        transactions[1].Amount = 250;
        transactions.RemoveAt(0);
        // Read transactions.
        foreach (Transaction t in transactions)
            Console.WriteLine(t.Type + ": " + t.Amount);
    }
}
