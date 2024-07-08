import useSpeechToText from 'react-hook-speech-to-text';

const App = () => {
  const { error, isRecording, results, startSpeechToText, stopSpeechToText } = useSpeechToText({ continuous: true, useLegacyResults: false });

  return (
    error ? <p>Web Speech API is not available in this browser 🤷‍</p> : <div className="container">
      <h2 className="heading">Welcome to Voice Transcribing WebApp</h2>

      <div className="btn-wrapper">
        <button className={isRecording ? "start-btn active" : "start-btn"} disabled={isRecording} onClick={startSpeechToText}>Start</button>
        <button className="stop-btn" disabled={!isRecording} onClick={stopSpeechToText}>Stop</button>
      </div>

      <div className="transcribing-container">
        {results.map((result) => (
          <span key={result?.timestamp}>{result?.transcript}</span>
        ))}
      </div>
    </div>
  )
}

export default App;