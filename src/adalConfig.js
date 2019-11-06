import { AuthenticationContext} from 'react-adal';
 
export const adalConfig = {
  tenant: '769c0ae4-5818-4348-92df-98ceaa209bbd',
  clientId: '898e57ba-049d-46c5-b471-1e2cb3ae3e66',
  endpoints: {
    api: '898e57ba-049d-46c5-b471-1e2cb3ae3e66',
  },
  cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);