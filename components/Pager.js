import styles from '../static/styles'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(n) {
    this.props.onClick(n)
  }

  render() {
    const page = this.props.page
    const mode = this.props.mode
    return (
      <div>
        <div className="navigation">
          { page > 1 ? (
            <button className="page prev" onClick={ () => this.handleClick(page - 1) }>Previous</button>
          ) : (
            <button className="page inactive">Previous</button>
          )
          }
          <p className="current"><b>{ this.props.page }</b></p>
          <button className="page next" onClick={ () => this.handleClick(page + 1) }>Next</button>
        </div>
        <style jsx>{`
          .navigation {
            margin-top: 2px;
            text-align: center;
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color ${ styles.transitions.standard };
            margin-bottom: ${ this.props.low ? "56px" : "2px" };
            background-color: ${ mode ? styles.colors.standard_night : "#fff" };
          }

          .current {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            height: 30px;
            width: 50px;
            border-top: 1px solid ${ mode ? "#fff" : "#000" };
            border-bottom: 1px solid ${ mode ? "#fff" : "#000" };
            background-color: #fff;
            transition: border ${ styles.transitions.standard };
            color: ${ mode ? styles.colors.standard_night : styles.colors.standard };
          }

          .page {
            width: 70px;
            border: none;
            padding: auto;
            font-weight: 600;
            height: 30px;
            font-size: 0.7rem;
            color: #eee;
            transition: background ${ styles.transitions.standard },
            color ${ styles.transitions.fast };
            border: 1px solid ${ mode ?
              "#fff" : "#000" }
          }

          .page:focus {
            outline: none;
          }

          .next, .prev {
            background-color: ${ mode ?
            styles.colors.standard_night : styles.colors.standard };
          }

          .next:hover, .prev:hover {
            color: #fff;
            cursor: pointer;
            transition: ${ styles.transitions.fastest };
            background-color: ${ mode ?
            styles.colors.standard_night : styles.colors.standard };
          }

          .page.inactive {
            background-color: #eee;
            color: #000;
          }
        `}</style>
      </div>
    )
  }
}
