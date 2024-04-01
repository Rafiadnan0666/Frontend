function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Download selama 3 detik");
            resolve(); 
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Verify");
            resolve(); 
        }, 2000);
    });
}

function notify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Download selesai");
            resolve(); 
        }, 0); 
    });
}

function main() {
 download().then(verify).then(notify).catch((err)=>{console.error(err)});
}

main();
