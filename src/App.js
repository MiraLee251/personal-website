import './App.css';
import { Phone, PhoneOff } from 'lucide-react';
import { UltravoxSession } from 'ultravox-client';
import { useState } from 'react';

function App() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [session, setSession] = useState(null);
  const handleStartCall = async () => {
    try {
      if (!process.env.REACT_APP_ULTRAVOX_API_KEY) {
        throw new Error('REACT_APP_ULTRAVOX_API_KEY is not set in environment variables');
      }
      if (!process.env.REACT_APP_ULTRAVOX_AGENT_ID) {
        throw new Error('REACT_APP_ULTRAVOX_AGENT_ID is not set in environment variables');
      }
      const newSession = new UltravoxSession();
      setSession(newSession);
      
      newSession.addEventListener('status', (event) => {
      });
      newSession.addEventListener('transcripts', (event) => {
      });
      const apiUrl = `https://api.ultravox.ai/api/agents/${process.env.REACT_APP_ULTRAVOX_AGENT_ID}/calls`;
      
      const requestHeaders = {
        'Content-Type': 'application/json',
        'X-Unsafe-API-Key': process.env.REACT_APP_ULTRAVOX_API_KEY, 
      };
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          medium: {
            webRtc: {}
          },
          recordingEnabled: true,
          firstSpeakerSettings: {
            agent: {}
          },
          initialOutputMedium: "MESSAGE_MEDIUM_VOICE"
        }),
        mode: 'cors', 
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }
      
      const responseData = await response.json();
      
      const { joinUrl } = responseData;
      if (!joinUrl) {
        throw new Error('No joinUrl received from API');
      }
      
      newSession.joinCall(joinUrl);
      setIsCallActive(true);
    } catch (error) {
      alert(`Failed to start call: ${error.message}`);
    }
  };

  const handleEndCall = () => {
    if (session) {
      session.leaveCall();
      setSession(null);
    }
    setIsCallActive(false);
  };

  const handleCallToggle = () => {
    if (isCallActive) {
      handleEndCall();
    } else {
      handleStartCall();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="greeting">
            <p>Hello 👋 my name is</p>
          </div>
          <div className="name-container">
            <h1 className="name">Miracle Lee</h1>
            <button className="learn-more-btn" onClick={handleCallToggle}>
              {isCallActive ? (
                <PhoneOff size={16} />
              ) : (
                <Phone size={16} />
              )}
              <span>{isCallActive ? 'End Call' : "Let's talk"}</span>
            </button>
          </div>
        </header>
        
        <main className="main">
          <div className="headshot-container">
            <img src="/headshot.jpeg" alt="Miracle Lee" className="headshot" />
            <img src="/dubhacks.jpeg" alt="DubHacks Hackathon" className="dubhacks-image" />
            <iframe 
              className="video-element"
              src="https://www.youtube.com/embed/NZzUOnmgbkM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="bio-section">
            <p className="bio">
              I'm a software engineer with a passion for AI, startups, and creating impactful tech experiences.
            </p>
            
            <p className="current">
              Currently, I'm a Software Engineer Intern at <a href="https://www.ultravox.ai/" target="_blank" rel="noopener noreferrer"><em>Ultravox.Ai </em></a>
              where I am performing full-stack production engineering and creating investor-facing demos.
            </p>
            
            <p className="clubs">
              At the University of Washington, I'm the Director of Logistics at <a href="https://dubhacks.co/" target="_blank" rel="noopener noreferrer"><em>DubHacks</em></a>, the largest collegiate hackathon in the Pacific Northwest.
              I'm also the Public Relations Director at <a href="https://gen1.cs.washington.edu/" target="_blank" rel="noopener noreferrer"><em>GEN1</em></a>, an RSO for first-generation 
              students in the Paul G. Allen School of Computer Science.
            </p>
          </div>
        </main>
        
        <footer className="footer" id="connect">
          <div className="links">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/miracle-lee1" target="_blank" rel="noopener noreferrer" className="link linkedin">
                LinkedIn
              </a>
              <a href="/Miracle_Lee_Resume.pdf" target="_blank" rel="noopener noreferrer" className="link resume">
                Resume
              </a>
              <a href="mailto:ml284@uw.edu" className="link email">
                Email
              </a>
            </div>
          </div>
          <p className="footer-text"> Made with ❤️ by Miracle Lee using JavaScript, Tailwind CSS, and HTML | This site is open source on <a href="https://github.com/MiraLee251" target="_blank" rel="noopener noreferrer">my GitHub</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
