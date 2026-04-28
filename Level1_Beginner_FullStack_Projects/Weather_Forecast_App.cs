using System;
using System.Collections.Generic;

class Weather_Forecast_App
{
    class Forecast { public string City = ""; public int Temperature; }
    static void Main()
    {
        List<Forecast> forecasts = new List<Forecast>();
        // Create weather records.
        forecasts.Add(new Forecast { City = "Delhi", Temperature = 32 });
        forecasts.Add(new Forecast { City = "Mumbai", Temperature = 29 });
        // Update and delete forecast.
        forecasts[0].Temperature = 34;
        forecasts.RemoveAt(1);
        // Read forecast.
        foreach (Forecast f in forecasts)
            Console.WriteLine(f.City + ": " + f.Temperature + " C");
    }
}
