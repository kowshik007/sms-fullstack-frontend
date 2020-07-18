import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { IndexComponent } from './index/index.component';
import { ReadDataComponent } from './data/read-data/read-data.component';
import { ListDataComponent } from './data/list-data/list-data.component';
import { UpdateDataComponent } from './data/update-data/update-data.component';
import { DeleteDataComponent } from './data/delete-data/delete-data.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'data',
    component: DataComponent,
    children:[
      {
        path:"",
        component: ListDataComponent
      },
      {
        path:":id",
        component: ReadDataComponent
      },
      {
        path:":id/edit",
        component: UpdateDataComponent
      },
      {
        path:":id/delete",
        component: DeleteDataComponent
      }
    ]
  },
  {
    path: 'search',
    component: SearchComponent,
    children:[
      {
        path: '',
        component: SearchFormComponent
      },
      {
        path: 'results',
        component: SearchResultsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
