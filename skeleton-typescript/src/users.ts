import {autoinject} from 'aurelia-framework';
import {GitHubService, IGitHubUser} from './services/githubservice'

@autoinject
export class Users {
  heading = 'Github Users';
  users: Array<IGitHubUser>;

  constructor(private gitHubSvc: GitHubService) {
  }

  activate() {
    return this.gitHubSvc.getUsers()
      .then(users => {
        this.users = users
      });
  }
}
