import Link from 'next/link'
import styles from '../static/styles'

export default class extends React.Component {
  render() {
    const mode = this.props.mode
    return (
      <div className="footer">
        <span className="slogan">Would you like to follow me?</span>
        <Link href="#">
          <a target="_blank" rel="noopener noreferrer"><img src="/static/contact.svg" /></a>
        </Link>
        <Link href="https://github.com/RoyEde">
          <a target="_blank" rel="noopener noreferrer"><img src="/static/github.svg" /></a>
        </Link>
        <Link href="https://twitter.com/RoyEde">
          <a target="_blank" rel="noopener noreferrer"><img src="/static/twitter.svg" /></a>
        </Link>
        <Link href="https://www.facebook.com/RoyEdenProgram/">
          <a target="_blank" rel="noopener noreferrer"><img src="/static/facebook.svg" /></a>
        </Link>
        <style jsx>{`
          .footer {
            padding-top: 16px;
            padding-bottom: 16px;
            padding-right: 2.5%;
            padding-left: 2.5%;
            width: 100%;
            border-top: 2px solid #ddd;
            height: 54px;
            position: fixed;
            bottom: 0;
            transition: color ${ styles.transitions.standard }, background-color ${ styles.transitions.standard };
            background-color: ${ mode ? styles.colors.standard_night : "#fff" };
          }

          .footer > a > img {
            float: right;
            margin-left: 10px;
            height: 20px;
            width: 20px;
          }

          .footer > a > img:hover {
            margin-top: 1px;
          }

          .footer > .slogan {
            font-weight: 600;
            color: ${ mode ? "#fff" : styles.colors.standard };
          }

          @media screen and (max-Width: 368px) {
            .footer {
              font-size: 0.85rem;
            }

            .footer > a > img {
              margin-left: 2px;
            }
          }
        `}</style>

    </div>
    )
  }
}
