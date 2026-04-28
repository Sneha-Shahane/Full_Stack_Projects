using System;
using System.Collections.Generic;

class Simple_Chat_Application
{
    class Message { public string User = ""; public string Text = ""; }
    static void Main()
    {
        List<Message> messages = new List<Message>();
        // Create chat messages.
        messages.Add(new Message { User = "Asha", Text = "Hello" });
        messages.Add(new Message { User = "Ravi", Text = "Hi" });
        // Update and delete message.
        messages[1].Text = "Hi there";
        messages.RemoveAt(0);
        // Read chat.
        foreach (Message m in messages)
            Console.WriteLine(m.User + ": " + m.Text);
    }
}
