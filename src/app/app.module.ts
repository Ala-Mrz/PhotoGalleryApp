import { appRoutes } from './routes';
import { ImageFilterPipe } from './shared/filter.pipe';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './shared/image.service';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
