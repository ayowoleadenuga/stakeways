const corsAnywhere = "https://cors-anywhere.herokuapp.com";
const endPointUrl = "http://webapi.stakeways.a2hosted.com"
const apiName = "api";
const baseUrl = `${corsAnywhere}/${endPointUrl}/${apiName}`;

export const registerEndpoint = `${baseUrl}/services/app/Account/Register`
export const authEndpoint = `${baseUrl}/TokenAuth/Authenticate`
