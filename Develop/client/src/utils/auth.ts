import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token (assuming the token is stored securely)
    const token = this.getToken();
    if (!token) return null; // Handle case where no token is found

    try {
      const decodedToken: JwtPayload = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null; // Handle potential decoding errors
    }
  }

  loggedIn(): boolean {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    // TODO: return a value that indicates if the token is expired
    try {
      const decodedToken: JwtPayload = jwtDecode(token);
      // Check if 'exp' property exists before accessing it
      if (decodedToken.exp) {
        const expirationTime = decodedToken.exp;
        const currentTime = Math.floor(Date.now() / 1000);
        return expirationTime < currentTime;
      }
      return true; // Consider token expired if 'exp' is missing
    } catch (error) {
      console.error('Error decoding token:', error);
      return true; // Assume token is expired if decoding fails
    }
  }

  getToken(): string | null {
    // TODO: return the token (assuming it's stored in localStorage)
    return localStorage.getItem('token');
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page (consider using a navigation library)
    localStorage.setItem('token', idToken);
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page (consider using a navigation library)
    localStorage.removeItem('token');
  }
}

export default new AuthService();