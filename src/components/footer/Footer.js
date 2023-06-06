import classes from './Footer.module.css'
import logo from '../../UI/imgs/logo-kudibar.svg'
const Footer = () => {
    return ( 
        <div className={classes.footer}>
           <div className={classes.flexf}>
            <div className={classes.flexfi}>
                <img src={logo} alt="logo-big" />
                <p>Kudibar is your one stop shop for everything event tickets and cinema movies.</p>
            </div>
            <div className={classes.flexsmall}>
                <div className={classes.flexrow1}>
                    <p className={classes.pbold}>About</p>
                    <p>Company</p>
                    <p>Why Kudibar</p>
                    <p>Pricing</p>
                    <p>Career</p>
                    <p>Team</p>
                </div>
                <div className={classes.flexrow2}>
                    <p className={classes.pbold}>Support</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    
                </div>
                <div className={classes.flexrow3}>
                    <p className={classes.pbold}>Legals</p>
                    <p>Pricing Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
                                                                                                                                                                                                                                                                                                

           </div >
           <p className={classes.pdown}>All rights reserved 2020 Kudibar</p>
        </div>
     );
}
 
export default Footer;