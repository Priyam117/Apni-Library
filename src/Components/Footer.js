import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-black sm:p-6 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white dark:text-white">Apni Library</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase  dark:text-white">Quick Links</h2>
                <ul className="text-white dark:text-wite">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline hover:text-green-500 text-white">Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline hover:text-green-500 text-white">About Us</Link>
                    <li className="mt-4">
                      <Link to="/services" className="hover:underline hover:text-green-500 text-white">Services</Link>
                    </li>
                  </li >
                  <li >
                    <Link to="/contact" className="hover:underline hover:text-green-500 text-white">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Get Direction</h2>
                <ul >
                  <li className="mb-4">
                    <a href="https://maps.app.goo.gl/vWbCNn53vnjyx8c58" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-500 text-white ">Main Branch</a>

                  </li>
                  <li>
                    <a href="https://maps.app.goo.gl/5N1bS6nfi4pdSG55A" className="hover:underline hover:text-green-500 text-white">Circuit House</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">Contact</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <p className="hover:underline hover:text-green-500 text-white">apnilibrary32@gmail.com</p>
                  </li>
                  <li>
                    <p className="hover:underline hover:text-green-500 text-white">+91 8234923191</p>
                  </li>
                  <li>
                    <p className="hover:underline mt-3 hover:text-green-500 text-white">+91 9599678377</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com" className="hover:underline">Apni Library</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/p/Apni-Library-2-100072560973230/?paipv=0&eav=AfbjCavJ0g9-kV2FE9Rr34dOwotfutPOzp5IadT5SfVrRuRbaHv-q75JCRyql1g7_Vw&_rdr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 dark:hover:text-blue-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
              </a>
              <a href="https://www.instagram.com/apnilibrary/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 dark:hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
              </a>
              <a href="https://t.me/+fj-1wsRcD24zYzc1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 dark:hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="text-white hover:text-blue-400">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 2.053c.16-.278.47-.395.73-.26l-21.25 9.824c-.18.083-.21.273-.07.397L8.928 16.4l2.88 4.754c.148.243.46.325.706.168l5.3-3.477 3.192 2.577c.12.098.294.037.314-.126l1.95-21.25c.032-.363-.5-.56-.776-.316L22 2.052zM19.963 5.5l-4.54 14.91-2.15-1.736 1.815-2.986-3.545-2.328L5.537 16.7l2.857-.945-3.18-5.227 14.75-6.777c.365-.167.816.05.887.446l.224.973c.074.322-.226.63-.546.613l-2.812-.377z" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;