import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="headshot-container">
            <img src="/headshot.jpeg" alt="Miracle Lee" className="headshot" />
          </div>
          <h1 className="name">Miracle Lee</h1>
        </header>
        
        <main className="main">
          <p className="bio">
            I'm a software engineer with a passion for AI, startups, and creating impactful tech experiences.
          </p>
          <p className="clubs">
            At the University of Washington, I'm the Director of Logistics at <a href="https://dubhacks.co/" target="_blank" rel="noopener noreferrer"><em>DubHacks</em></a>, the largest collegiate hackathon in the Pacific Northwest.
            I'm also the Public Relations Director at <a href="https://gen1.cs.washington.edu/" target="_blank" rel="noopener noreferrer"><em>GEN1</em></a>, a club for for first-generation 
            students in the Paul G. Allen School of Computer Science
          </p>
          <p className = "current">
            Currently, I'm a Software Engineer Intern at <a href="https://www.ultravox.ai/" target="_blank" rel="noopener noreferrer"><em>Ultravox.Ai </em></a>
            where I am building multi-modal foundation models for AI agents.
          </p>
        </main>
        
        <footer className="footer">
          <div className="links">
            <div className="social-links">
              <a href="https://github.com/MiraLee251" target="_blank" rel="noopener noreferrer" className="link github">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/miracle-lee1" target="_blank" rel="noopener noreferrer" className="link linkedin">
                LinkedIn
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="link instagram">
                Resume
              </a>
              <a href="mailto:ml284@uw.edu" className="link email">
                Email
              </a>
            </div>
          </div>
          <p>&copy; Made with ❤️ by Miracle Lee</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
