import classes from './Trusted.module.css';
import music from '../../UI/imgs/logo1.svg';
import ken from '../../UI/imgs/logo2m.svg';
import blue from '../../UI/imgs/logo3b.svg';
import yebox from '../../UI/imgs/logo4y.svg';
import print from '../../UI/imgs/blueprint.svg';
import sme from '../../UI/imgs/logo5e.svg';
import firstflex from '../../UI/imgs/firstflex.png';
import secondflex from '../../UI/imgs/secondflex.png';
import Marquee from "react-fast-marquee";

const Trusted = () => {
    return ( 
        <div className={classes.trusted}>
            <div className={classes.color}>
                <h4 className={classes.trustedh4}>Trusted By</h4>
                <Marquee>
                    <div className={classes.flex}>
                        <img src={music} alt="music-festival" />
                        <img src={ken}style={{width:"80px"}} alt="music-festival" />
                        <img src={blue} alt="music-festival" />
                        <img src={yebox} style={{width:"150px"}} alt="music-festival" />
                        <img src={print} alt="music-festival" />
                        <img src={sme} alt="music-festival" />
                    </div>
                </Marquee>
            </div>
            

            <div className={classes.arena}>
                <p className={classes.arenap}>We are more than a ticketing platform</p>
                <h2 className={classes.arenah2}>An Arena of Events</h2>
                <div className={classes.flexpic}>
                    <div className={classes.green}>
                        <h2>Analytics Management</h2>
                        <p>Monitor the performance of your events ranging from click rates, 
                            likes, ticket sales, you name it, we got it covered.</p>
                            <img src={firstflex} style={{width:"350px", marginTop:"215px", marginLeft:"110px" }} alt="first-flex" />
                    </div>
                    <div className={classes.blue}>
                        <h2>Virtual Event Gallery</h2>
                        <p>Monitor the performance of your events ranging from click rates, 
                            likes, ticket sales, you name it, we got it covered.</p>
                            <img src={secondflex} style={{width:"280px", marginTop:"79px", marginLeft:"150px" }} alt="second-flex" />
                    </div>
                </div>

                <div className={classes.orange}>
                        <h2>Event Ticketing Made Easy</h2>
                        <p>Experience ticket purchase and management at the highest level of ease with one click of a button.</p>
                        <div className={classes.btnlk2}>Get Your Tickets</div>
                    </div>

            </div>
        </div>
     );
}
 
export default Trusted;