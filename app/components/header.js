import React from 'react'
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

class AppBarIconMenu extends React.Component {
  render() {
  	return (
	  <AppBar
	    title="知乎日报"
	    iconElementLeft={<IconButton onClick={this.props.handleClick}><ArrowBack /></IconButton>}
	    iconElementRight={
	      <IconMenu
	        iconButtonElement={
	          <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
	        <MenuItem primaryText="Refresh" />
	        <MenuItem primaryText="Help" />
	      </IconMenu>
	    }/>
	)
  }
}

export default class Header extends React.Component {
	constructor(context) {
		super(context)
		this.state = {
			page: '知乎日报'
		}
	}
	handleClickBtn() {
		this.context.router.goBack()
	}
	handleTouchTap() {
		console.log('touch')
	}
	render() {
		return (
				<header>
					<AppBarIconMenu handleClick={this.handleClickBtn.bind(this)} />
				</header>
		)
	}
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}