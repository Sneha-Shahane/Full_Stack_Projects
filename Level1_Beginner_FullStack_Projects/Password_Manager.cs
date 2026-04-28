using System;
using System.Collections.Generic;

class Password_Manager
{
    class Login { public string Site = ""; public string Password = ""; }
    static void Main()
    {
        List<Login> logins = new List<Login>();
        // Create password records. Real apps should encrypt passwords.
        logins.Add(new Login { Site = "Email", Password = "mail123" });
        logins.Add(new Login { Site = "Shop", Password = "shop123" });
        // Update and delete login.
        logins[0].Password = "newMail123";
        logins.RemoveAt(1);
        // Read saved login.
        foreach (Login l in logins)
            Console.WriteLine(l.Site + " password: " + l.Password);
    }
}
