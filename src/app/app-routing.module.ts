import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/frontend/login/login.component';
import { AuthGuard } from './auth.guard';

/**Frontend Routing**/
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';
import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';
import { AdvanceInventorySearchComponent } from './component/frontend/advance-inventory-search/advance-inventory-search.component';
import { BasicInventorySearchComponent } from './component/frontend/basic-inventory-search/basic-inventory-search.component';
import { PreOwnedComponent } from './component/frontend/pre-owned/pre-owned.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';
import { SearchListViewComponent } from './component/frontend/search-list-view/search-list-view.component';
/**End Frontend Routing**/

/**Backend Routing**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
// import { ContactUsDashboardComponent } from './component/backend/contact-us-dashboard/contact-us-dashboard.component';

import { RepdashboardComponent } from './component/backend/repdashboard/repdashboard.component';

import { ResolveService } from './resolve.service';
import { BlogManagementComponent } from './component/backend/blog-management/blog-management.component';

import { CommissionReportComponent } from './component/backend/commission-report/commission-report.component';
import { InventorySearchComponent } from './component/backend/inventory-search/inventory-search.component';
import { ManageAvailabilityComponent } from './component/backend/manage-availability/manage-availability.component';
import { TestimonialListsAdminComponent } from './component/backend/testimonial-lists-admin/testimonial-lists-admin.component';
import { BirddogListComponent } from './component/backend/birddog-list/birddog-list.component';
import { CommissionListComponent } from './component/backend/commission-list/commission-list.component';
import { CustomerListComponent } from './component/backend/customer-list/customer-list.component';
import { ManageCommissionComponent } from './component/backend/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/newsletterlists/newsletterlists.component';
import { SalesReportComponent } from './component/backend/sales-report/sales-report.component';
import { SalesreplistsComponent } from './component/backend/salesreplists/salesreplists.component';
import { RsvplistsComponent } from './component/backend/rsvplists/rsvplists.component';
import { ManageTrainingComponent } from './component/backend/manage-training/manage-training.component';
import { ManageLessonsComponent } from './component/backend/manage-lessons/manage-lessons.component';
import { TrainingCenterComponent } from './component/backend/training-center/training-center.component';
import { TrainingReportComponent } from './component/backend/training-report/training-report.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';
import { CreateNewInventoryComponent } from './component/backend/create-new-inventory/create-new-inventory.component';
import { JobTicketComponent } from './component/backend/job-ticket/job-ticket.component';
import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { from } from 'rxjs';
import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { AdvanceInventorySearchBackendComponent } from './component/backend/advance-inventory-search-backend/advance-inventory-search-backend.component';
import { BasicInventorySearchBackendComponent } from './component/backend/basic-inventory-search-backend/basic-inventory-search-backend.component';
import { MysalesrepComponent } from './component/backend/mysalesrep/mysalesrep.component';
import { CommunicationComponent } from './component/backend/communication/communication.component';
import { AdminManageCategoriesComponent } from './component/backend/admin-manage-categories/admin-manage-categories.component';
import { AdminAddCategoriesComponent } from './component/backend/admin-add-categories/admin-add-categories.component';
/**End Backend Routing**/

