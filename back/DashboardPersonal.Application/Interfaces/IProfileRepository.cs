using DashboardPersonal.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.Interfaces
{
    public interface IProfileRepository
    {
        User? GetByEmail(string email);
        void Save();


    }
}
