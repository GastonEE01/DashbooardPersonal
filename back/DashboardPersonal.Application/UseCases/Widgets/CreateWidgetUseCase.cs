using DashboardPersonal.Application.DTOs.Widget;
using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.UseCases.Widgets
{
    public class CreateWidgetUseCase
    {
        private IUserRepository _userRepository;
        private IWidgetRepository _widgetRepository;

        public CreateWidgetUseCase(IUserRepository userRepository, IWidgetRepository widgetRepository)
        {
            _userRepository = userRepository;
            _widgetRepository = widgetRepository;
        }

        public Widget CreateWidget(WidgetRequestDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException("No se pudo crear el widget");

            var user = _userRepository.GetByEmail(dto.Email);

            if (user == null)
                throw new ArgumentException("Usuario no encontrado");


            var widget = new Widget
            {
                Title = dto.Title,
                Type = dto.Type,
                UserId = user.Id
            };
            _widgetRepository.add(widget);
            _widgetRepository.Save();

            return widget;
        }

       
    }
}
