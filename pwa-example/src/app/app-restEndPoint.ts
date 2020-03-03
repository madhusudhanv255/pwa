import { environment } from './../environments/environment';

const env = environment.apiUrl;
export const AppRestEndPoint = {
    EVENTS_LIST: env + '/meetings',
    SIGN_IN: env + '/users/signin'

};



