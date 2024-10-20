import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-start">
        <div>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <input
            placeholder="Enter Your Email Address "
            className="subscribe-input"
          />
          <br />
          <button>SUBSCRIBE</button>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <p>Our Story</p>
          <p>Blogs</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Help & Support</p>
        </div>
        <div>
          <h3>OUR SERVICES</h3>
          <p>Book Maali</p>
          <p>Plant Day Care</p>
          <p>Rent Plants</p>
          <p>Plants & Pots</p>
          <p>Gardening Tools</p>
        </div>

        <div>
          <h3>USEFUL LINKS</h3>
          <p>My Account</p>
          <p>Orders & Returns</p>
          <p>Track Order</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Return, Refund & Replacement Policy</p>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>
      <div className="footer-middle">
        <h3>CHAPERONE</h3>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="footer-end">
        <h3>Follow us on</h3>
        <div className="icon-container">
          <FaInstagram size={26} />
          <FaFacebook size={26} />
          <FaSquareThreads size={26} />
          <FaYoutube size={26} />
          <FaLinkedin size={26} />
        </div>
      </div>
      <div className="website-link">
        <p className="website">© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
}
