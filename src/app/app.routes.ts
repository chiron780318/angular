import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full", // 當路徑是空的時候轉址到 home
    },
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
        children: [
            // {
            //     path: '',
            // },
            // {
            //     path: 'home1',
            //     title: 'App Home1 Page',
            // },
            // {
            //     path: 'home2',
            //     title: 'App Home2 Page',
            // }
        ]
    },
    {
        path: 'user',
        title: 'App User Page',
        component: UserComponent,
    },
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
];

