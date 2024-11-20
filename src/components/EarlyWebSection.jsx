import classes from '../assets/flatdesign.module.css'
import ScopedWrapper from '../utils/ScopedWrapper';
import ParallaxSection from './ParallaxSection';

const EarlyWebSection = () => {
    return (
        <ScopedWrapper classes={classes}>
            <ParallaxSection date="1990s" bgColor="#ffffff" timelineColor="#000000">
                <div className="container py-4">
                    <h1>Early Web</h1>
                    <button>Button</button>
                </div>
            </ParallaxSection>
        </ScopedWrapper>
    );
}

export default EarlyWebSection;