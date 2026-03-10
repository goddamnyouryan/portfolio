import { projects } from '../data/projects'
import { links } from '../data/links'
import { tagline, email } from '../data/site'
import Project from '../components/project'
import Meta from '../components/meta'

export default function Home() {
  return <>
      <Meta title={`Ryan MacInnes - ${tagline}`} />
      <main className='container'>
        <header className='header'>
          <a href='/' className='logo'>
            <img src='logo.png' srcSet='logo-2x.png 2x' />
          </a>
          <div>
            <h1>Ryan MacInnes</h1>
            <h2>{tagline}</h2>
          </div>
        </header>

        <h2 className='divider'>--</h2>

        <ul>
          {projects.map((project, index) =>
            <Project project={project} key={index} />
          )}
        </ul>

        <div className='footer'>
          <p>
            --
            <br />
            The goal of technology is usually to make life easier.
            <br />
            I don’t think easier always means better.
            <br />
            I want to build things that make life better, not just easier.
          </p>
          <ul>
            {links.map((link, i) => <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>)}
          </ul>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </main>
  </>
}
