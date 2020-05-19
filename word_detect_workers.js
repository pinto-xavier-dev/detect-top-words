var i = 0;
onmessage = e => { 
    let text = e.data; 
    console.log("bigtext coming here"+text);
   // timedCount(text); 
}

/*function timedCount(text) {
  i = i + 1;
  result_text = i+")"+text;
  postMessage(result_text);
  setTimeout(timedCount,467,text);
}
*/
