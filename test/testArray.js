const x = "jagshiva@in.ibm.com";

const participants =  [
    "Augustina.Ragwitz@ibm.com",
    "beat.buesser@ie.ibm.com",
    "edelsohn@us.ibm.com",
    "dmcinnis@ca.ibm.com",
    "sprouts@us.ibm.com",
    "Taida.Buljina-Prohic@us.ibm.com",
    "michael_muller@us.ibm.com",
    "sara_weber@us.ibm.com",
    "daltonro@ie.ibm.com",
    "rmliddell@us.ibm.com",
    "Andy.M.Ramos@ibm.com",
    "amaresh@us.ibm.com",
    "mdswift@us.ibm.com",
    "tanen@us.ibm.com",
    "alexander_nikulin@ru.ibm.com",
    "siddhara@in.ibm.com",
    "sankalp.sinha@in.ibm.com",
    "mformato@us.ibm.com",
    "jmallard@us.ibm.com",
    "wallyd@us.ibm.com",
    "raichel.sheeja.v.babu@ibm.com",
    "alix.jules@us.ibm.com",
    "ewelina.baginska@ibm.com",
    "marisa@us.ibm.com",
    "fmerch@us.ibm.com",
    "shaheen.khetani@in.ibm.com",
    "shchatto@in.ibm.com"
  ];

  const test = helperCheckStringOnArrayIgnoreCase(participants,x);
  console.log(test);
  
  function helperCheckStringOnArrayIgnoreCase(strOrArray, stringToFind){
    // If the value is undefined/null, return false - it didnt match
    if (!strOrArray) return false;

    var stringToFind = stringToFind.toLowerCase().trim();
    
    // If its an array
    if( Object.prototype.toString.call( strOrArray ) === '[object Array]' ) {
        for (var i=0; i<strOrArray.length; i++){
            if (strOrArray[i].toLowerCase().trim() == stringToFind){
                return true;
            }
        }
        return false;

    }
    // If is not an array, check for string
    return (strOrArray.toLowerCase().trim() === stringToFind);
}