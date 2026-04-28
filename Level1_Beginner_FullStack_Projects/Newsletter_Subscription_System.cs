using System;
using System.Collections.Generic;

class Newsletter_Subscription_System
{
    class Subscriber { public string Email = ""; public bool Active; }
    static void Main()
    {
        List<Subscriber> subscribers = new List<Subscriber>();
        // Create subscribers.
        subscribers.Add(new Subscriber { Email = "a@test.com", Active = true });
        subscribers.Add(new Subscriber { Email = "b@test.com", Active = true });
        // Update and delete subscriber.
        subscribers[1].Active = false;
        subscribers.RemoveAt(1);
        // Read subscribers.
        foreach (Subscriber s in subscribers)
            Console.WriteLine(s.Email + " Active: " + s.Active);
    }
}
