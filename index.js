
var polybiusDatasetStr = ['zebracdf','ghiklmno','pqstuvwx','yjZEBRAC','DFGHIKLM','NOPQSTUV','WXYJ[\]^', '_`@{|}~z'];

function myFunction() {
    var msg = document.getElementById("msg").value;
    var key = document.getElementById("key").value;
    var mode = document.getElementById("mode").value;
    if(mode == "Encryption"){
      var encrptData = vigenereEncrypt(key, msg);
      document.getElementById("result").innerHTML = encrptData;
      // console.log(encrptData);
    }
    else if(mode == "Decryption"){
      var decrptData = vigenereDecrypt(key,msg);
      document.getElementById("result").innerHTML = decrptData;
      console.log(decrptData);
    }
  }
function vigenereEncrypt(key, str) {
  var output = [str.length];
  var result = 0;
  var output_str;

  for (var i = 0; i < str.length; i++) {
      result = ((str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
      console.log(result);
      if(result<65) result+=64;
      output[i] = String.fromCharCode(result%128);
      // console.log(str[i],key[i],result,output[i])
  }
  output_str = output.join('');

  return polybiusEncrypt(output_str);
}

function vigenereDecrypt(key, msg) {
  var str = polybiusDecrypt(msg);
  var output = [str.length];
  var result = 0;
  var output_str;

  for (var i = 0; i < str.length; i++) {

      if (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128;
      } else {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
      }
      console.log(result)
      if(result<65) result+=64;
      
      output[i] = String.fromCharCode(result%128);
    }

  output_str = output.join('');
  return output_str;
}

function polybiusEncrypt(key){
  var encrpKey="";
  for (var i = 0; i < key.length; i++){
    for(let j=0; j<8; j++){
      if(polybiusDatasetStr[j].indexOf(key[i])!= -1){
        encrpKey += (j+1);
        encrpKey += polybiusDatasetStr[j].indexOf(key[i])+1
        break;
      }
    }
  }
  console.log("********* Hybrid Encryption **********")
  console.log(encrpKey);
  console.log("********* Hybrid Encryption **********")
  return encrpKey;
}
function polybiusDecrypt(key){
  var decrpKey="";
  for (var i = 0; i < key.length; i+=2){
    decrpKey+=polybiusDatasetStr[key[i]-1][key[i+1]-1];
  }
  console.log("********* Hybrid Decryption **********")
  console.log(decrpKey);
  console.log("********* Hybrid Decryption **********")
  return decrpKey;
}

// ['zebracdf','ghiklmno','pqstuvwx''yjZEBRAC','DFGHIKLM','NOPQSTUV','WXYJ[\]^', '_`@{|}~z']
// [['z','e','b', 'r','a','c','d','f'] ,['g','h','i','k', 'l', 'm','n', 'o'],['p','q','s','t','u','v','w','x'],['y','j','[','^',']','@', '{', '}'],['Z','E','B', 'R','A','C','D','F'] ,['G','H','I','K', 'L', 'M','N', 'O'],['P','Q','S','T','U','V','W','X'],['Y','J','|','_','~','`',"\",'z']]
// 