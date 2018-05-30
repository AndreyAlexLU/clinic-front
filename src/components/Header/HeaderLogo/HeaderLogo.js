import React from 'react';
import './headerLogo.css';

export class HeaderLogo extends React.Component {
    render() {
        return (
            <div className='header-logo-wrapper'>
                <img src={ this.props.logoSrc } className='header-logo-img' />
                <span className='header-logo-title'>
                    { this.props.title }
                </span>
            </div>
        )
    }
}
