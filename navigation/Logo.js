import Link from 'next/link'
import styles from '../static/styles'

export default class extends React.Component {
  handleClick() {
    this.props.handleClick()
  }

  render() {
    const mode = this.props.mode
    const active = this.props.active
    const time = mode ? "night" : "day"
    return (
      <div className="container">
        { active === "home" ? (
          <div className="logo" onClick={ () => this.handleClick() }>
            <img
              className="logo-img"
              src={ `/static/${mode ? "logo_dark.jpeg" : "logo.jpeg"}` }
              alt="logo"
            />
            <h2 className="title">Hacker News</h2>
          </div>
        ) : (
          <Link
            as={ `/${time}` }
            href={
              {
                pathname: '/',
                query: {
                  mode: time,
                }
              }
            }>
            <div className="logo">
              <img
                className="logo-img"
                src={ `/static/${mode ? "logo_dark.jpeg" : "logo.jpeg"}` }
                alt="logo"
              />
              <h2 className="title">Hacker News</h2>
            </div>
          </Link>
        ) }
        <style jsx>{`
          .container {
            width: 100%;
            display: flex;
            align-items: center;
            transition: ${ styles.transitions.standard };
            background-color: ${ mode ? styles.colors.standard_night : "#fff" };
          }

          .title {
            margin-left: 5px;
          }

          .logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 210px;
            color: ${ mode ? "#fff" : "#000" };
          }

          .logo-img {
            height: 45px;
            width: 45px;
          }

          .logo-img:hover {
            box-shadow: 2px 1px ${ mode ? "#ccc" : "#ddd" };
          }

          @media screen and (max-Width: 780px) {
            .logo-img:hover {
              box-shadow: none;
            }
          }

        `}</style>
      </div>
    )
  }
}
