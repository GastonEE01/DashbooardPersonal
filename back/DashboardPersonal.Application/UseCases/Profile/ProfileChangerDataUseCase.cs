using DashboardPersonal.Application.DTOs.Profile;
using DashboardPersonal.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.UseCases.Profile
{
    public class ProfileChangerDataUseCase
    {
        private readonly IProfileRepository _profileRepository;

        public ProfileChangerDataUseCase(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }
        /*
        public UserProfileResponseDto GetProfile(String email)
        {
            Console.WriteLine(email);

            var user = _profileRepository.GetByEmail(email);
            if (user == null) { 
            Console.WriteLine("USER NULL");
            throw new Exception("Usuario no encontrador");
        }
            Console.WriteLine(user.Email);

            return new UserProfileResponseDto
            {
                Name = user.Name,
                Email = user.Email,

            };

        }
        */

        public UserProfileResponseDto GetProfile(string email)
        {
            Console.WriteLine($"EMAIL RECIBIDO: {email}");

            var user = _profileRepository.GetByEmail(email);

            if (user == null)
            {
                Console.WriteLine("USER NULL");

                throw new Exception("Usuario no encontrado");
            }

            Console.WriteLine($"USER ENCONTRADO: {user.Email}");

            return new UserProfileResponseDto
            {
                Name = user.Name,
                Email = user.Email
            };
        }
        public void ModifyData(ProfileDataRequestDto dto)
        {
            var users = _profileRepository.GetByEmail(dto.Email);

            if (users == null)
            throw new Exception("No se encontro el email");

           users.Name = dto.Name;
           users.Email = dto.Email;

            _profileRepository.Save();

            
        }
    }
}
