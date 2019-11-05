import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

export interface EndpointComponent {
    endpoint: string;
}

@Injectable({
    providedIn: 'root'
})

export class ResolveService implements Resolve<any> {
    public userid: any;
    constructor(private _apiService: ApiService, public cookieservice: CookieService) {
        if (this.cookieservice.get('userid') != null)
            this.userid = this.cookieservice.get('userid');
    }



    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        //let id = route.params['id'];
        console.log('resolve route data');
        console.log(route.data);
        console.log(state);
        var endpoint = route.data.link;
        var source = route.data.source;
        var condition = route.data.condition;
        var requestData: any = route.data.requestcondition;

        if (route.data.requestcondition.trainingcategory != null) {
            requestData.trainingcategory = route.params.cid;
            requestData.userid = this.userid;
        } else
            requestData.condition = Object.assign(requestData.condition, route.params);
            return new Promise((resolve) => {
                this._apiService.getDatalistForResolve(route.data.requestcondition).subscribe(api_object =>{
                    if (api_object) {
                        return resolve(api_object);
                    } else { // id not found
                        return true;
                    }
                })
    
            });


        //old code
        /*var result = new Promise((resolve) => {this._http.post(this.commonservices.nodesslurl+'datalist?token='+this.cookie.get('jwttoken'),
            {source:source,condition:condition}/!*JSON.stringify(data)*!/).pipe(map(res => res));
        return result;*/

        // return new Promise((resolve) => { this._apiService.postData(endpoint,source,condition).subscribe(api_object => {
        //     if (api_object) {
        //         return resolve(api_object);
        //     } else { // id not found
        //       //  this.router.navigateByUrl('dashboard');
        //         return true;
        //     }
        // });

        // });
    
    }
}

