import React, { useMemo, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Hero from './Hero'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcd1234'
/* ---------- icons (inline SVG, no extra packages) ---------- */
const GitHubIcon = (p)=>(
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.09.82 2.21 0 1.6-.01 2.88-.01 3.27 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
  </svg>
)
const OrcidIcon = (p)=>(
  <svg viewBox="0 0 256 256" width="20" height="20" aria-hidden {...p}>
    <circle cx="128" cy="128" r="128" fill="#344648"/>
    <path fill="#fff" d="M86 86h24v84H86zM118 128c0-23 17-42 41-42s41 19 41 42-17 42-41 42-41-19-41-42zm17 0c0 13 10 25 24 25s24-12 24-25-10-25-24-25-24 12-24 25zM86 74c0-6 5-11 11-11s11 5 11 11-5 11-11 11-11-5-11-11z"/>
  </svg>
)

/* ---------- site data ---------- */
const PROFILE = {
  name: 'Jess Byun',
  role: 'PhD Candidate, Bioinformatics @ UNC Chapel Hill',
  tagline: 'sQTLs in human chondrocytes · osteoarthritis genetics · functional genomics',
  email: 'sbyun@unc.edu',
  github: 'https://github.com/seyoun209',
  orcid:  'https://orcid.org/0000-0002-2915-6012',
  linkedin: 'https://www.linkedin.com/in/jess-b-860a4380/',
  cvUrl:  '/byun-2025_resume.pdf',
}


const PUBS = [
  {year:2025,title:'Splicing QTLs in chondrocytes identify OA risk genes', authors:'Byun S, et al.', venue:'in revision', tags:['sQTL','OA']},
]
const BLOG = []
const GALLERY = [
  {src:'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1200&auto=format&fit=crop', alt:'hero'},
]
const CONTACT = {
  address:['3300 Thurston Building','Chapel Hill, NC 27599-7280'],
  phone:'+1 608 609-8377',
  email:'sbyun@unc.edu',
}

/* ---------- layout components ---------- */
const Header = () => (
  <header className="header">
    <div className="container headbar">
      <a href="#/" className="brand">
        <div className="dot"></div>
        <div>
          <div className="brand-title">{PROFILE.name}</div>
          <div className="small">{PROFILE.role}</div>
        </div>
      </a>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  </header>
)

const Footer = () => (
  <footer className="footer">
    <div className="container small">© {new Date().getFullYear()} {PROFILE.name}</div>
  </footer>
)

/* ---------- pages ---------- */
const Home = () => (
  <main>
    <Hero />
  </main>
)


const Research = () => (
  <main>
    <section className="section">
      <div className="container">
        <h2>Research</h2>
        <p className="mt12">
          I study how genetic variation alters splicing in primary human chondrocytes and how these changes relate to osteoarthritis risk…
        </p>
        <ul className="list-disc mt12">
          <li>Splicing QTL discovery and fine-mapping</li>
          <li>Integration with chromatin accessibility and TF motifs</li>
          <li>Colocalization with OA GWAS</li>
          <li>Experimental perturbations</li>
        </ul>
      </div>
    </section>
  </main>
)

const Publications = () => {
  const [q,setQ]=useState('')
  const filtered = useMemo(()=>{
    const s=q.toLowerCase()
    return PUBS.filter(p => [p.title,p.authors,p.venue,(p.tags||[]).join(' ')].join(' ').toLowerCase().includes(s))
  },[q])
  return (
    <main>
      <section className="section">
        <div className="container">
          <h2>Publications</h2>
          <div className="row mt12" style={{alignItems:'center'}}>
            <input className="input" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} style={{width:320}}/>
            <span className="small">{filtered.length} result(s)</span>
          </div>
          <div className="grid mt12">
            {filtered.map((p,i)=>(
              <div className="card" key={i}>
                <div className="row" style={{alignItems:'baseline',gap:8}}>
                  <h3>{p.title}</h3><span className="badge">{p.year}</span>
                  {p.tags?.map(t=><span className="badge" key={t}>{t}</span>)}
                </div>
                <div className="small mt8">{p.authors}</div>
                <div className="small">{p.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const Blog = () => (
  <main>
    <section className="section">
      <div className="container">
        <h2>Blog</h2>
        <p className="mt12 small">No posts yet.</p>
      </div>
    </section>
  </main>
)

const Gallery = () => (
  <main>
    <section className="section">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery mt12">
          {GALLERY.map((g,i)=>(
            <figure key={i}><img src={g.src} alt={g.alt}/></figure>
          ))}
        </div>
      </div>
    </section>
  </main>
)

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      // Optional subject shown in Formspree dashboard
      if (!data.get('_subject')) data.set('_subject', 'Website contact form');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main>
      <section className="section">
        <div className="container contact-two">
          {/* left: title + icons */}
          <div>
            <h2>What's Up!</h2>
            <p className="mt12">Let's get in touch. I would love to hear from you.</p>

            <div className="social-icons on-light" style={{ marginTop: 16 }}>
              <a className="social-link" href={`mailto:${PROFILE.email}`}>
                <span className="icon-round">
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"/></svg>
                </span><span className="icon-label">Email</span>
              </a>

              <a className="social-link" href={PROFILE.github} target="_blank" rel="noreferrer">
                <span className="icon-round">
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.09.82 2.21 0 1.6-.01 2.88-.01 3.27 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
                </span><span className="icon-label">GitHub</span>
              </a>

              <a className="social-link" href={PROFILE.orcid} target="_blank" rel="noreferrer">
                <span className="icon-round">
                  <svg viewBox="0 0 256 256" width="24" height="24"><circle cx="128" cy="128" r="128" fill="#344648"/><path fill="#fff" d="M86 86h24v84H86zM118 128c0-23 17-42 41-42s41 19 41 42-17 42-41 42-41-19-41-42zm17 0c0 13 10 25 24 25s24-12 24-25-10-25-24-25-24 12-24 25zM86 74c0-6 5-11 11-11s11 5 11 11-5 11-11 11-11-5-11-11z"/></svg>
                </span><span className="icon-label">ORCID</span>
              </a>

              <a className="social-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <span className="icon-round">
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H6V17H8.34M7.17 9.64C7.96 9.64 8.6 9 8.6 8.21C8.6 7.42 7.96 6.78 7.17 6.78C6.38 6.78 5.74 7.42 5.74 8.21C5.74 9 6.38 9.64 7.17 9.64M18 17V13.5C18 11.5 16.5 10.28 14.86 10.28C13.86 10.28 13 10.82 12.61 11.5H12.56V10.67H10.34V17H12.68V13.89C12.68 12.95 13.36 12.31 14.21 12.31C15.06 12.31 15.34 12.95 15.34 13.89V17H18Z"/></svg>
                </span><span className="icon-label">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* right: AJAX form (no Outlook) */}
          <form className="card" onSubmit={onSubmit}>
            <label className="small">Full Name</label>
            <input className="input" name="name" placeholder="First and Last" required />

            <label className="small" style={{ marginTop: 10 }}>Email address</label>
            <input className="input" name="email" type="email" placeholder="your@email.here" required />

            <label className="small" style={{ marginTop: 10 }}>Message</label>
            <textarea className="textarea" name="message" rows="6" placeholder="Say hello..." required></textarea>

            {/* spam honeypot (hidden) */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 10 }}>
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'sent' && <span className="small" style={{ color: 'green' }}>Thanks — I’ll get back to you soon.</span>}
              {status === 'error' && <span className="small" style={{ color: 'crimson' }}>Didn’t send. Try again or email me.</span>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};



/* ---------- assemble ---------- */
export default function PersonalSite(){
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/publications" element={<Publications/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
