import Link from 'next/link'
import styles from '../static/styles'

export default class extends React.Component {
  handleClick() {
    this.props.handleClick()
  }

  toggleMenu() {
    this.props.toggleMenu()
  }

  render() {
    const mode = this.props.mode
    const active = this.props.active
    const menu = this.props.menu
    const time = mode ? "night" : "day"
    return (
      <div className="nav-buttons">
        <button
          className="menu"
          onClick={ () => this.toggleMenu() }
        >
          <hr className="menu-line" />
          <hr className="menu-line" />
          <hr className="menu-line" />
        </button>
        { active === "home" ? (
          <button
            className={ `page ${active === "home" ? "active" : "link"}` }
            onClick={ () => this.handleClick() }
          >
            Latest News
          </button>
        ):(
          <Link
            as={ `/${time}` }
            href={
              {
                pathname: '/',
                query: {
                  mode: time,
                }
              }}>
            <button className="page link">Latest News</button>
          </Link>
        ) }
        <Link
          as={ `/about/${time}`}
          href={{
            pathname: '/about',
            query: {
              mode: time,
            }
          }}>
          <button className={ `page ${active === "about" ? "active" : "link"}` } >
            About
          </button>
        </Link>
        <Link
          as={ `/reference/${time}`}
          href={
            {
              pathname: '/reference', query: {
                mode: mode ? "night" : "day",
              }
            }}>
          <button className={ `page ${active === "reference"? "active" : "link"}` } >
            References
          </button>
        </Link>
        <style jsx>{`
          .nav-buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
            background-color: ${ mode ? styles.colors.darker_night : "#fff" };
          }

          .page {
            margin-left: 15px;
            font-weight: 600;
            border-radius: 10px;
            padding: 10px;
            width: 100px;
            font-size: 0.75rem;
            cursor: pointer;
            display: ${ menu ? "none" : "inline"};
            transition: ${ styles.transitions.standard };
          }

          .link {
            border: none;
            background-color: #fff;
            transition: ${ styles.transitions.fastest };
            color: ${ mode ?
            styles.colors.standard_night : styles.colors.standard };
          }

          .link:hover, .active {
            color: #fff;
            border: 2px solid #fff;
            background-color: ${ mode ?
            styles.colors.darker_night : styles.colors.darker };
          }

          .active:focus, .link:focus, .menu:focus {
            outline: none;
          }

          .menu {
            margin-top: -2px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 45px;
            width: 45px;
            border: none;
            cursor: pointer;
            display: ${ menu ? "flex" : "none"};
            transition: ${ styles.transitions.standard };
            background-color: ${ mode ? styles.colors.darker_night : "#fff" };
          }

          .menu:hover {
            margin-top: 0px;
            transition: ${ styles.transitions.fastest };
            box-shadow: -3px 0px ${ mode ? "#ccc" : "#ddd" };
          }

          .menu-line {
            width: 27px;
            height: 3px;
            margin-top: 3px;
            margin-bottom: 3px;
            border-radius: 7px;
            border: none;
            transition: ${ styles.transitions.standard };
            background-color: ${ mode ? "#fff" : styles.colors.standard };
          }

          @media screen and (max-Width: 800px) {
            .page {
              padding: 8px;
              width: 90px;
              font-size: 0.7rem;
            }

            .nav-buttons{
              margin-top: 1px;
              margin-bottom: 1px;
              transition: ${ styles.transitions.standard };
              background-color: ${ mode ? styles.colors.darker_night : "#fff" };
            }

            .menu {
              margin-top: 0px;
            }

            .menu:hover {
              box-shadow: none;
              transition: ${ styles.transitions.fastest };
            }
          }

          @media screen and (max-Width: 472px) {
            .page {
              padding: 6px;
              width: 80px;
              margin-left: 5px;
              font-size: 0.65rem;
            }
          }

          @media screen and (max-Width: 450px) {
            .nav-buttons {
              align-items: flex-end;
              flex-direction: column;
            }

            .page {
              margin-top: 2px;
              margin-bottom: 2px;
            }
          }

        `}</style>
      </div>
    )
  }
}
