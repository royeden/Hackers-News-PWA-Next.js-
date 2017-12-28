import Layout from '../components/Layout'
import Story from '../components/Story'
import styles from '../static/styles'


export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Story Title",
      url: "#",
      user: false,
      points: 0,
      comments_count: 0,
      domain: "google.com",
      time_ago: "7 days ago",
      id: "",
      mode: false,
    }
  }

  componentWillMount() {
    const mode = this.props.url.query.mode === "night"
    this.setState({
      points: Math.floor(Math.random() * 550),
      comments_count: Math.floor(Math.random() * 1000),
      mode: mode
     })
  }

  handleClick(n) {
    this.setState({ points: Math.floor(Math.random() * (n[0] - n[1] + 1)) + n[1] })
  }

  changeMode() {
    const newMode = !this.state.mode
    this.setState({ mode: newMode })
  }

  render() {
    const mode = this.state.mode
    return (
      <Layout
        title="References"
        name="reference"
        mode={ this.state.mode }
        changeMode={ () => this.changeMode() }
      >
        <div className="references">
          <h1 className="mode">Reference chart:</h1>
          <div className="model">
            <h2 className="mode">Story Model:</h2>
            <Story
              info={ this.state }
              filter={ [1, 0, 0, 0] }
              mode={ this.state.mode }
            />
          </div>
          <div className="model">
            <h2 className="mode">Points (Try it out, modifies the story's points):</h2>
            <ul className="list">
              <li
                className="color cold"
                onClick={ () => this.handleClick([0, 100]) }>Cold (&lt; 100 points)</li>
              <li
                className="color med"
                onClick={ () => this.handleClick([100, 500]) }>Medium (&ge; 100 & &lt; 500 points)</li>
              <li
                className="color hot"
                onClick={ () => this.handleClick([500, Math.floor((Math.random() + 1) * 500)]) }>Hot (&ge; 500 points) </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .references {
            margin: 12px;
            transition: ${ styles.transitions.standard };
            border: 2px solid ${ mode ? "#fff" : "#000" };
          }

          .model {
            margin: 5px;
            border: 2px solid #bbb;
            transition: ${ styles.transitions.standard };
          }

          .list {
            display: flex;
            list-style-type: none;
          }

          .mode {
            transition: ${ styles.transitions.standard };
            color: ${ mode ? "#fff" : "#000"};
          }

          .color {
            width: auto;
            padding: 2px;
            font-weight: 600;
            text-align: center;
            margin-right: 5px;
            transition: ${ styles.transitions.standard };
          }

          .color:hover {
            cursor: pointer;
            color: #fff;
            transition: ${ styles.transitions.fastest };
          }

          .cold {
            color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
          }

          .med {
            color: ${ mode ? styles.colors.med_night : styles.colors.med };
          }

          .hot {
            color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
          }

          .cold:hover {
            background-color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
          }

          .med:hover {
            background-color: ${ mode ? styles.colors.med_night : styles.colors.med };
          }

          .hot:hover {
            background-color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
          }
          `}</style>
      </Layout>)
      }
}
