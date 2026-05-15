using DashboardPersonal.Application.DTOs.Users;
using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Domain.Entities;
using System;

namespace DashboardPersonal.Application.UseCases.Users
{
    public class CreateUserUseCase 
    {

        private readonly IUserRepository _userRepository;
        private readonly IPasswordService _passwordService;

        public CreateUserUseCase(IPasswordService passwordService, IUserRepository userRepository)
        {
            _passwordService = passwordService;
            _userRepository = userRepository;

        }

        public void CreateUser(RegisterRequestDto dto)
        {

            if (string.IsNullOrWhiteSpace(dto.Name))
                throw new ArgumentException("Es nombre es requerido");

            if (string.IsNullOrWhiteSpace(dto.Email))
                throw new ArgumentException("Es Email es requerido");

            if (!dto.Email.Contains("@") || !dto.Email.Contains("."))
                throw new ArgumentException("Es Email deber contener el @ y el .");

            if (dto.Password.Length <= 6)
                throw new ArgumentException("La contraseña debe tener almenos 6 carateres");


            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                PasswordHash = _passwordService.Hash(dto.Password) 
            };
            
            _userRepository.Add(user);
            _userRepository.SaveChanges();

        }
    }
}
