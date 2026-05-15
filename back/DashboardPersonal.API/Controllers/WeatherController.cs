using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DashboardPersonal.API.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet]
        public async Task<IActionResult> GetWeather()
        {
            var weather = await _weatherService.GetWeatherAsync();

            return Ok(weather);
        }
    }
}
