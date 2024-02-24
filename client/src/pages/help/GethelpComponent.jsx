import React from 'react';

import { FaStreetView } from "react-icons/fa";

import styles from './GethelpComponent.module.css';

export default function GethelpComponent() {
    return (
        <div>
            <div>
                <h3 className={styles.title}>Mental Health Helplines</h3>
            </div>
            <h2 className={styles.subscribe__title}>
                Are you or someone you know in crisis? View our helplines below, learn more about using helplines or use our handy search tool by clicking the button below.
            </h2>
            <div className={styles.subscribe}>
                <div className={styles.container}>

                    <div className={styles.boxContainer}>
                        <div className={styles.para}>Where Are You Based?</div>
                        <div className={styles.box}>
                            <select>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.boxContainer}>
                        <div className={styles.parag}>How Can I Help You?</div>
                        <div className={styles.box}>
                            <select>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>
                </div>



            </div>
            <div>
                <div>

                    <div className={`${styles.emergency_page} ${styles.section} ${styles.emergencySection}`}>
                        <h2>Emergency Page</h2>
                        <div className={styles.links}>
                            <p><b>Suicide Prevention USA:</b>

                            </p>
                            <p>1-800-273-8255</p>
                            <p><b>Suicide Prevention USA:</b></p>
                            <p>1-800-222-1222</p>

                            <p><b>Suicide Prevention USA:</b>
                            </p>
                            <p> 1-800-662-HELP (4357)</p>
                            <p>More helpful phone numbers to be added soon!</p>
                        </div>
                    </div>
                </div>
                <a href="#" className={styles.call_to_us} title="Call us at 1-800-123-4567">
                     <div className={styles.call_to_us__label}>Support</div>
                </a>


            </div>
        </div >
    );
}
