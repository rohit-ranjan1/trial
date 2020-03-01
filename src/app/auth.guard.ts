// import { Injectable, Input } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';


// @Injectable()
// export class CanActivateViaAuthGuard implements CanActivate {

//   constructor(private _router : Router) {}
// @Input() Password : string;
//   canActivate(route:ActivatedRouteSnapshot):boolean {
//     //let id = route.url[1].path;
//     console.log('i am checking to see if you are logged in');
//     if(this.Password=="ranjan")
//     {
//       alert("Invalid Player ID");
//       this._router.navigate(['/LoginComponent']);
//     }
//     return true;
//   }
// }



import { Injectable, Input } from '@angular/core';

 

import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';

import { EmployeeService } from './Employee.service' ;

 

 

 

 

 

 

@Injectable()

 

export class

CanActivateViaAuthGuard implements CanActivate {

 

 

 

constructor(private user:EmployeeService) {}

 

 

 

canActivate(route:ActivatedRouteSnapshot):boolean {

 

 

console.log('i am checking to see if you are logged in');

console.log('this.incomingData');

return this.user.getUserLoggedIn();

 

 

 

}

 

}