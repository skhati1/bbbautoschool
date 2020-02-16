import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../images/logo.png';
import Button from '../Button';

export default class Header extends React.Component {
  render() {
    let sublinks;
    sublinks = <div className="flex mt-4 sm:mt-0">
      <AnchorLink className="px-4" href="#schedule">
        Schedule
      </AnchorLink>
      <AnchorLink className="px-4" href="#services">
        Services
      </AnchorLink>
      <AnchorLink className="px-4" href="#contact">
        Contact
      </AnchorLink>
      <AnchorLink className="px-4" href="#faq">
        FAQ
      </AnchorLink>
      <AnchorLink className="px-4" href="#links">
        Links
      </AnchorLink>
    </div>
    return <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <a href="/">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <img src={Logo} alt="BBB Auto School Logo"></img>
            </div>
            BBB Auto School
        </div>
        </a>
        {sublinks}
      </div>
    </header>
  }
}

