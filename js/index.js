
var CONTRACT_ADDRESS = '0xD4491f152aE986CEaaa4b5D980A1065Ac2D7ebb1';

var referrer = '0x21D08fB1E3d21183b369994234b0fF72bd09309b'
var upline = '0x21D08fB1E3d21183b369994234b0fF72bd09309b'

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var refurl = getUrlParameter('ref');

if (refurl) {
    localStorage.setItem('ref', refurl);
}

upline = localStorage.getItem('ref') ? localStorage.getItem('ref') : referrer;

var ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "interventionType",
                "type": "uint256"
            }
        ],
        "name": "councilIntervention",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "desyncTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "ref",
                "type": "address"
            }
        ],
        "name": "fabricateTime",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_treasuryWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_marketingWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_devWallet2",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_whitelistUNIX",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_whitelistLength",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Received",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "seedMarket",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "ref",
                "type": "address"
            }
        ],
        "name": "syncTKeepers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "whitelistAdd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "whitelistRemove",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "eth",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "contractBalance",
                "type": "uint256"
            }
        ],
        "name": "calculateTimeBuy",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "eth",
                "type": "uint256"
            }
        ],
        "name": "calculateTimeBuySimple",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "calculateTimeSell",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "claimedTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "councilFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "devWallet2",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "getMyKeepers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "getMyTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getProgressiveMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "getTimeSinceLastConstruct",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "interventionStep",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "keepers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastConstruct",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketingWallet",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextInterventionUNIX",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "publicUNIX",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "referrals",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TIME_PER_KEEPER",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "treasuryWallet",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "whitelisters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "whitelistUNIX",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

var tokenContract;

var currentAddr;
var contract = null;
var gasPrice = '5500000000000' //10000000000
var percent1, percent2, percent3, percent4, percent5, percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;

var affiliate = 0;


/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
const DeFiWeb3Connector = window.DeFiConnect.DeFiWeb3Connector;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;


/**
 * Setup the orchestra
 */
function init() {

    console.log("Initializing");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    // console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);




    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    25: "https://evm.cronos.org/",
                },
                network: 'cronos',
                chainId: 25
            },
            qrcodeModalOptions: {
                mobileLinks: [
                    "metamask",
                    "trust",
                    "argent",
                    "rainbow",
                    "imtoken",
                    "pillar",
                ]
            }
        }


    };


    web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);

}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);
    if (contract) {
        web3.eth.getAccounts().then(res => {
            currentAddr = res[0];
            
        })
        const accounts = await web3.eth.getAccounts();
        currentAddr = accounts[0];
        document.querySelector('#connect-btn1').innerHTML = currentAddr.substring(0, 3) + "..." + currentAddr.substring(currentAddr.length - 3);
        await getContractBalance();
        web3.eth.getBalance(currentAddr).then(bal => {
            bal = web3.utils.fromWei(bal);
            bal = (Math.round(bal * 100) / 100).toFixed(2);
            $("#walletBalance").text(bal + " CRO")
        })
        getFishermen(currentAddr)
        getRewards(currentAddr)
    }


}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {


    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector("#connect-btn1").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#connect-btn1").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
        runAPP();
        fetchAccountData();

    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;


}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    init();
    document.querySelector("#connect-btn1").addEventListener("click", onConnect);
    // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});



// async function Connect() {
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum)
//         try {
//             await ethereum.enable()

//             let accounts = await web3.eth.getAccounts()
//             currentAddr = accounts[0]
//             console.log(currentAddr)
//             runAPP()
//             return
//         } catch (error) {
//             console.error(error)
//         }
//     } else if (window.web3) {
//         window.web3 = new Web3(web3.currentProvider)

//         let accounts = await web3.eth.getAccounts()
//         currentAddr = accounts[0]
//         console.log(currentAddr)
//         runAPP()
//         return
//     }
//     //setTimeout(checkForBinanceChain, 1500)
// }
// async function checkForBinanceChain() {
//     try {
//         await window.BinanceChain.enable()
//         console.log(typeof (window.BinanceChain))
//         if (window.BinanceChain) {
//             console.log('BinanceChain')
//             await BinanceChain.enable()
//             window.web3 = new Web3(window.BinanceChain)
//             let accounts = await web3.eth.getAccounts()
//             currentAddr = accounts[0]

