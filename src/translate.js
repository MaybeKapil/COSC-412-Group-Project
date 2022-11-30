function translateUserText() {

  AWS.config.region = "us-east-1";
  AWS.config.credentials = new AWS.Credentials('AKIASDZ6DZUKT2KV2YWL', 'NYQtIU8CfUwtQ3tM+qLbJbWi69OTRvOe9TZyKOdx');

  const translate = new AWS.Translate();

  let sourceLang = document.getElementById("srcLangSelect").value;
  let destinationLang = document.getElementById("dstLangSelect").value;
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
    if (err) {
      console.log(err, err.stack); 
    }
    else {
      document.getElementById("outputTextArea").value = data['TranslatedText'];
    }
  });
}