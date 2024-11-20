import React from 'react';
import useBootstrapTheme from '../../utils/userBootstrapTheme';
import styles from './skeuomorphism.module.css';



const Skeuomorphism = () => {
    
  useBootstrapTheme('./skeuomorphism.module.css');

    return <>
    
    <div className={styles.container}>
     
        <main className={styles.main}>

        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Google Website</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <img src="" alt="" />
              <p className="card-text">An example of the google website that was used at the time</p>
          </div>
        </div>
        </main>
      
    </div>
    
    </> 
}

export default Skeuomorphism; 