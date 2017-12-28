import Link from 'next/link'
import Story from './Story'
import Filter from './Filter'
import styles from '../static/styles'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      active: []
    }
  }

  componentWillMount() {
    this.setState({active: [1, 0, 0, 0]})
  }

  handleFilter(filter) {
    let actual = this.state.active
    if(filter) {
      actual[filter] = actual[filter] ? 0 : 1
      actual[0] = filter && actual.reduce((acc, val) => acc+val, 0) >= 1 ? 0 : 1
      actual = actual.reduce((acc, val) => acc+val, 0) === 3 ? [1, 0, 0, 0] : actual
    } else {
      actual = [1, 0, 0, 0]
    }

    this.setState({active: actual})
  }


  render(){
    return (
      <main className="stories">
        <Filter
          filter={ this.state }
          handleFilter={ (filter) => this.handleFilter(filter) }
          mode={ this.props.mode }
        />
        { this.props.stories.map(story => (
          <Story
            info={ story }
            filter={ this.state.active }
            mode={ this.props.mode }
            key={ story.id }
          />
        )) }
        <style jsx>{`
          .stories {
            transition: ${ styles.transitions.standard };
            border: 2px solid ${ this.props.mode ? "#fff" : "#000"};
          }
        `}</style>
      </main>
    )
  }
}
