import Image from 'next/image'
import Link from 'next/link'
import classes from '../../../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {


  return (
    <div className={classes.allHeader}>
        <div className={classes.header}>
            <div className={classes.headerRight}>
              <Link href="/" className={classes.logo}>
              <div className={classes.unsetimg}>
              <Image 
                      alt="Mountains" 
                      src="/images/DandanetLogo.png" 
                      width={250}
                      height={31}
                      className={classes.customimg}
                  />
              </div>
              </Link>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" className={classes.searchBox} placeholder='جستجو در دندانت ...'/>
            </div>
            <div className={classes.headerLeft}>
              <Link href='/cards' className={classes.userLogin}>
              <i className="fa fa-user-o" aria-hidden="true"></i>
              ورود به حساب کاربری
              </Link>
              <Link href='/cards' className={classes.shopingcart}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              
            </div>
        </div>
        
    </div>
  )
}
