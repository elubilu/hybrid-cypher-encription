
$('#msg').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^A-z]/g,'') ); }
);
$('#key').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^A-z]/g,'') ); }
);

var polybiusDataset = [
  []
]

function myFunction() {
    var msg = document.getElementById("msg").value;
    var key = document.getElementById("key").value;
    var mode = document.getElementById("mode").value;
    if(mode == "Encryption"){
      var encrptData = vigenereEncrypt(key, msg);
      document.getElementById("result").innerHTML = encrptData;
      console.log(encrptData);
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
  return output_str;
}

function vigenereDecrypt(key, str) {
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
  for (var i = 0; i < key.length; i++){
    
  }
}

// zebracdfghiklmnopqstuvwxyZEBRACDFGHIKLMNOPQSTUVWXY[\]^_`
// 