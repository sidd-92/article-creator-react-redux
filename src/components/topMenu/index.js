import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import Item from './item'
import Lead from './lead'

import './topMenu.css'

class TopMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu_class: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }


  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
        <div>
          <div className={top_menu_class} >
            <Lead text="Article Creator" />
            <div className='left'>
              <Item hasIcon={false} text='List Of Articles'/>
              <Item hasIcon={false} text='Add Articles'/>
            </div>
            <div className='right'>
              <Item hasIcon={false} text='Dashboard' />
              <Item hasIcon={true} text='Login' />
            </div>
            <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
            <div className='clear-fix' />
          </div>
        </div>
    )
  }
}

export default TopMenu;