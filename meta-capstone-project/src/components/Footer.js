import { Link } from "react-router-dom";
import logo from '../images/Logo .svg';
export default function Footer() {

    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''></img>
                    <p>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul >
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Menu</a>
                        </li>
                        <li>
                            <a href="/">Reservations</a>
                        </li>
                        <li>
                            <a href="/">Order Online</a>
                        </li>
                        <li>
                            <a href="/">Login</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul >
                        <li>
                            <a href="/">Address:<br/> Test Address </a>
                        </li>
                        <li>
                            <a href="/">Phone:<br/> +974000000  </a>
                        </li>
                        <li>
                            <a href="/">Email:<br/> Test@test.com  </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul >
                        <li>
                            <a href="/">Facebook </a>
                        </li>
                        <li>
                            <a href="/">Instagram </a>
                        </li>
                        <li>
                            <a href="/">Twitter</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}