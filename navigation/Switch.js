import styles from '../static/styles'

export default class extends React.Component {
  changeMode() {
    this.props.changeMode()
  }

  render() {
    const mode = this.props.mode
    return (
      <div className="switch">
        <p>Mode: <span className="mode">{ mode ? "night" : "day" }-time.</span></p>

        <button
          className="changer"
          onClick={ () => this.changeMode() }>
        </button>

        <style jsx>{`
          .switch {
            position: absolute;
            left: 180px;
            padding-left: 6px;
            margin-left: 40px;
            font-weight: 600;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
            display: ${ this.props.menu ? "none" : "flex" };
            transition: border ${ styles.transitions.slowest };
            border: 2px solid ${ mode ? "#fff" : "#000" };
          }

          .mode {
            padding-left: 2px;
            padding-right: 2px;
            padding-bottom: 1px;
            color: #fff;
            height: 100%;
            transition: ${ styles.transitions.standard }
            background-color: ${ mode ? styles.colors.standard_night : styles.colors.standard };
          }

          .changer {
            font-weight: 600;
            height: 12px;
            width: 12px;
            border-radius: 100%;
            border: none;
            margin-right: 4px;
            transition: background ${ styles.transitions.fast };
            margin-left: ${ mode ? "5px" : "19px" };
            background-color: ${ mode ? styles.colors.standard_night : styles.colors.standard };
          }

          .changer:hover {
            cursor: pointer;
            background-color: ${ mode ?
            styles.colors.standard : styles.colors.standard_night }
          }

          .changer:focus {
            outline: none;
          }

          @media screen and (max-Width: 780px) {
            .switch {
              font-size: 0.8rem;
              left: -36px;
            }
          }
        `}</style>
      </div>
    )
  }
}
