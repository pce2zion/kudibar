import classes from './Moments.module.css'
import fembig from '../../UI/imgs/kudibarwoman.jpeg';


const Moments = () => {
    return ( 
        <div className={classes.momentss}>
            <p>Make your events more memorable</p>
            <h2>Start Creating Today</h2>
            <div className={classes.flexmo}>
                <div>
                    <img src={fembig} alt="female" />
                    <div className={classes.create}>
                        <h2>Create events </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.</p>
                    </div>
                    
                </div>
                <div>
                    <img src={fembig} alt="female" />
                    <div className={classes.create}>
                        <h2>Create events </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Moments;