import {Router, RouterConfiguration} from 'aurelia-router'
import {autoinject} from 'aurelia-framework';
import {IGitHubUser} from './services/githubservice'
import {ApplicationService} from './services/applicationservice'

@autoinject
export class App {
  router: MyRouter;
  private user: IGitHubUser
  
  constructor(private appSvc: ApplicationService){}
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'userprofile',   name: 'userprofile',  moduleId: 'userprofile', nav: false, title: 'User Profile' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'funny',         name: 'funny',        moduleId: 'funny',        nav: true, title: 'Reddit Funny' },
      { route: 'gifs',         name: 'gifs',        moduleId: 'gifs',        nav: true, title: 'Reddit Gifs' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = <MyRouter>router;
    this.router.user = this.user;
  }
  
  activate() {
    return this.appSvc.getSelf("Zoe Sheltie")
      .then((user) => {
        this.user = user;
        this.user.type = this.getInitials(user.login);
        
      });
  }

  private getInitials(name: string): string {
    return name.replace(/\s*([^\s])[^\s]*\s*/g, '$1').toUpperCase();
  }
}

interface MyRouter extends Router{
  user: IGitHubUser
}
