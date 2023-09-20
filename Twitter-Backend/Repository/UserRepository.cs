using Twitter_Backend.Models;

namespace Twitter_Backend.Repository
{
    public class UserRepository
    {
        public List<User> Users = new List<User>();
        public UserRepository()
        {
            User user = new User();
            user.email = "visakh@carestack.com";
            user.password = "abc";
            Users.Add(user);
        }

        public List<User> GetUsers() {
            return Users;
        }
    }
}
