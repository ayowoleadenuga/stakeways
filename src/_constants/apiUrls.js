
const apiVersion = "v1";
const apiName = "http://app.stakeways.a2hosted.com";
const baseUrl = `${apiName}`;

export const apiUrls = {
history:{
betHistory:`${baseUrl}/Bet/GetHistory`,
transactionhistory:`${baseUrl}/`,
login:`${baseUrl}/api/TokenAuth/Authenticate
`
},
//this urls is for test purposes only..

  
  // schemes: {
  //   base: `${baseUrl}/schemes`
  // },
  // cardtypes: {
  //   base: `${baseUrl}/cardtypes`
  // },
  // idtypes: {
  //   base: `${baseUrl}/idtypes`
  // },
  // issuers: {
  //   base: `${baseUrl}/issuer`,
  //   core: `${baseUrl}/issuer/core`
  // },
  // domains: {
  //   base: `${baseUrl}/domains`,
  //   core: `${baseUrl}/domains/core`
  // },
  // clients: {
  //   base: `${baseUrl}/clients`
  // },
  // currencies: {
  //   base: `${baseUrl}/currencies`,
  //   core: `${baseUrl}/currencies/core`
  // },
  // institutions: {
  //   base: `${baseUrl}/institutions`
  // },
  // configs: {
  //   base: `${baseUrl}/configs`
  // },
  // status: {
  //   card: `${baseUrl}/cards/status`,
  //   wallet: `${baseUrl}/wallets/status`
  // }
};
