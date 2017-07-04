import { PhotoGalleryAppPage } from './app.po';

describe('photo-gallery-app App', () => {
  let page: PhotoGalleryAppPage;

  beforeEach(() => {
    page = new PhotoGalleryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
