using DashboardPersonal.Application.DTOs;
using DashboardPersonal.Application.DTOs.Widget;
using DashboardPersonal.Application.UseCases.Widgets;
using DashboardPersonal.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DashboardPersonal.API.Controllers
{
    [Route("Api/[Controller]")]
    public class WidgetController : ControllerBase
    {
        public readonly CreateWidgetUseCase _createWidgetUseCase;
        public readonly DeleteWidgetUseCase _deleteWidgetUseCase;

        
        public WidgetController(CreateWidgetUseCase createWidgetUseCase, DeleteWidgetUseCase deleteWidgetUseCase)
        {
            _createWidgetUseCase = createWidgetUseCase;
            _deleteWidgetUseCase = deleteWidgetUseCase;
        }

        [HttpPost("Widgets")]
        public IActionResult Widgets([FromBody] WidgetRequestDto dto)
        {
            try {
                _createWidgetUseCase.CreateWidget(dto);
                var widget = _createWidgetUseCase.CreateWidget(dto);

                return Ok(new  WidgetResponseDto 
                {
                    Id = widget.Id,
                    Title = widget.Title,
                    Type = widget.Type
                });
            } catch (Exception ex)
            {
                return BadRequest(new
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }

        [HttpDelete("Widgets/{id}")]
        public IActionResult DeleteWidgets(int id)
        {
            try
            {
                _deleteWidgetUseCase.DeleteWidget(id);
                return Ok(new ApiResponseDto
                {
                    Success = true,
                    Message = "Widget eliminado",
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Success = false,
                    Message = ex.Message
                });
            }



        }
    }
}
