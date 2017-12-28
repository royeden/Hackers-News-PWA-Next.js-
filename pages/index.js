import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Stories from '../components/Stories'
import Pager from '../components/Pager'

const getPage = async (page) => {
  const url = `https://api.hackerwebapp.com/news?page=${page}`
  const req = await fetch(url)
  const stories = await req.json()
  return stories
}

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      stories: [],
      page: 1,
      mode: false,
    }
  }

  componentWillMount() {
    const mode = this.props.url.query.mode === 'night'
    this.setState({ mode: mode })
  }

  async componentDidMount() {
    const stories = await getPage(this.state.page)
    this.setState({ stories: stories })
  }

  handlePage = async page => {
    const newStories = await getPage(page)
    this.setState({
        stories: newStories,
        page: page,
    })
  }

  changeMode() {
    const newMode = !this.state.mode
    this.setState({ mode: newMode })
  }

  render() {
    return (
      <Layout
        title="Latest Hacker News"
        name="home"
        onClick={ () => this.handlePage(1) }
        mode={ this.state.mode }
        changeMode={ () => this.changeMode() }
      >

        <Pager
          page={ this.state.page }
          last={ this.state.last }
          onClick={ (page) => this.handlePage(page) }
          mode={ this.state.mode }
        />
        <Stories
          stories={ this.state.stories }
          mode={ this.state.mode }
        />
        <Pager
          page={ this.state.page }
          last={ this.state.last }
          onClick={ (page) => this.handlePage(page) }
          mode={ this.state.mode }
          low={true}
        />
      </Layout>
    )
  }
}
