import styles from '../static/styles'

export default class extends React.Component {
  render() {
    const info = this.props.info
    const mode = this.props.mode
    return (
      <div className="comment" >
        <span dangerouslySetInnerHTML={ { __html: info.content } } />
        <div className="data">
          <span>{"Uploaded by: "}
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://news.ycombinator.com/user?id=${info.user}`}
            >
              { info.user }
            </a>
          </span>
          <span>
            {`Level: ${info.level}` }
          </span>

          <span>
            {`Posted ${info.time_ago}.`}
          </span>
        </div>
        <style jsx>{`
          .comment {
            margin-top: 1px;
            margin-bottom: 1px;
            font-weight: 600;
            padding-left: 10px;
            padding-top: 6px;
            padding-bottom: 6px;
            transition: color ${ styles.transitions.standard };
            background-color ${ styles.transitions.slowest };
            border: 1px solid ${ mode ? "#eee" : "#ddd" };
            background-color: ${ mode ? "#000" : "#fff" };
            color: ${ mode ? "#fff" : "#000" };
          }

          .link {
            transition: color ${ styles.transitions.standard };
            color: ${ mode ? "#fff" : "#000" };
          }

          .data {
            margin-bottom: 6px;
            display: flex;
          }

          .data > span {
            margin-right: 1%;
          }

          @media screen and (max-Width: 900px) {
            .comment {
              font-size: 0.95rem;
            }

            .data {
              display: block;
            }

            .data > span {
              display: block;
            }
          }

          @media screen and (max-Width: 500px) {
            .comment {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </div>
    )
  }
}
