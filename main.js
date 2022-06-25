console.log("Hello World, I am connected");

const noFPReaderMsg = document.createElement("p");
noFPReaderMsg.innerText =
  "Your Device needs to have a Finger Print reader to read your finger print, dumbass.";

const FPReaderAvailable = document.createElement("p");
FPReaderAvailable.innerText =
  "Your Device has a finger print reader, please wait a moment";

console.log(
  PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
);

if (PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()) {
  document.body.appendChild(FPReaderAvailable);
} else {
  document.body.appendChild(noFPReaderMsg);
}
