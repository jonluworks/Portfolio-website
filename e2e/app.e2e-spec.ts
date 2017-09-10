import { JonLuInfoPage } from './app.po';

describe('jon-lu-info App', () => {
  let page: JonLuInfoPage;

  beforeEach(() => {
    page = new JonLuInfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
