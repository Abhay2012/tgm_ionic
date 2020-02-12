import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { NewsitemsModule } from '../NewsitemsComponent/Newsitems.module';
// import { NewsitemsList } from '../NewsitemsComponent/newsitems.list';
import { GetStars } from './GetStars';
import { TestElem } from './map.page';

const routes: Routes = [
  { path: '', component: MapPage },
  { path: ':slug', component: MapPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    NewsitemsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ GetStars, MapPage ],
  entryComponents: [ GetStars ],
})
export class MapModule {}