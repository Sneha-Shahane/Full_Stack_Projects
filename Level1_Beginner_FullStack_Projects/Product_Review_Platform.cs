using System;
using System.Collections.Generic;

class Product_Review_Platform
{
    class Review { public string Product = ""; public int Rating; }
    static void Main()
    {
        List<Review> reviews = new List<Review>();
        // Create reviews.
        reviews.Add(new Review { Product = "Phone", Rating = 4 });
        reviews.Add(new Review { Product = "Laptop", Rating = 5 });
        // Update and delete review.
        reviews[0].Rating = 5;
        reviews.RemoveAt(1);
        // Read reviews.
        foreach (Review r in reviews)
            Console.WriteLine(r.Product + " rating: " + r.Rating);
    }
}
