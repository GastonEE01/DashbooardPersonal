using DashboardPersonal.Application.DTOs.Users;
using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DashboardPersonal.Application.UseCases.Users
{
    public class LoginUserUseCase
    {
        private readonly IPasswordService _passwordService;
        private readonly IUserRepository _userRepository;

        public LoginUserUseCase(
       IUserRepository userRepository,
       IPasswordService passwordService)
        {
            _userRepository = userRepository;
            _passwordService = passwordService;
        }

        public User Login(LoginRequestDto dto)
        {
           var user = _userRepository.GetByEmail(dto.Email);

            if (user == null) 
                throw new Exception("Usuario no encontrado");

            var isValid = _passwordService.Verify(
                user.PasswordHash,
                dto.Password
                );
            if (!isValid)
                throw new Exception("Contraseña incorrecta");

            return user;
        }


    }
}
