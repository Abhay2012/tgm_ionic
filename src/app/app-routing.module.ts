import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  
  { path: 'account',   loadChildren: './AccountComponent/account.module#AccountModule' },

  { path: 'en',  loadChildren: './NewsitemsComponent/Newsitems.module#NewsitemsModule' },
  { path: 'en/cities', loadChildren: './CitiesComponent/cities.module#CitiesModule' },
  { path: 'en/reports', loadChildren: './ReportsComponent/reports.module#ReportsModule' }, // @TODO: deprecated

  { path: 'maps', loadChildren: './LayoutMap/map.module#MapModule' },

  /* { path: 'navigator', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },
  { path: 'navigator/:extra', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },

  { path: 'page1', loadChildren: './main-navigator/page1/page1.module#Page1PageModule' },
  { path: 'page3', loadChildren: './main-navigator/page3/page3.module#Page3PageModule' },
  { path: 'pages/faq', loadChildren: './pages/faq/faq.module#FaqPageModule' }, */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
