using Twitter_Backend.Models;
using Twitter_Backend.Repository;

namespace Twitter_Backend.Services
{
    public class UserService
    {
        private UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public List<User> GetAll() {
            return _userRepository.GetUsers();
        }

        public bool HasUser(User Checkuser)
        {
            foreach (var user in _userRepository.GetUsers())
            {
                if (user.email == Checkuser.email && user.password == Checkuser.password)
                    return true;
            }
            return false;
        }
    }
}
