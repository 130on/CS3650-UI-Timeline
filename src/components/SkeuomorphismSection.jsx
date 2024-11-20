import classes from '../assets/skeuomorphism.module.css'
import ScopedWrapper from '../utils/ScopedWrapper';
import ParallaxSection from './ParallaxSection';

const SkeuomorphismSection = () => {

    return (
        <ScopedWrapper classes={classes}>
            <ParallaxSection date="2007 - 2013" bgColor="#ffffff" timelineColor="#000000">
                <div className="container py-4">
                    <h1 className="h1">Skeuomorhism</h1>
                    <button className="btn btn-primary">Button</button>
                </div>
            </ParallaxSection>
        </ScopedWrapper>
    );
}

export default SkeuomorphismSection;