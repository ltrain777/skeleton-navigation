import {autoinject} from 'aurelia-framework'
import {GitHubService, IGitHubUser} from './githubservice'
import {RedditService, IRedditPosts} from './redditservice'

@autoinject
export class ApplicationService {
    
    constructor(private gitHubSvc: GitHubService, private redditSvc: RedditService){
    }
    
    users: Array<IGitHubUser>;
    funnyPosts: IRedditPosts;
    gifPosts: IRedditPosts;  
    
    loggedOnUser: IGitHubUser  
    
    
    
    getSelf(login): Promise<IGitHubUser> {
        var promise = new Promise<IGitHubUser>((resolve) => {
            setTimeout(() => {
                this.loggedOnUser = <IGitHubUser>{
                    avatar_url: `http://avatar/${login}`,
                    html_url: `http://htmlurl/${login}`,
                    login: login
                }
                resolve(this.loggedOnUser)
            }, 1000);
            
        })
        
        return promise
    }
    
    getUsers(): Promise<Array<IGitHubUser>> {
        var promise = new Promise<Array<IGitHubUser>>((resolve, reject) => {
            this.gitHubSvc.getUsers()
                .then(users => {
                    this.users = users;
                    resolve(this.users);
                })
                .catch(error => { 
                    reject(error); 
                });
        });
        
        return promise;
    }
    
    getFunnies() : Promise<IRedditPosts> {
        var promise = new Promise<IRedditPosts>((resolve, reject) => {
            this.redditSvc.getFunnyPosts()
                .then(posts => {
                    this.funnyPosts = posts;
                    resolve(this.funnyPosts);
                })
                .catch((error) => {
                    reject(error);
                });
        });
        
        return promise;
    }
    
    getGifs() : Promise<IRedditPosts> {
        var promise = new Promise<IRedditPosts>((resolve, reject) => {
            this.redditSvc.getGifPosts()
                .then(posts => {
                    this.gifPosts = posts;
                    resolve(this.gifPosts);
                })
                .catch(error => {
                    reject(error);
                });
        });
        
        return promise;
    }
}