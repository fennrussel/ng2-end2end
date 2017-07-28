import { Ng2End2endPage } from './app.po';

describe('ng2-end2end App', () => {
  let page: Ng2End2endPage;

  beforeEach(() => {
    page = new Ng2End2endPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
