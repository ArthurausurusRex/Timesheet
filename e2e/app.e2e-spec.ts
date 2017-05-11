import { TimesheetRealPage } from './app.po';

describe('timesheet-real App', function() {
  let page: TimesheetRealPage;

  beforeEach(() => {
    page = new TimesheetRealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
