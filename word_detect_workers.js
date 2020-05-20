var i = 0;
var bigText ="";
var clean_bigtext ="";
onmessage = e => { 
  bigText = e.data; 
  //console.log("bigtext coming here"+bigText);
  // timedCount(text); 
  let result=  escapeSpecialChar();
  clean_bigtext = result =  escapeConjuctions(result);
  result =  splitText(result);

  var result_arr = wordcounter(result);
  var dispay_result =[];
  for(ix in result_arr ){
    dispay_result.push({ name: result_arr[ix][0], count:result_arr[ix][1] });
   
  }
  console.log(dispay_result);
  postMessage(JSON.stringify(dispay_result));

}



function escapeSpecialChar(){
   let result = bigText.replace(/[&\/\\#,-_|`@^;+()$~%.'":*?<>{}]/g, '');
   result = result.replace( /[\r\n]+/g,'');  // new line  remove
   return result;
}

function escapeConjuctions(result){
// remove this that they thier  then   having have being been untill ..etc
 return result;
}

function splitText(result){
 let arrOfWordsTemp = result.split(' ');
 let setOfWordsTemp = new Set([]);
 for(i=0;i<arrOfWordsTemp.length;i++){
    arrOfWordsTemp[i] = arrOfWordsTemp[i].replace(/^\s+|\s+$/g,'');
    arrOfWordsTemp[i] = arrOfWordsTemp[i].replace(/\[\]/g,'');
    if( arrOfWordsTemp[i].length>3){
        setOfWordsTemp.add(arrOfWordsTemp[i]);
    }
 }
 return setOfWordsTemp;
}


function wordcounter(result){
   count_result =[];
   let itm =[];
   for(item of result ){
       Regexpression = new RegExp(item, 'g');
        itm = Array.from(clean_bigtext.matchAll(Regexpression));
        count_length = itm.length;
        console.log(count_length);
       count_result.push([item,count_length]);  
   }
   console.log(count_result);
   //discending  order sort
   return sortDiscendingOrder(count_result);
}

function sortDiscendingOrder(count_result){
    console.log('/////////////////////////////',count_result);
    let sortedArray = count_result.sort(function(a, b) {
        return b[1] - a[1];
      });
     
    return sortedArray.splice(0,10) ;//top 10
}