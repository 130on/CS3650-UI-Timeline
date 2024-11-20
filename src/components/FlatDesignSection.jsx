import classes from '../assets/flatdesign.module.css'
import ScopedWrapper from '../utils/ScopedWrapper';
import ParallaxSection from './ParallaxSection';

const FlatDesignSection = () => {
    return (
        <ScopedWrapper classes={classes}>
            <ParallaxSection date="2013 - 2017" bgColor="#ffffff" timelineColor="#000000">
                <div className="container py-4">
                    <h1 className="h1">Flat Design</h1>
                    <button className="btn btn-primary">Button</button>
                </div>
            </ParallaxSection>
        </ScopedWrapper>
    );
}

export default FlatDesignSection;