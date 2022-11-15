import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function index() {
    const TermsData = [
        {
            id:0,
            eventKey:0,
            Header:'قوانین عمومی',
            Body:
            [
                'توجه داشته باشید کلیه اصول و روی‏‌های دندانت منطبق با قوانین کشور ایران، از جمله قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف‌کننده است و متعاقباً کاربر نیز موظف به رعایت قوانین مرتبط با کاربران است.',
                'در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های دندانت تغییراتی ایجاد شود، در همین صفحه منتشر و به‌روزرسانی می‌شود و استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.',
                'کسب و کار سایت به‌صورت B2C بوده و فروش تنها به دندانپزشکان، دانشجویان دندانپزشکی و مراکز درمانی، پزشکان و سایر افراد اشخاص حقیقی به عنوان انجام می‌شود.'
            ]
        },
        {
            id:1,
            eventKey:1,
            Header:'تعریف مشتری یا کاربر',
            Body:
            [
                'مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری که در فرم ثبت‌نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات دندانت اقدام نماید.'
            ]
        },
        {
            id:2,
            eventKey:2,
            Header:'ارتباط الکترونیکی',
            Body:
            [
                'هنگام ثبت یا خرید سفارش اینترنتی یا ارسال ایمیل به دندانت، این ارتباطات به‌صورت الکترونیکی انجام می‌شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که دندانت به صورت الکترونیکی، از طریق پست الکترونیکی، سرویس پیام کوتاه و یا سایر سرویس‌های الکترونیکی، به درخواست شما پاسخ دهد.',
                'دندانت به‌منظور ارتباط و ارائه خدمات هرچه بهتر و اطلاع‌رسانی رویدادها، اخبار، خدمات و سرویس‌ها یا پیشنهادهای ویژه به کاربران و اعضای خود، از ارسال ایمیل، پیامک و یا پیام الکترونیک روی بستر نرم‌افزارهای ارتباطی، استفاده می‌نماید که کاربر در صورت عدم تمایل به دریافت این‌گونه ارتباطات می‌توانند عضویت دریافت خبرنامه دندانت را لغو نماید.',
                'توجه داشته باشید که دندانت فقط از طریق ایمیل  support@dandanet.irبرای مخاطبین ایمیل ارسال می‌کند. بنابراین دریافت هرگونه پیامک و یا پیامی تحت عنوان دندانت، با هر شماره و یا ایمیل دیگری تخلف و سوءاستفاده از نام دندانت است. در صورت بروز چنین اتفاقی، لطفاً جهت ما را از طریق ایمیل  support@dandanet.ir مطلع کنید.',
            ]
        },
        {
            id:3,
            eventKey:3,
            Header:'',
            Body:''
        },
        {
            id:4,
            eventKey:4,
            Header:'',
            Body:''
        },
        {
            id:5,
            eventKey:5,
            Header:'',
            Body:''
        },
        {
            id:6,
            eventKey:6,
            Header:'',
            Body:''
        },
        {
            id:7,
            eventKey:7,
            Header:'',
            Body:''
        },
        {
            id:8,
            eventKey:8,
            Header:'',
            Body:''
        },
        {
            id:9,
            eventKey:9,
            Header:'',
            Body:''
        },
        {
            id:10,
            eventKey:10,
            Header:'',
            Body:''
        },
        {
            id:11,
            eventKey:11,
            Header:'',
            Body:''
        },
        {
            id:12,
            eventKey:12,
            Header:'',
            Body:''
        },
      
    ]
    return (
        <Container>
            <Row>
            <Accordion>
            {
                Array(15).fill({}).map((p,index)=>{
                <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
                })
            }
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
            </Row>
        </Container>
        
      );
}
