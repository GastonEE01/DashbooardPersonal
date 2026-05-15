
using DashboardPersonal.Application.DTOs.Users;
using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Application.UseCases.Users;
using FluentAssertions;
using Moq;
using Xunit;

namespace DashboardPersonal.Test
{
    public class CreateUserUseCaseTests
    {
        [Fact]
        public void CreateUser_Should_ThrowExeption_When_Name_Is_Emty()
        {
            // Arrange
            var passwordServiceMock = new Mock<IPasswordService>();
            var userRepository = new Mock<IUserRepository>();

            var useCase = new CreateUserUseCase(
                passwordServiceMock.Object
                , userRepository.Object
                );

            var dto = new LoginRequestDto
            {
                Name = "",
                Email = "test@test.com",
                Password = "123456"
            };

            // Act & Assert
            Assert.Throws<ArgumentException>(() =>
            {
                useCase.CreateUser(dto);
            });
        }

        [Fact]
        public void CreateUser_ShoulThrowException_WhenEmailIsInvalid()
        {
            // Arrange 
            var passwordServiceMock = new Mock<IPasswordService>();
            var userRepository = new Mock<IUserRepository>();

            var useCase = new CreateUserUseCase(passwordServiceMock.Object, userRepository.Object);

            var dto = new LoginRequestDto
            {
                Name = "Gaston",
                Email = "estevezgaston@gmail.com",
                Password = "123456"
            };

            // Act
            Action action = () => useCase.CreateUser(dto);

            // Assert 
            action.Should().Throw<ArgumentException>();
        }

    }
}
