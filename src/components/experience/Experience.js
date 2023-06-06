import classes from './Experience.module.css';
import google from '../../UI/imgs/googleplay.svg';
import ios from '../../UI/imgs/iosplay.svg'
import bigphone from '../../UI/imgs/bigphone.png'
const Experience = () => {
    return (
        <div className={classes.exp}>
            <div className={classes.firstflex}>
                <h2>Experience the Arena effect on any device</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in in mauris molestie turpis.</p>
                <div className={classes.flexsmall}>
                    <img src={google} alt="google" />
                    <img src={google} alt="ios" />
                </div>
            </div>
            <div className={classes.bigphone}>
                <img style={{width:"390px", marginTop:"313px", marginLeft:"260px"}} src={bigphone} alt="big phone" />
            </div>
            
        </div> 
    );
}
 
export default Experience;