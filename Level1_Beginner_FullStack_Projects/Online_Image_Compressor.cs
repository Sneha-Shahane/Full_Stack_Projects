using System;
using System.Collections.Generic;

class Online_Image_Compressor
{
    class ImageFile { public string Name = ""; public int SizeKb; }
    static void Main()
    {
        List<ImageFile> images = new List<ImageFile>();
        // Create image file records.
        images.Add(new ImageFile { Name = "banner.png", SizeKb = 900 });
        images.Add(new ImageFile { Name = "logo.png", SizeKb = 300 });
        // Update size after compression and delete extra file.
        images[0].SizeKb = images[0].SizeKb / 2;
        images.RemoveAt(1);
        // Read compressed image info.
        foreach (ImageFile i in images)
            Console.WriteLine(i.Name + " compressed to " + i.SizeKb + " KB");
    }
}
