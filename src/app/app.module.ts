import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule  }   from '@angular/forms'

import {DemoMaterialModule} from "../material-module";
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './component/frontend/login/login.component';
// import { ContactusModule } from 'contactus';
// import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';
// import { TestimonialModule } from 'testimonial';
import {ListingModule} from 'listing-angular7';

import {MatIconModule} from '@angular/material/icon';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MatCarouselModule } from '@ngmodule/material-carousel';


/**Frontend Component**/

import { HeaderComponent, comingSoonDialog } from './layout/header/header.component';
import { FooterComponent, DialogTermsDialog, DialogPrivacyDialog } from './layout/footer/footer.component';
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';

import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';

import { BlogComponent } from './component/frontend/blog/blog.component';
// import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';

import { AdvanceInventorySearchComponent } from './component/frontend/advance-inventory-search/advance-inventory-search.component';
import { BasicInventorySearchComponent } from './component/frontend/basic-inventory-search/basic-inventory-search.component';

import { PreOwnedComponent } from './component/frontend/pre-owned/pre-owned.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';
import { BlogCategoryComponent } from './component/frontend/blog-category/blog-category.component';

/**End Frontend Component**/


/**Backend Component**/
import { SidenavService } from './../app/services/sidenav.service';
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './layout/bk-header/bk-header.component';
import { BkFooterComponent } from './layout/bk-footer/bk-footer.component';

import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
// import { ServicelibModule } from 'servicelib';
// import { FileUploadModule } from 'dist/file-upload';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';
import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { RepdashboardComponent } from './component/backend/repdashboard/repdashboard.component';
import { LoginModule } from 'login';
import { ServicelibModule } from 'servicelib';
import { ContactusModule } from 'contactus';
import { TestimonialModule } from 'testimonial';
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
import { SearchListViewComponent } from './component/frontend/search-list-view/search-list-view.component';
// import { SharetoolsModule } from 'sharetools';
import { ListingComponent } from './training/listing/listing.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {ModalModule} from 'ngx-bootstrap/modal';
import { TranningcategorymanagementComponent } from './training/tranningcategorymanagement/tranningcategorymanagement.component';
import { UsersearchPipe } from './training/search.pipe';
import { TrainingModule } from './training/training.module';
import { AddEditComponent } from './training/tranningcategorymanagement/add-edit/add-edit.component';

import { TrainingsectionlistComponent } from './training/trainingsectionlist/trainingsectionlist.component';
import { TrainingsectionComponent } from './training/trainingsection/trainingsection.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CKEditorModule } from 'ngx-ckeditor';
import { ClipboardModule } from 'ngx-clipboard';
import { RepTraingcenterComponent } from './training/rep-traingcenter/rep-traingcenter.component';
import { ManageleadsComponent } from './training/manageleads/manageleads.component';
import { ManageLessonsComponent } from './component/backend/manage-lessons/manage-lessons.component';
import { TrainingCenterComponent } from './component/backend/training-center/training-center.component';
import { TrainingReportComponent } from './component/backend/training-report/training-report.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';
import { CreateNewInventoryComponent } from './component/backend/create-new-inventory/create-new-inventory.component';
import { JobTicketComponent } from './component/backend/job-ticket/job-ticket.component';
import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { AdvanceInventorySearchBackendComponent } from './component/backend/advance-inventory-search-backend/advance-inventory-search-backend.component';
import { BasicInventorySearchBackendComponent } from './component/backend/basic-inventory-search-backend/basic-inventory-search-backend.component';
import { MysalesrepComponent } from './component/backend/mysalesrep/mysalesrep.component';
import { CommunicationComponent } from './component/backend/communication/communication.component';
import { AddAdminCategoriesComponent } from './component/backend/add-admin-categories/add-admin-categories.component';
import { AdminManageCategoriesComponent, DialogModalOpenDialog } from './component/backend/admin-manage-categories/admin-manage-categories.component';
import { AdminAddCategoriesComponent } from './component/backend/admin-add-categories/admin-add-categories.component';

