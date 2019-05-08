const corsAnywhere = "https://cors-anywhere.herokuapp.com";
const endPointUrl = "http://webapi.stakeways.a2hosted.com"
const apiName = "api/services/app";
const baseUrl = `${corsAnywhere}/${endPointUrl}/${apiName}`;

export const registerEndpoint = `${baseUrl}/Account/Register`
