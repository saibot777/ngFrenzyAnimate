import { FrenzyAnimatePage } from './app.po';

describe('frenzy-animate App', () => {
  let page: FrenzyAnimatePage;

  beforeEach(() => {
    page = new FrenzyAnimatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
