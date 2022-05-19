import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './pages/display/display.component';
import { FlexdirectionComponent } from './pages/flexdirection/flexdirection.component';
import { JustifycontentComponent } from './pages/justifycontent/justifycontent.component';
import { AlignitemsComponent } from './pages/alignitems/alignitems.component';
import { FlexwrapComponent } from './pages/flexwrap/flexwrap.component';
import { AligncontentComponent } from './pages/aligncontent/aligncontent.component';
import { GapComponent } from './pages/gap/gap.component';





const routes: Routes = [
  {path: 'display', component: DisplayComponent},
  {path: 'flexdirection', component: FlexdirectionComponent },
  {path: 'justifycontent', component: JustifycontentComponent  },
  {path: 'alignitems', component: AlignitemsComponent  },
  {path: 'flexwrap', component: FlexwrapComponent   },
  {path: 'aligncontent', component: AligncontentComponent   },
  {path: 'gap', component: GapComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
