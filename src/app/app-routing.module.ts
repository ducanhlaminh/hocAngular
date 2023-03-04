import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './componnets/counter/counter.component';
import { TodoListComponent } from './componnets/todo-list/todo-list.component';
import { LayoutHomeComponent } from './Layout/layout-home/layout-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/count', pathMatch: 'full' },
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {
    path: 'count',
    component: CounterComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
