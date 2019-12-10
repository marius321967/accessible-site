export default message => {
    var utterance = new SpeechSynthesisUtterance(message)
    var voices = window.speechSynthesis.getVoices()
    utterance.voice = voices[0]
    window.speechSynthesis.speak(utterance)
}