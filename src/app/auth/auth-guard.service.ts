import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  private jwtHelper: JwtHelper;
  redirectUrl: string;
  constructor(private router: Router, private userService: UserService, public afAuth: AngularFireAuth) {
    this.jwtHelper = new JwtHelper();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdmin()) {
      return true;
    }
    this.redirectUrl = '/admin';
    this.router.navigateByUrl('/login');
    return false;
  }
  checkLogin(url: string): boolean {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.redirectUrl = url;
    this.router.navigateByUrl('/login');
    return false;
  }
  isAdmin() {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      if (this.jwtHelper.decodeToken(token).sub.indexOf('admin') >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  getMemberId(): number {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return +(this.jwtHelper.decodeToken(token).jti);
    } else {
      return 0;
    }
  }
  sAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    } else {
      return false;
    }
  }
