function translateUserText() {

  if (document.getElementById("userTextArea").value != '') {
    let srcText = document.getElementById("userTextArea").value;

    AWS.config.region = "us-east-1";
    AWS.config.credentials = new AWS.Credentials('AKIASDZ6DZUKT2KV2YWL', 'NYQtIU8CfUwtQ3tM+qLbJbWi69OTRvOe9TZyKOdx');

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
}