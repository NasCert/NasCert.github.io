function checkEmail(email) {
    var emailRegex = /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+/g;
    var isEmail = email.match(emailRegex);
    isEmail = isEmail && isEmail.length > 0;
    if (!isEmail) {
        bootbox.dialog({
            title: 'Invalid Email',
            message: "Please provide a valid email address",
        });
        return isEmail;
    }
    return isEmail;
}

function checkWallet(wallet) {
    var walletRegex = /(0x)?[\w]{48}/g;
    var isWallet = wallet.match(walletRegex);
    isWallet = isWallet && isWallet.length > 0;
    if (!isWallet) {
        bootbox.dialog({
            title: 'Invalid Wallet Address',
            message: "[0x] + hex string(40 letters) + checksum(8 letters)",
        });
        return isWallet;
    }
    return isWallet;
}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}