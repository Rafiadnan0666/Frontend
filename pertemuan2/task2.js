/** 
 * Function to display download result
 * @param {string} result - 
 */
const showDownload = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(result);
      resolve();
    }, 2000);
  });
}

/**
 * Function to download a file
 *  @param {function} callback - Callback function t
 */
const download = () => {
  console.log("Downloading file...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Windows-12.iso");
    }, 2000);
  });
}

const main = async () => {
  try {
    const result = await download();
    console.log(`Downloaded successfully: ${result}`);
  } catch (error) {
    console.error("Error downloading the file", error);
  }
}

main();



/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
