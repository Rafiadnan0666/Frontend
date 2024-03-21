function download() {
    setTimeout((callbackVerify) => {
    console.log("Download selama 3 detik");
    callbackVerify()
    },3000)

}

function verify() {
    setTimeout((callbackNotify) => {
    console.log("Verify");
    callbackNotify()
    },2000)
  
}

function notify() {
    setTimeout(() => {
    console.log("Download selesai");
    })
}


function main() {
    // solusinya callback 
    download(function () {
        verify(function () {
            notify();
        });
    })
}

main()