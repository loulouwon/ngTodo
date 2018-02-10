import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {JqueryComponent} from './jquery/jquery.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  // 사용자 화면
  {path: '' , component : IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'jquery', component: JqueryComponent}
    ]},

  // 관리자화면
  // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}

];