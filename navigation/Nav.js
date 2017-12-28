import Logo from './Logo'
import Switch from './Switch'
import Buttons from './NavButtons'
import styles from '../static/styles'

export default class extends React.Component {
  handleClick() {
    this.props.handleClick()
  }

  changeMode() {
    this.props.changeMode()
  }

  toggleMenu() {
    this.props.toggleMenu()
  }

  render() {
    const active = this.props.active
    const mode = this.props.mode
    return (
      <nav className="navbar">
        <Logo
          handleClick={ active === "home" ? () => this.handleClick() : "" }
          mode={ mode }
          active={ active }
        />
        <Switch
          changeMode={ () => this.changeMode() }
          mode={ mode }
          menu={ this.props.menu }
        />
        <Buttons
          mode={ mode }
          active={ active }
          handleClick={ active === "home" ? () => this.handleClick() : "" }
          toggleMenu={ () => this.toggleMenu() }
          menu={ this.props.menu }
        />
        <style jsx>{`
          .navbar {
            display: flex;
            align-items: center;
            height: 48px;
            border-bottom: 3px solid ${ mode ? "#ccc" : "#ddd" };
            transition: ${ styles.transitions.slow };
          }
        `}</style>
      </nav>
    )
  }
}
