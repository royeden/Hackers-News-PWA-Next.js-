import Link from 'next/link'
import styles from '../static/styles'

export default class extends React.Component {
  render() {
    const info = this.props.info
    const filter = this.props.filter
    const type = (info.points > 100 ? (info.points >= 500 ? "hot" : "med") : "cold")
    const mode = this.props.mode
    const active = filter[0] ? "story"  :
    filter[1] && type === "cold" ? "story" :
    filter[2] && type === "med" ? "story" :
    filter[3] && type === "hot" ? "story" : "inactive"
    return (
      <div className={ `${active} ${type}` } >
        <h4><a
          href={ info.url }
          target="_blank"
          rel="noopener noreferrer"
          className={ `link ${type}` }>{ info.title }
        </a></h4>
        <div className="data">
          <span>{"Uploaded by: "}
            <a
              className={ `link ${type}` }
              target={ info.user ? "_blank" : "" }
              rel="noopener noreferrer"
              href={ info.user ? `https://news.ycombinator.com/user?id=${info.user}` : "#" }
            >
              { info.user ? info.user : "User" }
            </a></span>
          <span>
            {`Points: ${info.points}` }
          </span>
          <span>{"Comments: "}
            <Link as= {`/post/${mode ? "night" : "day"}/${info.id}`}
              href={
                info.user ?
                  {
                    pathname: '/post',
                    query: {
                      mode: mode ? "night" : "day",
                      id: info.id,
                    }
                  }
                : {
                  pathname: '/reference',
                  query: {
                    mode: mode ? "night" : "day",
                  }
                }
              }
            >
              <a className={ `link ${type}` }>{ info.comments_count }</a>
            </Link>
          </span>
          <span>
            {"From: "}
            <Link
              href={ `http://${info.domain}` }
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={ `link ${type}` }
              >
                { info.domain }
              </a>
            </Link>
            .
          </span>
          <span>
            {`Posted ${info.time_ago}.`}
          </span>
        </div>
        <style jsx>{`
          .story {
            margin-top: 1px;
            margin-bottom: 1px;
            font-weight: 600;
            padding-left: 10px;
            padding-top: 3px;
            padding-bottom: 3px;
            transition: color ${ styles.transitions.standard };
            background-color ${ styles.transitions.slowest };
            border: 2px solid ${ mode ? "#eee" : "#ddd" };
            background-color: ${ mode ? "#000" : "#fff" };
          }

          .link {
            transition: color ${ styles.transitions.standard };
          }

          .inactive {
            display: none;
          }

          h4 {
            margin-top: 6px;
          }

          .data {
            margin-bottom: 6px;
            display: flex;
          }

          .data > span {
            margin-right: 1%;
          }

          .hot {
            color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
          }

          .med {
            color: ${ mode ? styles.colors.med_night : styles.colors.med };
          }

          .cold {
            color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
          }

          @media screen and (max-Width: 900px) {
            .story {
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
            .story {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </div>
    )
  }
}
