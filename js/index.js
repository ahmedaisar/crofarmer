
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
var apprunning = false;

 

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
const DeFiWeb3Connector = window.DeFiConnect.DeFiWeb3Connector;
// const notify = window.notify;

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
 
    $.notify.addStyle('buns', {
        html: '<div><span data-notify-text/></div>',
        classes: {
          base: {
            "white-space": "nowrap",
            "padding": "10px 15px",
            "background-color": "#000b39",
          }, 
          supaBuns: {
            "color": "bfdfee",
            "background-color": "#000b39"
          }
        }
       
      });
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    25: "https://evm.cronos.org/",
                }
            },
            qrcodeModalOptions: {
                mobileLinks: [
                    "trust",
                    "metamask",
                    "rainbow",
                    "argent",
                    "pillar",
                    "imtoken",
                    "bitpay",
                    "crypto",
                    "mathwallet",
                    "tokenpocket",
                    "onto",
                ]
            }
        },
        coinbasewallet: {
            package: CoinbaseWalletSDK, // Required
            options: {
              appName: "BakedBuns.Farm", // Required
              rpc: {
                25: "https://evm.cronos.org/",
            },
              chainId: 25,
              darkMode: true
            }
          },
          binancechainwallet: {
            package: true
          }
    };

    web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
        theme: "dark",
        disableInjectedProvider: false,
    });


    console.log("Web3Modal instance is", web3Modal);

}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet

    try {
        const web3 = new Web3(provider);
        if (contract) {
            await web3.eth.getAccounts().then(res => {
                currentAddr = res[0]
            })

            // $("#connect-btn1").text(currentAddr)
            $("#connect-btn1").html(currentAddr.substring(0, 3) + "..." + currentAddr.substring(currentAddr.length - 3));
            await getContractBalance();
            await getSupply();
            await setBurnAmount();
            await setBurnCountdown();
            web3.eth.getBalance(currentAddr).then(bal => {
                bal = web3.utils.fromWei(bal);
                bal = (Math.round(bal * 100) / 100).toFixed(2);
                $("#walletBalance").text(bal + " CRO")
            })
            await getFishermen(currentAddr)
            await getRewards(currentAddr)

        }
    } catch (error) {
        console.log(error);
        $.notify("Cound't make a connection.", {
            clickToHide: true,
            autoHide: true,
            style: 'buns',
            className: 'supaBuns',
            globalPosition: 'bottom right'
          });
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
            const web3 = new Web3(provider);
            const chainIdget = await web3.eth.getChainId();
            if (chainIdget !== 25) {
                $.notify("Wrong network, switch to Cronos.", {
                    clickToHide: true,
                    autoHide: true,
                    style: 'buns',
                    className: 'supaBuns',
                    globalPosition: 'bottom right'
                  });
                await switchNetwork();
            } else {
                runAPP();
                fetchAccountData();
                $.notify("Connected, refreshing..", {
                    clickToHide: true,
                    autoHide: true,
                    style: 'buns',
                    className: 'supaBuns',
                    globalPosition: 'bottom right',
                  });
            }

     

    } catch (e) {
        $.notify("Could not get a wallet connection.", {
            clickToHide: true,
            autoHide: true,
            style: 'buns',
            className: 'supaBuns',
            globalPosition: 'bottom right'
          });
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

const switchNetwork = async () => {
    try {
    const web3 = new Web3(provider);
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(25) }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: web3.utils.toHex(56),
                chainName: "Cronos Chain",
                rpcUrls: ["https://evm.cronos.org/"],
                blockExplorerUrls: ["https://cronoscan.com/"],
              },
            ],
          });
        } catch (addError) {
          throw addError;
        }
      }
    }
  };


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    init();
    document.querySelector("#connect-btn1").addEventListener("click", onConnect);
    // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});

 

async function runAPP() {
    const web3 = new Web3(provider);
    let networkID = await web3.eth.net.getId();
    console.log(networkID);
    if (networkID == 25) { // 56 - BSC Live. 97 -- BSC Test
        contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
        apprunning = true;
        await setBurnAmount();
       
        console.log(contract)
    }
}



setInterval(() => {
    if (contract) {
        $("#refString").val('https://' + window.location.host + '/?ref=' + currentAddr)

    }
}, 5000);

setInterval(() => {
    if (contract) {
        const web3 = new Web3(provider);

        web3.eth.getAccounts().then(res => {
            currentAddr = res[0]
        })

        $("#connect-btn1").html(currentAddr.substring(0, 3) + "..." + currentAddr.substring(currentAddr.length - 3));
        // $("#connect-btn1").text(currentAddr)

          getContractBalance();
          getSupply();
          setBurnCountdown();
        web3.eth.getBalance(currentAddr).then(bal => {
            bal = web3.utils.fromWei(bal);
            bal = (Math.round(bal * 100) / 100).toFixed(2);
            $("#walletBalance").text(bal + " CRO")
        })
        getFishermen(currentAddr)
        getRewards();
        calculateBuns();
        lastRebake();
        getMyTVL();
    }

}, 500);



function approve() {
    tokenContract.methods.approve(CONTRACT_ADDRESS, web3.utils.toWei("1")).send({ from: currentAddr });
}

