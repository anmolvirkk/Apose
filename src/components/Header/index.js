import React, { Component } from 'react'
import { User, ShoppingBag } from 'react-feather';
import './header.css'

export default class Header extends Component {
    render() {
        return (
                <header>
                    <div className="logo">Apose</div>
                    <nav>
                        <div className="navItem">Menu</div>
                        <div className="navItem"><User /></div>
                        <div className="navItem"><ShoppingBag /></div>
                    </nav>
                </header>
        )
    }
}
