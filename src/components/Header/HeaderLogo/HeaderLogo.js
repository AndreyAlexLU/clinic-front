import React from 'react';
import './headerLogo.css';

export class HeaderLogo extends React.Component {
    render() {
        return (
            <div>
                <img src={ this.props.logoSrc } className='header-logo-img' />
                <span>
                    { this.props.title }
                </span>
            </div>
        )
    }
}