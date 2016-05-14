import {autoinject} from 'aurelia-framework';
import {IGitHubUser} from './services/githubservice'
import {ApplicationService} from './services/applicationservice'

@autoinject
export class Users {
  heading = 'Github Users';
  users: Array<IGitHubUser>;

  constructor(private appSvc: ApplicationService) {
  }

  activate() {
    this.users = this.appSvc.users;
  }
}
