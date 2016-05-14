import {autoinject} from 'aurelia-framework';
import {IRedditPosts} from './services/redditservice'
import {ApplicationService} from './services/applicationservice'

@autoinject
export class Funny {
  heading = 'Reddit Gifs';
  posts: IRedditPosts;

  constructor(private appSvc: ApplicationService) {
  }

  activate() {
    //this.posts = this.appSvc.gifPosts;
    return this.appSvc.getGifs()
      .then(gifs => {
        this.posts = gifs
      })
  }
}