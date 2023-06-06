import classes from './Navigation.module.css'
import kudilogo from '../../UI/imgs/savelogo.svg';
const Nav = () => {
    return ( 
        <div className={classes.nav}>
            <div className={classes.navflex}>
                <img src={kudilogo} alt="kudibar-logo" style={{width:"180px", marginBottom:"20px"}}/>
                <div className={classes.navflex2}>
                <p className={classes.expl}>Explore</p>
                <p className={classes.signin}>Signin</p>
                <div className={classes.colorbtn}>Get Started</div>
                </div>
            </div>
        </div>
     );
}
 
export default Nav;