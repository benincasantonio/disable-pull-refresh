var disabled = false;

function disablePullDownRefresh() {
    checkIfIsEnabled();
    document.addEventListener('touchmove', (e) => checkIfIsEnabled());
}

function checkIfIsEnabled() {
    var position = window.pageYOffset || window.scrollTop || 0;

    if(position === 0) {
        document.querySelector('html').style.touchAction = "pan-down";
        disabled = true;
    } else if(disabled) {
        document.querySelector('html').style.touchAction = "unset";
        disabled = false
    }
}


module.exports = disablePullDownRefresh;