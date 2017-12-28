import styles from '../static/styles'

export default class extends React.Component {

  handleClick(filter) {
    this.props.handleFilter(filter)
  }

  render(){
    const filter = this.props.filter.active
    const mode = this.props.mode
    return (
      <div>
        <div className="container">
          <button
            className={ `filter ${filter[0]? "active-all" : "inactive-all"}` }
            onClick={ () => this.handleClick(0) }>
            Show All
          </button>
          <button
            className={ `filter ${filter[1]? "active-cold" : "inactive-cold"}` }
            onClick={ () => this.handleClick(1) }>
            Cold
          </button>
          <button
            className={ `filter ${filter[2]? "active-med" : "inactive-med"}` }
            onClick={ () => this.handleClick(2) }>
            Medium
          </button>
          <button
            className={ `filter ${filter[3]? "active-hot" : "inactive-hot"}` }
            onClick={ () => this.handleClick(3) }>
            Hot
          </button>
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            display: flex;
          }

          .filter {
            width: 25%;
            padding: 5px;
            border: 2px solid #fff;
            font-weight: 600;
            background-color: ${ mode ? "#000" : "#fff" };
            transition: ${ styles.transitions.standard };
          }

          .inactive-all {
            color: ${ mode ? styles.colors.lighter_night : styles.colors.standard };
          }

          .inactive-cold {
            color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
          }

          .inactive-med {
            color: ${ mode ? styles.colors.med_night : styles.colors.med };
          }

          .inactive-hot {
            color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
          }

          .filter:hover {
            cursor: pointer;
            color: #fff;
            transition: ${ styles.transitions.fastest };
          }

          .active-all, .active-cold, .active-med, .active-hot {
            color: #fff;
          }

          .filter.inactive-all:hover , .active-all {
            background-color: ${ mode ? styles.colors.lighter_night : styles.colors.darker};
          }

          .filter.inactive-cold:hover , .active-cold {
            background-color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
          }

          .filter.inactive-med:hover , .active-med {
            background-color: ${ mode ? styles.colors.med_night : styles.colors.med };
          }

          .filter.inactive-hot:hover , .active-hot {
            background-color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
          }

          .filter:focus {
            outline: none;
          }

          @media screen and (max-Width: 780px) {
            .filter.inactive-all:hover {
              background-color: ${ mode ? "#000" : "#fff" };
              color: ${ mode ? styles.colors.lighter_night : styles.colors.lighter };
            }

            .filter.inactive-cold:hover {
              background-color: ${ mode ? "#000" : "#fff" };
              color: ${ mode ? styles.colors.cold_night : styles.colors.cold };
            }

            .filter.inactive-med:hover {
              background-color: ${ mode ? "#000" : "#fff" };
              color: ${ mode ? styles.colors.med_night : styles.colors.med };
            }

            .filter.inactive-hot:hover {
              background-color: ${ mode ? "#000" : "#fff" };
              color: ${ mode ? styles.colors.hot_night : styles.colors.hot };
            }
          }
        `}</style>
      </div>

    )
  }
}
