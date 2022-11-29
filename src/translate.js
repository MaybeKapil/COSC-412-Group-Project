function translateUserText() {
  const AWS = require("aws-sdk");
  AWS.config.update({region: "us-east-1"});

  const translate = new AWS.Translate();

  let sourceLang = document.getElementById("srcLang").value;
  let destinationLang = document.getElementById("dstLang").value;
  let srcText = document.getElementById("userTextArea").value;

  /*
  let sourceLang = 'auto';
  let destinationLang = 'ar';
  let srcText = 'happy birthday to you';*/

  let params = {
    SourceLanguageCode: sourceLang,
    TargetLanguageCode: destinationLang,
    Text: srcText
  };

  translate.translateText(params, function (err, data) {
    if (err) console.log(err, err.stack); 
    else     console.log(data['TranslatedText']);
  });
}