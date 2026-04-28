using System;
using System.Collections.Generic;

class Online_PDF_Merger_Tool
{
    class PdfFile { public string Name = ""; public int Pages; }
    static void Main()
    {
        List<PdfFile> pdfs = new List<PdfFile>();
        // Create PDF file records.
        pdfs.Add(new PdfFile { Name = "part1.pdf", Pages = 3 });
        pdfs.Add(new PdfFile { Name = "part2.pdf", Pages = 5 });
        // Update page count.
        pdfs[0].Pages = 4;
        int totalPages = 0;
        foreach (PdfFile p in pdfs) totalPages += p.Pages;
        pdfs.RemoveAt(1); // Delete after merge simulation.
        Console.WriteLine("Merged PDF pages: " + totalPages);
    }
}
