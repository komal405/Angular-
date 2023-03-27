import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
 
const routes: Routes = [
  {path: '', redirectTo: 'info/home', pathMatch: 'full'},
  {path: 'info/home', component: HomeComponent},
  {path:'info/create', component: CreateComponent},
  {path:'info/edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
