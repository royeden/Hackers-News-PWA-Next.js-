import Header from './Header'
import Footer from './Footer'
import Title from './Title'
import Menu from '../navigation/Menu'
import styles from '../static/styles'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      needMenu: false,
      menu: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.needMenu())
    this.setState({needMenu: window.outerWidth <= 800})
  }

  toggleMenu() {
    const status = !this.state.menu
    this.setState({menu: status})
  }

  changeMode() {
    this.props.changeMode()
  }

  handleClick() {
    this.props.onClick()
  }

  needMenu() {
    const need = window.outerWidth <= 800
    this.state.menu && !need ? this.toggleMenu() : ""
    this.setState({needMenu: need})
  }

 render() {
   const menu = this.state.needMenu
   const mode = this.props.mode
   const name = this.props.name
   const title = this.props.title
   return (
     <div>
       <Header
         title={ title }
         name={ name }
         mode={ mode }
         handleClick={ () => this.handleClick() }
         changeMode={ () => this.changeMode() }
         toggleMenu={ () => this.toggleMenu() }
         menu={ menu }
       />
       <Menu
         active={ name }
         on={ this.state.menu }
         menu={ !menu }
         mode={ mode }
         handleClick={ () => this.handleClick() }
         changeMode={ () => this.changeMode() }
       />
       <Title
         mode={ mode }
         title={ title }
       />
       { this.props.children }
       <Footer mode={ this.props.mode } />

       <style jsx global>{`
         * {
           padding: 0;
           margin: 0;
           box-sizing: border-box;
           font-family: 'Montserrat', sans-serif;
         }


         body {
           transition: ${ styles.transitions.standard };
           background-color: ${ this.props.mode ? styles.colors.darker_night : "#fff"};
         }
        `}</style>
     </div>
   )
 }
}
