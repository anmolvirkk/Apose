import React, { Component } from 'react'
import {Bell} from 'react-feather'
import './sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <nav>
                <div className="asideItem">
                    Commitment
                </div>
                <div className="asideItem">
                    Newspaper
                </div>
                </nav>
                <div className="asideIcon">
                    <Bell />
                </div>
            </aside>
        )
    }
}
