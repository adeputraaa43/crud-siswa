function logMemoryUsage() {
    if (console.memory) {
      console.log(`Total JS heap size: ${console.memory.totalJSHeapSize} bytes`);
      console.log(`Used JS heap size: ${console.memory.usedJSHeapSize} bytes`);
      console.log(`JS heap size limit: ${console.memory.jsHeapSizeLimit} bytes`);
    } else {
      console.log("console.memory is not supported in this browser");
    }
  }
  
  // Contoh fungsi yang akan kita ukur penggunaan memorinya
  function exampleFunction() {
    const largeArray = new Array(1e6).fill('example'); // Membuat array besar untuk penggunaan memori
    console.log(`Array length: ${largeArray.length}`);
  }
  
  // Memanggil fungsi untuk log memori sebelum dan sesudah eksekusi
  console.log("Memory usage before function execution:");
  logMemoryUsage();
  
  exampleFunction();
  
  console.log("Memory usage after function execution:");
  logMemoryUsage();
  