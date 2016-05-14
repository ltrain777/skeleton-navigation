import {autoinject} from 'aurelia-framework';
import {ApplicationService} from './services/applicationservice'

@autoinject
export class UserProfile {
    
    userId: string;
    email: string;
    company: string;
    timeZones: Array<string> = ["US/West","US/Central","US/East"];
    languages: Array<string> = ["French-Canadian","English"];
    
    constructor(private appSvc: ApplicationService){
        
    }
    
    activate(){
        this.userId = this.appSvc.loggedOnUser.login;
        this.email = this.appSvc.loggedOnUser.html_url;
        this.company = this.appSvc.loggedOnUser.avatar_url
    }
    
    submit() {
        alert(`Submitted for ${this.userId}`);
    }
}