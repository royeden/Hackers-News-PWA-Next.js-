import NavButtons from './NavButtons'
import Switch from './Switch'
import styles from '../static/styles'

export default class extends React.Component {
  handleClick() {
    this.props.handleClick()
  }

  changeMode() {
    this.props.changeMode()
  }

  render() {
    const menu = this.props.menu
    const mode = this.props.mode
    return (
      <div className="menu">
        <Switch
          menu={ menu }
          mode={ mode }
          changeMode={ () => this.changeMode() }
        />
        <NavButtons
          menu={ menu }
          mode={ mode }
          handleClick={ () => this.handleClick() }
          active={ this.props.active }
        />
        <style jsx>{`
          .menu {
            align-items: center;
            justify-content: center;
            display: flex;
            transition: ${ styles.transitions.fast };
            opacity: ${ this.props.on ? "1" : "0" };
            display: ${ menu ? "none" : "flex" };
            border-bottom: 2px solid ${ mode ? "#ccc" : "#ddd" };
          }

          @media screen and (max-Width: 400px) {
            .menu {
              opacity: 1;
              display: ${ this.props.on ? "flex" : "none" };
            }
          }
        `}</style>
      </div>
    )
  }
}
