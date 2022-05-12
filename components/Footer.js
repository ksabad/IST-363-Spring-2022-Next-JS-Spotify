import styles from './footer.module.scss'

import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import Row from './Row'


const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="3" sm="3">
                    <Logo color="white" />
                </Col>
                <Col xs="12" sm="9">
                    <Nav />
                </Col>
                <Col sm="3">
                    Social Media Links
                </Col>
            </Row>
        </Container>
        </footer>
}
export default  Footer;