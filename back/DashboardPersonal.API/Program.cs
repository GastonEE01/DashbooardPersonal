using DashboardPersonal.Application.Interfaces;
using DashboardPersonal.Application.UseCases.Profile;
using DashboardPersonal.Application.UseCases.Users;
using DashboardPersonal.Application.UseCases.Widgets;
using DashboardPersonal.Infrastructure.Data;
using DashboardPersonal.Infrastructure.Repositories;
using DashboardPersonal.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add dependencies ( UseCase )
builder.Services.AddScoped<CreateUserUseCase>();
builder.Services.AddScoped<LoginUserUseCase>();
builder.Services.AddScoped<ProfileChangerDataUseCase>();
builder.Services.AddScoped<CreateWidgetUseCase>();
builder.Services.AddScoped<DeleteWidgetUseCase>();

// Add dependencies ( Interfaces )
builder.Services.AddScoped<IPasswordService, PasswordService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IProfileRepository, ProfileRepository>();
builder.Services.AddScoped<IWidgetRepository, WidgetRepository>();
builder.Services.AddHttpClient<IWeatherService, WeatherService>();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins(
                "http://localhost:5173",
                "https://dashbooard-personal.vercel.app")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseSwagger();

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
    c.RoutePrefix = string.Empty; 
});

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();
