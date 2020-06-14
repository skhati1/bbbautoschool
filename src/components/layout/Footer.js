import React from 'react';
import Policies from '../../data/policies.pdf';
import {Link} from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800 text-center">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">RMV Certified Professional Driving School for residents of MA. </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href={Policies}>Terms &amp; Conditions</a>
          </li>
          <li>
          < Link to="/registration" target="_blank">Registration Form</Link> &nbsp;&nbsp;  
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/BBB-Auto-School-409023959855613">Facebook</a>
          </li>
          <li>
            <a href="mailto:bbbautoschool@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