const routes: Routes = [

  /**Frontend Routing**/
  { path: 'admin-login', component: LoginComponent },
  { path: 'salesrep-login', component: LoginComponent },
  { path: 'customer-login', component: LoginComponent },
  
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: "testimonialhome",
    component: TesimonialComponent,
    resolve: { testimonialListData: ResolveService },
    data: {
      requestcondition: { source: "testimonals", condition: {} },
      endpoint: "datalist"
    }
  },
  { path: 'pre-owned-list', component: SearchListViewComponent },
  { path: 'online-inventory-list', component: SearchListViewComponent },
  { path: 'search-inventory-list', component: SearchListViewComponent },
  { path: 'specials-list', component: SearchListViewComponent },

  // {
  //   path: "testimonial",
  //   component: TesimoniallistComponent,
  //   resolve: { testimonialListData: ResolveService },
  //   data: {
  //     requestcondition: { source: "testimonals", condition: {} },
  //     endpoint: "datalist"
  //   }
  // },


  //  static path
  {
    path: "testimonial",
    component: TesimoniallistComponent
  },




  {
    path: 'servicehome',
    component: ServiceComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },
  // {
  //   path: 'service',
  //   component: ServicelistComponent,
  //   resolve: { serviceListData: ResolveService },
  //   data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  // },

  //  static path

  {
    path: 'service',
    component: ServicelistComponent
  },

  { path: 'bloghome', component: BlogComponent, resolve: { serviceListData: ResolveService }, data: { requestcondition: { source: 'blogs', condition: {} }, endpoint: 'datalist' } },
  { path: 'blog', component: BloglistComponent },
  { path: 'blogdetail', component: BlogdetailComponent },
  { path: 'advance-inventory-search', component: AdvanceInventorySearchComponent },
  { path: 'basic-inventory-search', component: BasicInventorySearchComponent },
  { path: 'pre-owned', component: PreOwnedComponent },
  { path: 'aboutus', component: AboutusComponent },

  /**End Frontend Routing**/

  /**Backend Routing**/
  // {path: 'customer-dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  { path: 'customer-dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: MaindashboardComponent },
  { path: 'bk-leftdiv', component: BkLeftdivComponent },
  { path: 'testimonial/add', component: AddeditTestimonialComponent },
  {
    path: 'testimonial/edit/:_id', component: AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'testimonial-listing', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'service-listing', component: ListingServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services_view', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'service/add', component: AddeditServiceComponent },
  {
    path: 'service/edit/:_id', component: AddeditServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'blog-management', component: BlogManagementComponent },
  { path: 'commission-report', component: CommissionReportComponent },
  { path: 'inventory-list', component: InventorySearchComponent },
  { path: 'manage-availability', component: ManageAvailabilityComponent },
  { path: 'testimonial-lists-admin', component: TestimonialListsAdminComponent },
  { path: 'birddog-list', component: BirddogListComponent },
  { path: 'commission-list', component: CommissionListComponent },
  { path: 'customer-list-admin', component: CustomerListComponent },
  { path: 'manage-commission', component: ManageCommissionComponent },
  { path: 'newsletter-list', component: NewsletterlistsComponent },
  { path: 'sales-report', component: SalesReportComponent },
  { path: 'salesrep-list-admin', component: SalesreplistsComponent },
  { path: 'rsvp', component: RsvplistsComponent },
  { path: 'manage-training', component: ManageTrainingComponent },
  { path: 'manage-lessons', component: ManageLessonsComponent },
  { path: 'training-center', component: TrainingCenterComponent },
  { path: 'training-report', component: TrainingReportComponent },
  { path: 'my-appointment-admin', component: MyAppointmentComponent },
  { path: 'create-new-inventory', component: CreateNewInventoryComponent },
  { path: 'job-ticket', component: JobTicketComponent },
  { path: 'social-advo-admin', component: SocialAdvoComponent },  
  { path: 'manage-type', component: AdminManageCategoriesComponent },  
  { path: 'manage-make', component: AdminManageCategoriesComponent },  
  { path: 'manage-make-edit/:id', component: AdminManageCategoriesComponent },  
  { path: 'manage-model', component: AdminManageCategoriesComponent },  
  { path: 'manage-year', component: AdminManageCategoriesComponent },  
  { path: 'admin-add-categories', component: AdminAddCategoriesComponent },  
 
  /**************** User Management *****************/
  {
    path: 'user-management', component: UserManagementComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'user', condition: {} }, endpoint: 'datalist' }
  },
  
  { path: 'my-appointment-user', component: MyAppointmentComponent },
  { path: 'book-an-appointment-user', component: BookAnAppointmentComponent },
  
  { path: 'advance-inventory-search-user', component: AdvanceInventorySearchBackendComponent },
  { path: 'basic-inventory-search-user', component: BasicInventorySearchBackendComponent },
  { path: 'mysalesrep', component: MysalesrepComponent },
  // { path:'contact-us-dashboard', component:ContactUsDashboardComponent,  resolve: { serviceList: ResolveService },
  // data: { requestcondition: { source: 'contactusForm', condition: {} }, endpoint: 'datalist'}},
  /**************** Rep Management *****************/
  { path: 'rep-dashboard', component: RepdashboardComponent },
  { path: 'my-commission', component: CommissionListComponent },
  { path: 'my-birddog', component: BirddogListComponent },
  
  { path: 'my-appointment-rep', component: MyAppointmentComponent },
  { path: 'book-an-appointment-rep', component: BookAnAppointmentComponent },
  { path: 'customer-list-rep', component: CustomerListComponent },
  { path: 'social-advo-rep', component: SocialAdvoComponent },

  
  { path: 'advance-inventory-search-rep', component: AdvanceInventorySearchBackendComponent },
  { path: 'basic-inventory-search-rep', component: BasicInventorySearchBackendComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'training-center-rep', component: TrainingCenterComponent },

  /**End Backend Routing**/






  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
