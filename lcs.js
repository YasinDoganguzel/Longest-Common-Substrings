function lcs(words = []){
    const wordsLength = words.length
    const firstWord = words[0]
     let response = ""
  for (let i = 0; i < firstWord.length; i++) {
        for (let j = i + 1; j <= firstWord.length; j++) {
            let stem = firstWord.substr(i, j-i);
             let k = 1;
            for (k = 1; k < wordsLength; k++){
                if (!words[k].includes(stem)) break;
            }
 
            if (k == wordsLength && response.length < stem.length){
                response = stem
            }
        }
        
    }

    return response
}

if(process.argv.length  == 3){
    console.log(process.argv[2])
    return;
}

if(process.argv.length < 4){
    console.log("")
    return;
}
console.log(lcs(process.argv.slice(2, process.argv.length)))