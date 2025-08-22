import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="greeting">
            <p>Hello 👋 my name is</p>
          </div>
          <h1 className="name">Miracle Lee</h1>
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
            
            <p className="clubs">
              At the University of Washington, I'm the Director of Logistics at <a href="https://dubhacks.co/" target="_blank" rel="noopener noreferrer"><em>DubHacks</em></a>, the largest collegiate hackathon in the Pacific Northwest.
              I'm also the Public Relations Director at <a href="https://gen1.cs.washington.edu/" target="_blank" rel="noopener noreferrer"><em>GEN1</em></a>, an RSO for first-generation 
              students in the Paul G. Allen School of Computer Science.
            </p>
            
            <p className="current">
              Currently, I'm a Software Engineer Intern at <a href="https://www.ultravox.ai/" target="_blank" rel="noopener noreferrer"><em>Ultravox.Ai </em></a>
              where I am performing full-stack production engineering and creating investor-facing demos.
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
          <p className="footer-text"> Made with ❤️ by Miracle Lee | This site is open source on <a href="https://github.com/MiraLee251" target="_blank" rel="noopener noreferrer">my GitHub</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
