using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Domain.Entities
{
    public class Widget
    {
        public int Id { get; set; }
        public String Type { get; set; }
        public String Title { get; set; }
        public int UserId { get; set; }

    }
}
