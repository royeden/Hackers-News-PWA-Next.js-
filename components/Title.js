import styles from '../static/styles'

export default class extends React.Component {
  render() {
    const mode = this.props.mode
    return (
      <div className="title">
        <h1>{ this.props.title }</h1>
        <style jsx>{`
          .title {
            border-bottom: 2px solid ${ mode ? "#ccc" : "#ddd" };
            transition: ${ styles.transitions.standard };
            background-color: ${ mode ? styles.colors.standard_night : "#fff" };
            color: ${ mode ? "#fff" : "#000" }
          }
        `}</style>
      </div>
    )
  }
}
