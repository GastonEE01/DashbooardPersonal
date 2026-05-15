using DashboardPersonal.Application.DTOs.Profile;
using DashboardPersonal.Application.UseCases.Profile;
using Microsoft.AspNetCore.Mvc;

namespace DashboardPersonal.API.Controllers
{
    [Route("Api/[Controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ProfileChangerDataUseCase  _profileChangerDataUseCase;

        public ProfileController(ProfileChangerDataUseCase profileChangerDataUseCase)
        {
            _profileChangerDataUseCase = profileChangerDataUseCase;
        }

        /* [HttpGet("Profile")]
         public IActionResult profileChangerData([FromBody] ProfileDataRequestDto profileDataRequestDto)
         {
             _profileChangerDataUseCase.ModifyData(profileDataRequestDto);
         }*/
        [HttpGet("Profile")]
        public IActionResult GetProfile(String email)
        {

            var user = _profileChangerDataUseCase.GetProfile(email);
           return Ok(user);
        }

        [HttpPut("Profile")]
        public IActionResult ModifyProfile(ProfileDataRequestDto dto)
        {
            _profileChangerDataUseCase.ModifyData(dto);
            return Ok();
        }
    }
}
