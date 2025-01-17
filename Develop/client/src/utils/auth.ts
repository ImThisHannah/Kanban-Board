import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    JwtPayload | null {
      const token = this.getToken();
  }};

  loggedIn(): boolean {
    // TODO: return a value that indicates if the user is logged in
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token); 
    }
  }
  
  isTokenExpired(token: string): boolean {
    // TODO: return a value that indicates if the token is expired
    try {
      const decodedToken: JwtPayload = jwtDecode(token);
      const expirationTime = decodedToken.exp; 
      const currentTime = Math.floor(Date.now() / 1000); 
      return expirationTime < currentTime;
    } catch (error) {
      
      return true; 
  }
  getToken(): null {
    // TODO: return the token
      return localStorage.getItem('token');
    
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('token', idToken);
    navigate('/'); 
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token');
    navigate('/login'); 
  }
}

export default new AuthService();
