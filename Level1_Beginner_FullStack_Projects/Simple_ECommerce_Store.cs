using System;
using System.Collections.Generic;

class Simple_ECommerce_Store
{
    class Product { public string Name = ""; public double Price; }
    static void Main()
    {
        List<Product> cart = new List<Product>();
        // Create cart items.
        cart.Add(new Product { Name = "Keyboard", Price = 1200 });
        cart.Add(new Product { Name = "Mouse", Price = 500 });
        // Update price and delete item.
        cart[0].Price = 1000;
        cart.RemoveAt(1);
        double total = 0;
        foreach (Product p in cart) total += p.Price;
        Console.WriteLine("Cart total: " + total);
    }
}
