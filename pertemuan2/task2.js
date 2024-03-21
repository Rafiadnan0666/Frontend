/**
 * Function to display download result
 * @param {string} result = `Windows-12.iso` 
 */

const showDownload = () =>
   new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Just Download Windows-12.iso");
      resolve();
    }, 2000);
  });
/** 
 * Function to download a file
 * @param {function} callback - Callback function show
 */

const download = () => {
  console.log("Download...");
};

const main = async () => {
    try{
        await showDownload().then(download());
    }catch(error){
        console.error("Error", error);
    }
}

main()

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
