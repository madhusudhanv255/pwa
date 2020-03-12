import { environment } from './../environments/environment';

const env = environment.apiUrl;
const zohoenv = environment.zohoApiUrl;
export const AppRestEndPoint = {
    EVENTS_LIST: env + '/meetings',
    SIGN_IN: zohoenv + '/user/login',
    AUTH_LOGIN: env + '/users/auth_login',

};



