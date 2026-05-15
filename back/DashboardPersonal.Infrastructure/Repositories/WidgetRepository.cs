using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Domain.Entities;
using DashboardPersonal.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Infrastructure.Repositories
{
    public class WidgetRepository : IWidgetRepository
    {
        private readonly AppDbContext _context;

        public WidgetRepository(AppDbContext context)
        {
            _context = context;
        }

        public void add(Widget widget)
        {
            _context.Widgets.Add(widget);
            _context.SaveChanges();
        }

        public void delete(int id)
        {
            var widget = _context.Widgets.FirstOrDefault(w => w.Id == id);
            
            if (widget == null) 
                throw new Exception("Widget no encontrado");

             _context.Widgets.Remove(widget);
            _context.SaveChanges();
        }

        public void Save()
        {
            _context.SaveChanges();
        }


    }
}
