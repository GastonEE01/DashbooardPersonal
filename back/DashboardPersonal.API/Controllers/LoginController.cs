
using DashboardPersonal.Application.DTOs;
using DashboardPersonal.Application.DTOs.Users;
using DashboardPersonal.Application.UseCases.Users;
using Microsoft.AspNetCore.Mvc;

namespace DashboardPersonal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly CreateUserUseCase  _createUserUseCase;
        private readonly LoginUserUseCase _loginUserUseCase;

        public LoginController(CreateUserUseCase createUserUseCase, LoginUserUseCase loginUserUseCase)
        {
            _createUserUseCase = createUserUseCase;
            _loginUserUseCase = loginUserUseCase;
        }

        // Documentacion del swagger para evitar mostrar siempre el 200 OK
        [HttpPost("login")]
        [ProducesResponseType(typeof(ApiResponseDto),StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponseDto),StatusCodes.Status400BadRequest)]
        public IActionResult Login([FromBody] LoginRequestDto loginDto)
        {
            try
            {
                var user = _loginUserUseCase.Login(loginDto);
                return Ok(new LoginResponseDto
                {
                    Success = true,
                    Message = "Login correcto",
                    Email = user.Email,
                    Name = user.Name
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());

                return BadRequest(new
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }

        [ProducesResponseType(typeof(ApiResponseDto),StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponseDto),StatusCodes.Status400BadRequest)]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequestDto registerDto)
        {
            try
            {
                _createUserUseCase.CreateUser(registerDto);
                return Ok(new ApiResponseDto
                {
                    Success = true,
                    Message = "Usuario creado"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiResponseDto
                {
                    Success = false,
                    Message = "No se pudo crear el usuario"
                });
            }
        }      
    }
}
