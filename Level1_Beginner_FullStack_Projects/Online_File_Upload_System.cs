using System;
using System.Collections.Generic;

class Online_File_Upload_System
{
    class UploadedFile { public string Name = ""; public int SizeKb; }
    static void Main()
    {
        List<UploadedFile> files = new List<UploadedFile>();
        // Create uploaded file records.
        files.Add(new UploadedFile { Name = "resume.pdf", SizeKb = 250 });
        files.Add(new UploadedFile { Name = "photo.jpg", SizeKb = 500 });
        // Update and delete file.
        files[0].SizeKb = 260;
        files.RemoveAt(1);
        // Read files.
        foreach (UploadedFile f in files)
            Console.WriteLine(f.Name + " - " + f.SizeKb + " KB");
    }
}
