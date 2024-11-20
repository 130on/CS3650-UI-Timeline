import React from 'react';
import useBootstrapTheme from '../../utils/userBootstrapTheme';
import styles from './flatdesign.module.css';



const FlatDesign = () => {
    
  useBootstrapTheme('./flatdesign.module.css');

    return <>
    
    <div className={styles.container}>
     
        <main className={styles.main}>

        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Google Website</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <img src="" alt="google website with neuomorphic design" />
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </main>
      
    </div>
    
    </> 
}

export default FlatDesign; 