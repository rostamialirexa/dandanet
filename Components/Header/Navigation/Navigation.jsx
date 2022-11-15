
import RightNavigation from './RightNavigation';
import LeftNavigation from './LeftNavigation';
import classes from '../../../styles/Navigation.module.css' 
export default function Navigation(props) {
  const {setShowCategoryProduct} = props
  return (
    <>
      <nav className={classes.MenuContainer}>
            <ul className={classes.menu}>
            <RightNavigation setShowCategoryProduct={setShowCategoryProduct}/>
            <LeftNavigation/>
            </ul>
        </nav>
        
    </>
  )
}
