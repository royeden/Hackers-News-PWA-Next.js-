import Head from 'next/head'
import Nav from '../navigation/Nav'

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

  render(){
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/favicon.png"
          />
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        </Head>
        <Nav
          active={ this.props.name }
          handleClick={ () => this.handleClick() }
          changeMode={ () => this.changeMode() }
          toggleMenu={ () => this.toggleMenu() }
          mode={ this.props.mode }
          menu={ this.props.menu }
        />
      </div>
    )
  }
}
