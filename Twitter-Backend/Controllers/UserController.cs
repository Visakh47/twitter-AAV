using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Twitter_Backend.Models;
using Twitter_Backend.Services;
using Microsoft.Extensions.Configuration;


namespace Twitter_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Index() {
            List<User> users = _userService.GetAll().ToList();
            return Ok(users);
        }
     
        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
        
            if (user is null)
            {
                return BadRequest("Invalid user request!!!");
            }
            
            if (_userService.HasUser(user))
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("JWTAuthentication@777sadaqerwiewqhruew11212131232132332312"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:7283",
                    audience: "http://localhost:7283",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(6),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new JWTTokenResponse { Token = tokenString });
            }
            return Unauthorized();
        }

    }
}
