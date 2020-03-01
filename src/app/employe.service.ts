// import {Injectable} from '@angular/core';
// import { Http , Response} from '@angular/http';
// import {Observable} from 'rxjs';
// import  'rxjs/add/operator/map';


// @Injectable()
// export class EmployeeService{
//     private _url : string = "./EmployeRecords.json"
//     constructor(private _http:Http)
//     {

//     }
//     getEmployees():Observable<string[]>
//     {
//         return this._http.get(this._url).map((response:Response) =><string[]>    response.json())
//     }
// }