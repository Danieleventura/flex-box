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
  {path: '/flex-box/display', component: DisplayComponent},
  {path: '/flex-box/flexdirection', component: FlexdirectionComponent },
  {path: '/flex-box/justifycontent', component: JustifycontentComponent  },
  {path: '/flex-box/alignitems', component: AlignitemsComponent  },
  {path: '/flex-box/flexwrap', component: FlexwrapComponent   },
  {path: '/flex-box/aligncontent', component: AligncontentComponent   },
  {path: '/flex-box/gap', component: GapComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
