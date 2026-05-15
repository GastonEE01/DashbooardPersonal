using DashboardPersonal.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.Interfaces
{
    public interface IWidgetRepository
    {
        void add(Widget widget);
        void Save();
        void delete(int idWidget);
    }
}
