import { Container, Navbar, Nav, NavDropdown, Card, Button, Row, Col } from "react-bootstrap";



function Footer() {
    return (
        <footer class="footer">
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="col-md-4 col-xs-12">
                        <h6>ADDRESS</h6>
                        <p>
                            Atlantic City, NJ
                        </p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div>
                            <h6>PHONE</h6>
                            <p>
                                <a href="tel:+1 609-289-9607 ">+1 609-289-9607 </a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div>
                            <h6>EMAIL</h6>
                            <p>
                                <a href="mailto:pzwick@cioccaatlanticcitycrm.com ">pzwick@cioccaatlanticcitycrm.com  </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;