import { Routes } from '@angular/router';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ShowinfoComponent } from './showinfo/showinfo.component';

export const routes: Routes = [
    {path:'add',component:AddinfoComponent},
    {path:'show',component:ShowinfoComponent}
];
