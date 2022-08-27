import { User } from '../types/models';
export default {
  login(username: string, password: string): Promise<User> {
    console.log(`logging in ${username} with password ${password}`)
    return new Promise<User>((resolve, _) => {
      const user: User = {
        username: 'Sample user',
        avatar: 'https://img.freepik.com/free-photo/the-cat-on-white-background_155003-15381.jpg?w=2000',
        email: 'sample@sample.com'
      };
      resolve(user);
    })
  },
  register(username: string, email: string, password: string): Promise<User> {
    console.log(`registering  ${username} with email ${email} and password ${password}`)
    return new Promise<User>((resolve, _) => {
      const user: User = {
        username: 'Sample user',
        avatar: 'https://img.freepik.com/free-photo/the-cat-on-white-background_155003-15381.jpg?w=2000',
        email: 'sample@sample.com'
      };
      resolve(user);
    });
  },
}