import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from '@angular/router';
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
    constructor(private _apiService: ApiService, public cookieservice: CookieService , public activedrouter:ActivatedRoute) {
        if (this.cookieservice.get('userid') != null)
            this.userid = this.cookieservice.get('userid');
    }



    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        let _id = route.params['id'];
        // console.log(_id)
        // console.log('resolve route data');
        // console.log(route.data);
        console.log("soureshhh",route);
        if (route.data.requestcondition.condition._id == 'id') {
            console.log('++++++++++++++')
            route.data.requestcondition.condition._id = _id;
            delete route.data.requestcondition.condition.id;
            console.log(route.data.requestcondition.condition)
        }
        console.log(state); 
        var endpoint = route.data.link;
        var source = route.data.source;
        var condition = route.data.condition;
        var requestData: any = route.data.requestcondition;

        if (route.data.requestcondition.trainingcategory != null) {
            console.log(requestData)
            requestData.trainingcategory = route.params.cid;
            requestData.userid = this.userid;
            console.log( requestData.userid)
        } else {
            requestData.condition = Object.assign(requestData.condition, route.params);
            delete route.data.requestcondition.condition.id;
            console.log('route.data');
            console.log(route.data)
            console.log(requestData.condition)
            if(route.url[0].path == 'blogdetail') {
                route.data.requestcondition.condition._id_object = route.params['id'] ;
              
            }
            return new Promise((resolve) => {
                this._apiService.getDatalistForResolve(route.data).subscribe(api_object =>{
                    if (api_object) {
                        //console.log(api_object);
                        return resolve(api_object);
                    } else { // id not found
                        return true;
                    }
                })
    
            });
            }






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

