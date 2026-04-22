import { useState, useEffect } from 'react';
import Head from 'next/head';

const PROJECTS = [
  {
    name: 'JARVIS Voice Assistant',
    description: 'Full voice assistant with PC server + Raspberry Pi client. STT → LLM → TTS pipeline.',
    tech: ['Python', 'Flask', 'edge-tts', 'Raspberry Pi'],
    url: '/jarvis',
    status: 'active',
    icon: '🤖'
  },
  {
    name: 'Fox1.4 Logic Model',
    description: 'Fine-tuned Qwen2.5-0.5B model using TRL/SFT for logic tasks.',
    tech: ['Unsloth', 'TRL', 'Qwen2.5'],
    url: '/fox',
    status: 'active',
    icon: '🦊'
  },
  {
    name: 'FoxOS Desktop',
    description: 'Custom Ubuntu-based desktop OS with neural interface. Bootable ISO.',
    tech: ['Ubuntu', 'Custom Kernel', 'ISO'],
    url: '/foxos',
    status: 'active',
    icon: '🖥️'
  },
  {
    name: 'Claw Skills',
    description: 'Skills discovery/install platform for OpenClaw. claw-skills.vercel.app',
    tech: ['Next.js', 'Vercel'],
    url: 'https://claw-skills.vercel.app',
    status: 'deployed',
    icon: '🃏'
  },
  {
    name: 'Local Memory',
    description: 'ChromaDB + BGE-small vector memory for semantic search and recall.',
    tech: ['ChromaDB', 'BGE-small-zh', 'Python'],
    url: '/memory',
    status: 'active',
    icon: '🧠'
  },
  {
    name: 'ComfyUI Workflows',
    description: 'Image generation workflows and custom nodes for AI art.',
    tech: ['ComfyUI', 'Python', 'AI'],
    url: '/comfy',
    status: 'active',
    icon: '🎨'
  },
  {
    name: 'Blender Plushie',
    description: '3D plushie renders and Blender workflow automation.',
    tech: ['Blender', 'Python', '3D'],
    url: '/plushie',
    status: 'complete',
    icon: '🧸'
  },
  {
    name: 'OpenClaw Gateway',
    description: 'AI gateway with Ollama GLM-4.7-Flash as default model.',
    tech: ['OpenClaw', 'Ollama', 'GLM-4.7'],
    url: '/openclaw',
    status: 'active',
    icon: '🦾'
  },
  {
    name: 'JARVIS Mobile',
    description: 'Mobile companion app for voice assistant control.',
    tech: ['React', 'Mobile'],
    url: '/mobile',
    status: 'active',
    icon: '📱'
  },
  {
    name: 'Voice Lab',
    description: 'Audio processing and TTS/STT experiments.',
    tech: ['Python', 'edge-tts', 'Whisper'],
    url: '/voicelab',
    status: 'active',
    icon: '🎤'
  },
  {
    name: 'Mission Control',
    description: 'System monitoring and task orchestration dashboard.',
    tech: ['Python', 'Dashboard'],
    url: '/mission',
    status: 'active',
    icon: '🛰️'
  },
  {
    name: 'AI Studio',
    description: 'Studio for training and experimenting with AI models.',
    tech: ['Python', 'ML'],
    url: '/ai-studio',
    status: 'active',
    icon: '🏗️'
  }
];

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '2012') {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="login-container">
        <Head>
          <title>TeoDash - Locked</title>
        </Head>
        <div className="login-box">
          <div className="logo">📊</div>
          <h1>TeoDash</h1>
          <p>Enter password to access</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              autoFocus
            />
            {error && <p className="error">Incorrect password</p>}
            <button type="submit">Unlock</button>
          </form>
        </div>
        <style jsx>{`
          .login-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f23 100%);
            font-family: 'Segoe UI', system-ui, sans-serif;
          }
          .login-box {
            background: rgba(30, 30, 50, 0.9);
            border: 1px solid rgba(100, 100, 150, 0.3);
            border-radius: 16px;
            padding: 48px;
            text-align: center;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          }
          .logo { font-size: 64px; margin-bottom: 16px; }
          h1 { color: #fff; margin: 0 0 8px 0; font-size: 32px; }
          p { color: #888; margin: 0 0 24px 0; }
          input {
            width: 200px;
            padding: 12px 16px;
            font-size: 18px;
            border: 1px solid #444;
            border-radius: 8px;
            background: #1a1a2e;
            color: #fff;
            text-align: center;
            outline: none;
          }
          input:focus { border-color: #6366f1; }
          .error { color: #ef4444; font-size: 14px; margin-top: 8px; }
          button {
            width: 100%;
            margin-top: 16px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Head>
        <title>TeoDash - Projects</title>
      </Head>
      <header>
        <div className="header-content">
          <div className="logo">📊 <span>TeoDash</span></div>
          <div className="stats">
            <span className="stat">{PROJECTS.length} Projects</span>
            <span className="stat active">{PROJECTS.filter(p => p.status === 'active').length} Active</span>
          </div>
        </div>
      </header>
      <main>
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={i} className={`project-card ${project.status}`}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className={`status-badge ${project.status}`}>
                {project.status === 'deployed' ? '🌐 Live' : project.status === 'complete' ? '✅ Done' : '⚡ Active'}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </footer>
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f23 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #e0e0e0;
        }
        header {
          background: rgba(20, 20, 35, 0.95);
          border-bottom: 1px solid rgba(100, 100, 150, 0.2);
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo { font-size: 28px; color: #fff; }
        .logo span { margin-left: 12px; font-weight: 700; }
        .stats { display: flex; gap: 24px; }
        .stat {
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 20px;
          font-size: 14px;
          color: #a5b4fc;
        }
        main { max-width: 1200px; margin: 0 auto; padding: 40px 24px; }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }
        .project-card {
          background: rgba(30, 30, 50, 0.8);
          border: 1px solid rgba(100, 100, 150, 0.2);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .project-card.complete { opacity: 0.8; }
        .project-icon { font-size: 48px; }
        .project-info h3 { font-size: 20px; color: #fff; margin-bottom: 8px; }
        .project-info p { color: #999; font-size: 14px; line-height: 1.6; flex: 1; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .tag {
          padding: 4px 10px;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          font-size: 12px;
          color: #c4b5fd;
        }
        .status-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        .status-badge.active { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .status-badge.deployed { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .status-badge.complete { background: rgba(168, 85, 247, 0.2); color: #c084fc; }
        footer {
          text-align: center;
          padding: 40px 0;
          color: #666;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .header-content { flex-direction: column; gap: 16px; }
        }
      `}</style>
    </div>
  );
}