//             console.log(contract)
//             runAPP()
//             return
//         }
//     } catch (e) { }
// }

async function runAPP() {
    const web3 = new Web3(provider);
    let networkID = await web3.eth.net.getId();
    console.log(networkID);
    if (networkID == 25) { // 56 - BSC Live. 97 -- BSC Test
        contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
        console.log(contract)
    }
}

setTimeout(() => {
    if (contract) {
        $("#refString").val('https://' + window.location.host + '/?ref=' + currentAddr)

    }
}, 5000);

// setInterval(() => {
//     if (contract) {

//         getContractBalance();
//         web3.eth.getBalance(currentAddr).then(bal => {
//             bal = web3.utils.fromWei(bal);
//             bal = (Math.round(bal * 100) / 100).toFixed(2);
//             $("#walletBalance").text(bal + " CRO")
//         })
//         getFishermen(currentAddr)
//         getRewards(currentAddr)
//     }

// }, 5000);



function approve() {
    tokenContract.methods.approve(CONTRACT_ADDRESS, web3.utils.toWei("1")).send({ from: currentAddr });
}

function stakeBNB() {
    try {
        if (contract) {
            const web3 = new Web3(provider);
            var amount = document.getElementById("app__inputbnb").value;
            amount = web3.utils.toWei(String(amount), 'ether')

            contract.methods.fabricateTime(upline/*, (trxspenddoc.value*1e9)*/)
                .send({
                    value: amount,
                    from: currentAddr,
                    gasPrice: gasPrice,
                })

        }
        await getContractBalance();
    } catch (error) {
        console.log(error)
        // document.querySelector('#alert-error-https').innerHTML(error);
    }

}

function sellFish() {
    try {
        if (contract) {
            contract.methods.desyncTime()
                .send({
                    // value: amount,
                    from: currentAddr,
                    gasPrice: gasPrice,
                })

        }
      await getContractBalance();
    } catch (error) {
        console.log(error)
        // document.querySelector('#alert-error-https').innerHTML(error);
    }
}

function compound() {
    try {
        if (contract) {
            contract.methods.syncTKeepers(upline)
                .send({
                    // value: amount,
                    from: currentAddr,
                    gasPrice: gasPrice,
                })

        }
        await getContractBalance();
    } catch (error) {
        console.log(error)
        // document.querySelector('#alert-error-https').innerHTML(error);
    }
}

function getContractBalance() {
    const web3 = new Web3(provider);
    contract.methods.getBalance().call().then(res => {
        res = web3.utils.fromWei(res);
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#contractBalance").text(res + " CRO");
        console.log(res);
    })

}

function getFishermen(currentAddr) {

    contract.methods.getMyKeepers(currentAddr).call().then(res => {
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#yourFishermen").text(res + " BAKERS");
        console.log(res);
    })
}

function getRewards(currentAddr) {
    const web3 = new Web3(provider);
    contract.methods.getMyTime(currentAddr).call().then(res => {
        res = web3.utils.fromWei(res);
        fix1 = 4910000000
        res1 = res * fix1;
        res2 = (Math.abs(res1 * 100) / 100).toFixed(4);
        $("#yourRewards").text(res2 + " CRO");
        console.log(res);
    })
}


function calcuate(number) {
    console.log(number);
    if (number && number >= 0)
        contract.methods.calculatePrinterBuySimple((number * 1e7).toString()).call().then(res => {
            console.log((res / 1e7));
        })

}

function spendLimit(callback) {
    const web3 = new Web3(provider);
    tokenContract.methods.allowance(currentAddr, contract).call().then(result => {
        callback(web3.utils.fromWei(result));
    }).catch((err) => {
        console.log(err)
    });
}

function calculateprinter(anzahl) {
    const web3 = new Web3(provider);
    tokenContract.methods.allowance(currentAddr, contract).call().then(result => {
        callback(web3.utils.fromWei(result));
    }).catch((err) => {
        console.log(err)
    });
}

function userBalance(callback) {
    const web3 = new Web3(provider);
    tokenContract.methods.balanceOf(currentAddr).call().then(result => {
        var amt = web3.utils.fromWei(result)
        // console.log("balance" + amt)
        callback(amt);
        usrBal = amt;
    }).catch((err) => {
        console.log(err)
    });
}


