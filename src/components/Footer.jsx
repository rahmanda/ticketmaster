import React from 'react';

function Footer(props) {
  return (
    <footer className="bg-gray-300 py-4 px-8 text-center text-xs text-gray-700">
      <p className="mb-2">
        By continuing past this page, you agree to our <a className="text-blue-900 font-bold" href="https://www.ticketmaster.com/h/terms.html">Terms of Use</a>.
      </p>
      <div>
        <a className="text-blue-900 font-bold" href="https://www.ticketmaster.com/h/privacy.html">Privacy Policy</a> <span>© 1999-2019 Ticketmaster. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
