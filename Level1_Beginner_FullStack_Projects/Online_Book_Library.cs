using System;
using System.Collections.Generic;

class Online_Book_Library
{
    class Book { public string Title = ""; public bool Available; }
    static void Main()
    {
        List<Book> books = new List<Book>();
        // Create books.
        books.Add(new Book { Title = "C# Basics", Available = true });
        books.Add(new Book { Title = "Web Design", Available = true });
        // Update and delete book.
        books[0].Available = false;
        books.RemoveAt(1);
        // Read books.
        foreach (Book b in books)
            Console.WriteLine(b.Title + " Available: " + b.Available);
    }
}
