function translateUserText() {
  
  // encoder for counting character bytes for translation
  const encoder = new TextEncoder();

  // gets text without leading an trailing white-spaces (saves bytes)
  const  srcText = document.getElementById("userTextArea").value.trim();
  const textBytes = encoder.encode(srcText).length;

  if (textBytes == 0) {
    console.log("Error: Text only contains white-spaces.")
  }
  else if (textBytes >= 1 && textBytes <=10000) {

    AWS.config.region = "us-east-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:08cba64f-3291-4366-a2e0-4d28bd7e42a2'});

    const translate = new AWS.Translate();

    let sourceLang = document.getElementById("srcLangSelect").value;
    let destinationLang = document.getElementById("dstLangSelect").value;

    let params = {
      SourceLanguageCode: sourceLang,
      TargetLanguageCode: destinationLang,
      Text: srcText
    };

    translate.translateText(params, function (err, data) {
      if (err) {
        console.log("hi" + err, err.stack);
      }
      else {
        document.getElementById("outputTextArea").value = data['TranslatedText'];
      }
    });
  }
  else {
    console.log("Error: Text must be at least 1 byte and at most 10,000 bytes.");
  }
}