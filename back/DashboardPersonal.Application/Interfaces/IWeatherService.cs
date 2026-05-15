using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.Interfaces
{
    public interface IWeatherService
    {
        Task<string> GetWeatherAsync();

    }
}
