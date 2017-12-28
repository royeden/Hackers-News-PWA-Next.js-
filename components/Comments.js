import Story from './Story'
import Comment from './Comment'

export default class extends React.Component {
  render() {
    const info = this.props.info
    const mode = this.props.mode
    return (
      <div>
        <Story
          filter={ [1,0,0,0] }
          info={ info }
          mode={ mode }
        />
        { info.comments_count ?
          info.comments.map( comment => (
            <Comment
              info={ comment }
              mode={ mode }
              key={ comment.id }
            />
          )) : ""
        }
      </div>
    )
  }
}
