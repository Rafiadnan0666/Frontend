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

async function main() {
    try {
        await download()
        await verify()
        await notify()
    }
    catch(err) {
        console.error('Error:', err);
    }
}

main();
