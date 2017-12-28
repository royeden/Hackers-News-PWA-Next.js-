import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Comments from '../components/Comments'


const getComments = async (id) => {
  const url = `https://api.hackerwebapp.com/item/${id}`
  const req = await fetch(url)
  const stories = await req.json()
  return stories
}

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      story: {},
      mode: false,
    }
  }

  componentWillMount() {
    const mode = this.props.url.query.mode === "night"
    this.setState({ mode: mode })
  }

  async componentDidMount() {
    const story = await getComments(this.props.url.query.id)
    this.setState({ story: story })
  }

  changeMode() {
    const newMode = !this.state.mode
    this.setState({ mode: newMode })
  }

  render() {
    return (
      <Layout
        title={ this.state.story.title }
        mode={ this.state.mode }
        changeMode={ () => this.changeMode() }
      >
        <Comments
          mode={ this.state.mode }
          info={ this.state.story }
        />
      </Layout>
    )
  }
}
