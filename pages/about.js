import Layout from '../components/Layout'
import styles from '../static/styles'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      mode: false
    }
  }

  componentWillMount() {
    const mode = this.props.url.query.mode === "night"
    this.setState({ mode: mode })
  }

  changeMode() {
    const newMode = !this.state.mode
    this.setState({ mode: newMode })
  }

  render() {
    const mode = this.state.mode
    return (
      <Layout
        title="About"
        name="about"
        mode={ this.state.mode }
        changeMode={ () => this.changeMode() }
      >
        <div className="container">
          <h2 className="status">
            <span className="text">
              {"Welcome!"}
            </span>
          </h2>
          <h4 className="status about">
            <span>
              {"My name is Roy and I'm a Front-End Programmer."}
            </span>
            <span>
              {"This is my version of "}
              <a
                className="status"
                href="https://aerolab.co/blog/react-nextjs-pwa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Aerolab's Next PWA project."}
              </a>
            </span>
            <span>
              {"It took me around a week to finish this because I wanted to pay attention to many details."}
            </span>
            <span>
              {"The purpose of doing this was getting used to Next.js, <style jsx>, Components and passing state."}
            </span>
            <span>
              {"Also I've begun thinking in a different approach lately to designing Web-Apps. "}
            </span>
          </h4>
        </div>
        <style jsx>{`
          .container, .about {
            display: flex;
            flex-direction: column;
          }

          .status {
            color: ${ mode ? "#fff" : "#000" };
            transition: ${ styles.transitions.standard }
          }

          .about > span {
            margin-bottom: 5px;
          }
        `}</style>
      </Layout>
    )
  }
}
