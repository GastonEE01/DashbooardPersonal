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
    public class DeleteWidgetUseCase
    {
        private IWidgetRepository _widgetRepository;

        public DeleteWidgetUseCase( IWidgetRepository widgetRepository)
        {
            _widgetRepository = widgetRepository;
        }

        public void DeleteWidget(int id)
        {
            _widgetRepository.delete(id);
        }
    }
}
