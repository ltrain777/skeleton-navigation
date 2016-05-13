import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class GitHubService {

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  getUsers() : Promise<Array<IGitHubUser>> {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => {return users});
  }
}

export interface IGitHubUser{
    id: number;
    avatar_url: string;
    html_url: string;
    login: string;
    type: string;
}