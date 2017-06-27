import { AngtwoappPage } from './app.po';

describe('angtwoapp App', () => {
  let page: AngtwoappPage;

  beforeEach(() => {
    page = new AngtwoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
