import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pain',
        loadChildren: () => import('../pain/pain.module').then( m => m.PainPageModule)
      },
      {
        path: 'symptoms',
        loadChildren: () => import('../symptoms/symptoms.module').then( m => m.SymptomsPageModule)
      },
      {
        path: 'medicament',
        loadChildren: () => import('../medicament/medicament.module').then( m => m.MedicamentPageModule)
      },
      {
        path: 'options',
        loadChildren: () => import('../options/options.module').then( m => m.OptionsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pain',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pain',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
