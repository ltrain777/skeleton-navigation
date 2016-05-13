import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@autoinject
export class RedditService {
  constructor(private http: HttpClient) {
    
  }

  funny: IRedditPosts;
  gifs: IRedditPosts;
  
  getFunnyPosts() : Promise<IRedditPosts> {
    return this.http.jsonp('http://reddit.com/r/funny.json', 'jsonp')
      .then(response => { 
          this.funny = response.response.data.children;
          return this.funny;
      });
  }
  
  getGifPosts() : Promise<IRedditPosts> {
    return this.http.jsonp('http://reddit.com/r/gifs.json', 'jsonp')
      .then(response => { 
          this.gifs = response.response.data.children;
          return this.gifs;
      });
  }
}

export interface IRedditPosts{
    kind: string;
    data: {
        thumbnail: string;
        permalink: string;
        title: string;
    }
}