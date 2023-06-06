import classes from './Main.module.css'
import Marquee from "react-fast-marquee";
import femlogo from '../../UI/imgs/fem.png';
import malelogo from '../../UI/imgs/male.png';
const Main = () => {
    return (  
        <div className={classes.main}>
            <div className={classes.text}>
                <h2 className={classes.mainh1}>Experience Virtual Events Like Never Before.</h2>
            <p className={classes.mainp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem vero nesc.
                <div className={classes.btnlk}>Come into the Arenas</div>
                </p>
            </div>
            
                <div className={classes.slider}>
                 <Marquee className= {classes.marq}direction='down' >
                    <img className={classes.femsl2}  src={femlogo} alt="sliding" />
                    <img className={classes.male2}  src={malelogo} alt="sliding" />
                    {/* <img className={classes.male} src={malelogo} alt="sliding" /> */}
                    </Marquee>  
                
                </div>
            
           
        </div>
    );
}
 
export default Main;