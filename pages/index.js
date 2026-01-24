import { projects } from '../data/projects'
import { links } from '../data/links'
import Project from '../components/project'
import Meta from '../components/meta'

export default function Home() {
  return <>
      <Meta title='Ryan MacInnes - Product-Minded Programmer and Founder' />
      <main className='container'>
        <header className='header'>
          <a href='/' className='logo'>
            <img src='logo.png' srcSet='logo-2x.png 2x' />
          </a>
          <div>
            <h1>Ryan MacInnes</h1>
            <h2>Product-Minded Programmer</h2>
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
            Web and iOS programmer with an eye for design and UX.
            <br />
            I love building things that are simple and beautiful.
          </p>
          <ul>
            {links.map((link, i) => <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>)}
          </ul>
          <p>
            <a href='mailto:ryan@goddamnyouryan.com'>ryan@goddamnyouryan.com</a>
          </p>
        </div>
      </main>
  </>
}
