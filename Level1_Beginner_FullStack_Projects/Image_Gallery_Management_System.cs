using System;
using System.Collections.Generic;

class Image_Gallery_Management_System
{
    class ImageItem { public string Title = ""; public string FileName = ""; }
    static void Main()
    {
        List<ImageItem> images = new List<ImageItem>();
        // Create image records.
        images.Add(new ImageItem { Title = "Beach", FileName = "beach.jpg" });
        images.Add(new ImageItem { Title = "Mountain", FileName = "mountain.jpg" });
        // Update and delete image.
        images[0].Title = "Sunny Beach";
        images.RemoveAt(1);
        // Read image records.
        foreach (ImageItem i in images)
            Console.WriteLine(i.Title + " - " + i.FileName);
    }
}
