import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import classes from '../../styles/Footer.module.css'


export default function Footer() {
    return (
        <Container fluid="true" className={classes.FooterContainer}>
          <footer className={classes.footer}>
            <Container>
                <section className={classes.mt5}>
                    <Row className={classes.firstRowFooter}>
                        <Col md={2}>
                            <h6 >
                                <Link href='/about' className={classes.footerLinks}>
                                    درباره‌ما
                                </Link>
                            </h6>
                        </Col>
                        <Col md={2}>
                            <h6 >
                                <Link href='/products' className={classes.footerLinks}>
                                    محصولات
                                </Link>
                            </h6>
                        </Col>
                        <Col md={2}>
                            <h6 >
                                <Link href='/contact' className={classes.footerLinks}>
                                    تماس‌با‌ما
                                </Link>
                            </h6>
                        </Col>
                        <Col md={2}>
                            <h6 >
                                <Link href='/TermsAndRules' className={classes.footerLinks}>
                                    شرایط و قوانین
                                </Link>
                            </h6>
                        </Col>
                        <Col md={2}>
                            <h6>
                                <Link href='/about' className={classes.footerLinks}>
                                    درباره‌ما
                                </Link>
                            </h6>
                        </Col>
                    </Row>
                </section>
                <hr className={classes.my3}></hr>
                <section className={classes.mb3}>
                    <Row className={classes.secondRowFooter}>
                        <Col lg={8}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                            distinctio earum repellat quaerat voluptatibus placeat nam,
                            commodi optio pariatur est quia magnam eum harum corrupti
                            dicta, aliquam sequi voluptate quas.
                        </p>
                        </Col>
                    </Row>
                </section>
                <section className={classes.lastSection}>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-google" aria-hidden="true"></i>
                    </Link>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link href='' className={classes.Medialink}>
                    <i class="fa fa-github" aria-hidden="true"></i>
                    </Link>
                </section>
            </Container>
            <div className={classes.copyRight}>استفاده از مطالب فروشگاه اینترنتی دندانت فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است کلیه حقوق این سایت متعلق به شرکت توسعه تجارت درمان آمیتیس میباشد.</div>
          </footer>
        </Container>
      );
}
