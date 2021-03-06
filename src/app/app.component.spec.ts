import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      providers: [
        AppComponent
      ]
    }).compileComponents();

    component = TestBed.inject(AppComponent);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title Leomund\'s Tiny Forge`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Leomund\'s Tiny Forge');
  });

  it('should toggle when function is activated', () => {
    component.sideBarShown = false;
    component.toggleSidebar();
    expect(component.sideBarShown).toEqual(true);
  });
});
