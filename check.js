function replaceIfIndicesDiffer(str1, str2) {
    const result = [];
    
    const minLength = Math.min(str1.length, str2.length);
    
    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) {
            result.push('~');
        } else {
            result.push(str1[i]);
        }
    }
    
    const maxLength = Math.max(str1.length, str2.length);
    for (let i = minLength; i < maxLength; i++) {
        result.push('~');
    }
    
    return result.join('');
}

const str1 = 'HFLKFOBGFABANCCDOIOCNHCGMGMAFKAFMBHFNMBBCIEOKHBMMBGBMLFMABDBMMIJ';
const str2 = "MBLBCMPKEBFDMMGOMBFBMAJIBBOBMMHM";
const result = replaceIfIndicesDiffer(str1, str2);

console.log(result);
