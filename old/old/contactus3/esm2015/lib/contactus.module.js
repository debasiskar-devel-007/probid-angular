/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus.component';
import { DemoMaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
// import { AgmCoreModule} from '@agm/core';
import { ListingModule } from 'lib-listing';
import { ContactusListingComponent } from './contactus-listing/contactus-listing.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
export class ContactusModule {
}
ContactusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ContactusComponent, ContactusListingComponent, LoadingComponent],
                imports: [
                    DemoMaterialModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ListingModule,
                    HttpClientModule,
                ],
                exports: [ContactusComponent, ContactusListingComponent],
                providers: [ApiService, LoadingComponent, CookieService],
                bootstrap: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFNLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUEyQmhELE1BQU0sT0FBTyxlQUFlOzs7WUF4QjNCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDL0UsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGdCQUFnQjtpQkFRakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUseUJBQXlCLENBQUM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7Z0JBQ3hELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNqQyxlQUFlLEVBQUMsRUFBRTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0dXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3R1cy5jb21wb25lbnQnO1xuaW1wb3J0IHtEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IEFnbUNvcmVNb2R1bGV9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGliLWxpc3RpbmcnO1xuaW1wb3J0IHsgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0dXMtbGlzdGluZy9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0e0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdHVzQ29tcG9uZW50LCBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIC8qICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QmxPaHoxOWctWFdNV2hMcGZjeFR2SUZ4WDNFTVktVTRZJ1xuICAgICAgLyEqIGFwaUtleSBpcyByZXF1aXJlZCwgdW5sZXNzIHlvdSBhcmUgYVxuICAgICAgcHJlbWl1bSBjdXN0b21lciwgaW4gd2hpY2ggY2FzZSB5b3UgY2FuXG4gICAgICB1c2UgY2xpZW50SWRcbiAgICAgICohL1xuICAgIH0pKi9cbiAgXSxcbiAgZXhwb3J0czogW0NvbnRhY3R1c0NvbXBvbmVudCwgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsIExvYWRpbmdDb21wb25lbnQsIENvb2tpZVNlcnZpY2VdLFxuICBib290c3RyYXA6IFtdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIGVudHJ5Q29tcG9uZW50czpbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0dXNNb2R1bGUgeyB9XG5cbiJdfQ==