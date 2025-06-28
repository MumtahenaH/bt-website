function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-black px-10 py-16 border-t-2 border-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto text-left">

        {/* Column 1: Logo */}
        <div>
          <img src="/Office logo.png" alt="BT Logo" className="w-48 mb-4" />
        </div>

        {/* Column 2: Trademark Text */}
        <div>
          <h6 className="text-lg font-semibold mb-2">BT Technologies Ltd.</h6>
          <p className="text-sm leading-relaxed">
            Providing reliable tech since 1996.
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
