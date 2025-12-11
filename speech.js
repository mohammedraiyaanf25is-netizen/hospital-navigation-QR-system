function speak(text) {
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-IN";
    speechSynthesis.speak(msg);
}