// Function invoked by button click
function speakText(buttonID) {
    console.log(buttonID);
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:08cba64f-3291-4366-a2e0-4d28bd7e42a2'});
    
    // Create the JSON parameters for getSynthesizeSpeechUrl
    var speechParams = {
        OutputFormat: "mp3",
        SampleRate: "16000",
        Text: "",
        TextType: "text",
        VoiceId: "Matthew"
    };
    speechParams.Text = document.getElementById(buttonID).value;

     // Create the Polly service object and presigner object
     var polly = new AWS.Polly({apiVersion: '2016-06-10'});
     var signer = new AWS.Polly.Presigner(speechParams, polly)

     // Create presigned URL of synthesized speech file
     signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
     if (error) {
        if (buttonID == "userTextArea") {
            document.getElementById('srcResult').style.display="block";
            document.getElementById('srcResult').innerHTML = error;
        }
        else if (buttonID == "outputTextArea") {
            document.getElementById('dstResult').style.display="block";
            document.getElementById('dstResult').innerHTML = error;
        }
     } else {
        console.log("successful");
         document.getElementById('audioSource').src = url;
         document.getElementById('audioPlayback').load();
         document.getElementById('audioPlayback').play();
     }
   });
}