import { TrainingreportsComponent } from './training/trainingreports/trainingreports.component';


import { FileUploadModule } from 'file-upload';
import { OwlModule } from 'ngx-owl-carousel'; 
import { ManagequizComponent } from './training/managequiz/managequiz.component';

import { AddComponent } from './component/frontend/all_blog/add/add.component';
import { ListingBlogmanagementComponent } from './component/frontend/all_blog/listing-blogmanagement/listing-blogmanagement.component';
import { BloglistComponent } from './component/frontend/all_blog/bloglist/bloglist.component';
// import { BlogModule } from 'blog';
import { AddeditBlogmanagementComponent } from './component/frontend/all_blog/addedit-blogmanagement/addedit-blogmanagement.component';

@NgModule({
  declarations: [
    AddComponent,
    AddeditBlogmanagementComponent,
    ListingBlogmanagementComponent,
    BloglistComponent,
    ManageleadsComponent,
    RepTraingcenterComponent,
    TrainingsectionlistComponent,
    TrainingsectionComponent,
    AddEditComponent,
    UsersearchPipe,
    AppComponent,
    LoginComponent,
    ContactusComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    comingSoonDialog,
    FooterComponent,
    DialogPrivacyDialog,
    DialogTermsDialog,
    HomeComponent,
    BkHeaderComponent,
    BkFooterComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    ListingTestimonialComponent,
    AddeditTestimonialComponent,
    BkLeftdivComponent,
    MaindashboardComponent,
    ServiceComponent,
    ServicelistComponent,
    TesimonialComponent,
    TesimoniallistComponent,
    BlogComponent,
    // BloglistComponent,
    BlogdetailComponent,
    UserManagementComponent,
    BasicInventorySearchComponent,
    AdvanceInventorySearchComponent,
    PreOwnedComponent,
    AboutusComponent,
    RepdashboardComponent,
    BlogManagementComponent,
    CommissionReportComponent,
    InventorySearchComponent,
    ManageAvailabilityComponent,
    TestimonialListsAdminComponent,
    BirddogListComponent,
    CommissionListComponent,
    CustomerListComponent,
    ManageCommissionComponent,
    NewsletterlistsComponent,
    SalesReportComponent,
    SalesreplistsComponent,
    RsvplistsComponent,
    ManageTrainingComponent,
    SearchListViewComponent,
    ListingComponent,
    TranningcategorymanagementComponent,
    ManageLessonsComponent,
    TrainingCenterComponent,
    TrainingReportComponent,
    MyAppointmentComponent,
    CreateNewInventoryComponent,
    JobTicketComponent,
    SocialAdvoComponent,
    BookAnAppointmentComponent,
    AdvanceInventorySearchBackendComponent,
    BasicInventorySearchBackendComponent,
    MysalesrepComponent,
    CommunicationComponent,
    AdminManageCategoriesComponent,
    AddAdminCategoriesComponent,
    DialogModalOpenDialog,
    AdminAddCategoriesComponent,
    TrainingreportsComponent,
    ManagequizComponent,
    BlogCategoryComponent
  ],
  imports: [
    // TrainingModule,
    // BlogModule,
    FileUploadModule,
    NgxUploaderModule,
    AngularFontAwesomeModule,
    MatCarouselModule.forRoot(),
    DragScrollModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DemoMaterialModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    LoginModule,
    TestimonialModule,
    ServicelibModule,
    ContactusModule,
    HttpClientModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,
    ListingModule,
    MatIconModule,
    ImageCropperModule,
     CarouselModule.forRoot(),
    CKEditorModule,
    ClipboardModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    
    // SharetoolsModule
  ],
  providers: [CookieService, AuthGuard, ApiService, SidenavService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [comingSoonDialog, DialogPrivacyDialog, DialogTermsDialog, DialogModalOpenDialog]
})
export class AppModule { }