function stakeBNB() {
    
    try {
        var amount = document.getElementById("app__inputbnb").value;
        if (contract && amount >= 100) {
            const web3 = new Web3(provider);
            
            amount = web3.utils.toWei(String(amount), 'ether')

            contract.methods.fabricateTime(upline/*, (trxspenddoc.value*1e9)*/)
                .send({
                    value: amount,
                    from: currentAddr,
                    gasPrice: gasPrice,
                })

                $.notify("Hiring bakers.. Hold on", {
                    clickToHide: true,
                    autoHide: true,
                    style: 'buns',
                    className: 'supaBuns',
                    globalPosition: 'bottom right'
                  });
        } else{
            $.notify("Min investment should be atleast 100 $CRO", {
                clickToHide: true,
                autoHide: true,
                style: 'buns',
                className: 'supaBuns',
                globalPosition: 'bottom right'
              });
        }
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
            $.notify("Redeeming yield.. Hold on", {
                clickToHide: true,
                autoHide: true,
                style: 'buns',
                className: 'supaBuns',
                globalPosition: 'bottom right'
                });

        }
    } catch (error) {
        console.log(error)
        $.notify("Network error, try again..", {
            clickToHide: true,
            autoHide: true,
            style: 'buns',
            className: 'supaBuns',
            globalPosition: 'bottom right'
            });
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
                $.notify("Re-baking current earnings.. Hold on", {
                    clickToHide: true,
                    autoHide: true,
                    style: 'buns',
                    className: 'supaBuns',
                    globalPosition: 'bottom right'
                  });
        }
    } catch (error) {
        console.log(error)
        $.notify("Network error, try again..", {
            clickToHide: true,
            autoHide: true,
            style: 'buns',
            className: 'supaBuns',
            globalPosition: 'bottom right'
            });
        // document.querySelector('#alert-error-https').innerHTML(error);
    }
}

async function getContractBalance() {
    const web3 = new Web3(provider);
    await contract.methods.getBalance().call().then(res => {
        res = web3.utils.fromWei(res);
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#contractBalance").text(res + " CRO");
        console.log(res);
    })

}

async function getFishermen(currentAddr) {

    contract.methods.getMyKeepers(currentAddr).call().then(res => {
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#yourFishermen").text(res + " BAKERS");
        console.log(res);
    })
}

async function getRewards() {
   const web3 = new Web3(provider);
    try {
        if(contract){
            contract.methods.getMyTime(currentAddr).call().then(res => {
                contract.methods.calculateTimeSell(res).call().then(res2 => {
                    console.log(res2);
                    res3 = web3.utils.fromWei(res2);
                    $("#yourRewards").text((Math.round(res3 * 100) / 100).toFixed(2) + " CRO");
                    
                });
            });     
        }
    } catch (error) {
        console.log(error);
    }
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

async function setBurnAmount(){
    if(apprunning){
        document.getElementById("totalBurned").innerHTML = '4,188,687,606,446 BUNS';
    }
}

async function getSupply() {
    const web3 = new Web3(provider);
    contract.methods.marketTime().call().then(res => {
        let nf = new Intl.NumberFormat('en-US');
       // res = res.toLocaleString();
       // res = (Math.round(res * 100) / 100).toFixed(2);
        $("#supplyBalance").text(nf.format(res) + " BUNS");
        console.log(res);
    })

}

async function setBurnCountdown(){
    var countDownDate = new Date("August 15 2022 12:01:00 GMT+05:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if(apprunning){
            document.getElementById("nextBurn").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " ;
        }
        if (distance < 0) {
            clearInterval(x);
             
        }
    }, 1000);
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

function calculateBuns() {
    const web3 = new Web3(provider);
       try {
        if(contract){
            let nf = new Intl.NumberFormat('en-US');   
            contract.methods.getMyTime(currentAddr).call().then(res => {
                $("#app__buns").text(nf.format(res));
                console.log(res)   
            })
            
        }
       } catch (error) {
        console.log(error)
       } 
        

}

function lastRebake() {
    const web3 = new Web3(provider);
       try {
        if(contract){
           
            contract.methods.lastConstruct(currentAddr).call().then(res => {
                $("#lastRebake").text(timeConverter(res));
                console.log(res);      
            })
            
        }
       } catch (error) {
        console.log(error)
       } 
        

}

function calcuateBakersForCro() {
    const web3 = new Web3(provider);
    var amt = document.getElementById('app__inputbnb').value;
    var wei = web3.utils.toWei(amt);
       try {
        if(contract){
            contract.methods.calculateTimeBuySimple(wei).call().then(v => {     
                $("#app__rewards").text((v/1440000));
                   
            })
        }
       } catch (error) {
        console.log(error)
       } 

}
function getBunsYield(){
    const web3 = new Web3(provider);
    const timePerBaker = String(1440000);
    const day = String(86400);
    const amount = document.getElementById('app__inputbnb').value;
    const wei = web3.utils.toWei(amount, 'ether');
    let bakers; 
    let bunsPerDay;
    if(amount) {
    contract.methods.calculateTimeBuySimple(wei).call().then(res => { 
        bakers = String(Math.floor(res / timePerBaker)); 
        bunsPerDay = String(Math.floor(day * bakers));
        $("#app__rewards").text(bakers);
        contract.methods.calculateTimeSell(bunsPerDay).call().then(res2 => { 
            ts = web3.utils.fromWei(res2);
            $("#app__rewardsCROValue").text((Math.round(ts * 100) / 100).toFixed(4), 'ether');
            return res2;
        });      
    });
    } else {
        $("#app__rewards").text('');
        $("#app__rewardsCROValue").text('');
    }
}

function getMyTVL() {
    const web3 = new Web3(provider);
       try {
        if(contract){
            let nf = new Intl.NumberFormat('en-US');       
            var timeperbaker = 1440000;
            var bakervalue;
            var totalbakers;
            contract.methods.getMyKeepers(currentAddr).call().then(bakers => {
                totalbakers = bakers;
                 contract.methods.calculateTimeSell(timeperbaker).call().then(res => {
                    bakervalue = web3.utils.fromWei(res, "ether");
                    $("#app__tvl").text(((bakervalue * totalbakers)).toFixed(4) + " CRO");
                })
            }) 
            
            
        }
       } catch (error) {
        console.log(error)
       } 

}
