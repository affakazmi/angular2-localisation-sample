import { Angular2UrduTextPage } from './app.po';

describe('angular2-urdu-text App', function() {
  let page: Angular2UrduTextPage;

  beforeEach(() => {
    page = new Angular2UrduTextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
