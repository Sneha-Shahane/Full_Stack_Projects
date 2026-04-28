using System;
using System.Collections.Generic;

class Restaurant_Menu_Website
{
    class MenuItem { public string Name = ""; public double Price; }
    static void Main()
    {
        List<MenuItem> menu = new List<MenuItem>();
        // Create menu items.
        menu.Add(new MenuItem { Name = "Pizza", Price = 250 });
        menu.Add(new MenuItem { Name = "Pasta", Price = 180 });
        // Update and delete menu item.
        menu[1].Price = 200;
        menu.RemoveAt(0);
        // Read menu.
        foreach (MenuItem item in menu)
            Console.WriteLine(item.Name + " Rs." + item.Price);
    }
}
