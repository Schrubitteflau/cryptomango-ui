// https://github.com/Web3Modal/web3modal
import Web3Modal from "web3modal";

const providerOptions = {
    /*injected: {
        display: {
          name: "Metamask",
          description: "Connect with the provider in your Browser",
        },
        package: null,
    },*/
    binancechainwallet: {
        package: true
    }
};

export const web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions
});
