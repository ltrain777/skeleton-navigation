import {autoinject} from 'aurelia-framework';
import {RedditService, IRedditPosts} from './services/redditservice'

@autoinject
export class Funny {
  heading = 'Reddit Funnies';
  posts: IRedditPosts;

  constructor(private redditSvc: RedditService) {
    
  }

  activate() {
    return this.redditSvc.getGifPosts()
      .then(result => { this.posts = result });
  }
}