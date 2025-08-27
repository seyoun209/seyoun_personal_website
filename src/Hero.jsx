import { motion } from "framer-motion"

/* simple inline icons */
const MailIcon = (p)=>(
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...p}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"/>
  </svg>
)
const GitHubIcon = (p)=>(
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...p}>
    <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.09.82 2.21 0 1.6-.01 2.88-.01 3.27 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
  </svg>
)
const OrcidIcon = (p)=>(
  <svg viewBox="0 0 256 256" width="24" height="24" aria-hidden {...p}>
    <circle cx="128" cy="128" r="128" fill="#344648"/><path fill="#fff" d="M86 86h24v84H86zM118 128c0-23 17-42 41-42s41 19 41 42-17 42-41 42-41-19-41-42zm17 0c0 13 10 25 24 25s24-12 24-25-10-25-24-25-24 12-24 25zM86 74c0-6 5-11 11-11s11 5 11 11-5 11-11 11-11-5-11-11z"/>
  </svg>
)
const LinkedinIcon = (p)=>(
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...p}>
    <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H6V17H8.34M7.17 9.64C7.96 9.64 8.6 9 8.6 8.21C8.6 7.42 7.96 6.78 7.17 6.78C6.38 6.78 5.74 7.42 5.74 8.21C5.74 9 6.38 9.64 7.17 9.64M18 17V13.5C18 11.5 16.5 10.28 14.86 10.28C13.86 10.28 13 10.82 12.61 11.5H12.56V10.67H10.34V17H12.68V13.89C12.68 12.95 13.36 12.31 14.21 12.31C15.06 12.31 15.34 12.95 15.34 13.89V17H18Z"/>
  </svg>
)

const IconLink = ({href,label,children,className=""}) => (
  <a className={`social-link ${className}`} href={href} target={href.startsWith('mailto:')?'_self':'_blank'} rel="noreferrer">
    <span className="icon-round">{children}</span>
    <span className="icon-label">{label}</span>
  </a>
)

export default function Hero(){
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}}>
            Hi, I’m <span className="highlight">Jess Byun</span>,
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6,duration:1}}>
            and I’m a PhD student in Bioinformatics @ UNC-Chapel Hill.
          </motion.p>

          <motion.div className="social-icons on-dark" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
            <IconLink href="mailto:sbyun@unc.edu" label="Email"><MailIcon/></IconLink>
            <IconLink href="https://github.com/seyoun209" label="GitHub"><GitHubIcon/></IconLink>
            <IconLink href="https://orcid.org/0000-0002-2915-6012" label="ORCID"><OrcidIcon/></IconLink>
            <IconLink href="https://www.linkedin.com/in/jess-b-860a4380/" label="LinkedIn"><LinkedinIcon/></IconLink>
          </motion.div>
        </div>

        <motion.img className="hero-photo"
          src="images/Headshot.jpg"
          alt="Jess Byun headshot"
          initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1, y: [0,-6,0]}} transition={{duration:1.2, y:{repeat: Infinity, duration:4}}}
        />
      </div>
    </section>
  )
}
