// const hostName = "https://wallet-service-uat.k8.isw.la";
const apiVersion = "v1";
const apiName = "/wallet/api";
const baseUrl = `${apiName}/${apiVersion}`;

export const apiUrls = {
  schemes: {
    base: `${baseUrl}/schemes`
  },
  cardtypes: {
    base: `${baseUrl}/cardtypes`
  },
  idtypes: {
    base: `${baseUrl}/idtypes`
  },
  issuers: {
    base: `${baseUrl}/issuer`,
    core: `${baseUrl}/issuer/core`
  },
  domains: {
    base: `${baseUrl}/domains`,
    core: `${baseUrl}/domains/core`
  },
  clients: {
    base: `${baseUrl}/clients`
  },
  currencies: {
    base: `${baseUrl}/currencies`,
    core: `${baseUrl}/currencies/core`
  },
  institutions: {
    base: `${baseUrl}/institutions`
  },
  configs: {
    base: `${baseUrl}/configs`
  },
  status: {
    card: `${baseUrl}/cards/status`,
    wallet: `${baseUrl}/wallets/status`
  }
};
