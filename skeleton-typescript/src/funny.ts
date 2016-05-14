import {autoinject} from 'aurelia-framework';
import {IRedditPosts} from './services/redditservice'
import {ApplicationService} from './services/applicationservice'

@autoinject
export class Funny {
  heading = 'Reddit Funny';
  posts: IRedditPosts;

  constructor(private appSvc: ApplicationService) {
    
  }

  activate() {
    //this.posts = this.appSvc.funnyPosts;
    return this.appSvc.getFunnies()
      .then(result => { 
        this.posts = result;
        this.appSvc.funnyPosts = this.posts;
      }, (error) => {
        console.log(`Error: ${error}`);
      });
  }
}