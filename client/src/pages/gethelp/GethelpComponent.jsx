import React, { useState } from 'react';

import styles from './GethelpComponent.module.css';

export default function GethelpComponent() {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

    const options = [
        {
            label: "Suicide Prevention USA",
            phoneNumber: "1-800-273-8255",
            location: "USA",
            howToHelp: "suicide"
        },
        {
            label: "National Autism Hotline",
            phoneNumber: "1-800-222-1222",
            location: "USA",
            howToHelp: "autism"
        },
        {
            label: "Depression Helpline",
            phoneNumber: "1-800-662-HELP (4357)",
            location: "USA",
            howToHelp: "depression"
        },
    ];

    // Filter options based on location and howToHelp

    function handleSelect(event) {
        setValue(event.target.value);
    }

    function handleSelect1(event) {
        setValue1(event.target.value);
    }

    return (
        <div>
            <div>
                <h3 className={styles.title}>Mental Health Helplines</h3>
            </div>
            <h2 className={styles.subscribe__title}>
                Are you or someone you know in crisis? View our helplines below, learn more about using helplines, or use our handy search tool by clicking the button below.
            </h2>
            <div className={styles.subscribe}>
                <div className={styles.container}>
                    <div className={styles.boxContainer}>
                        <div className={styles.para}>Where Are You Based?</div>
                        <div className={styles.box}>
                            <div className={styles.input_container}>
                                <select onChange={handleSelect}>
                                    <option value="">All</option> {/* Default option for all */}
                                    {[...new Set(options.map(option => option.location))].map((location, index) => (
                                        <option key={index} value={location}>
                                            {location}
                                        </option>
                                    ))}

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxContainer}>
                        <div className={styles.parag}>How Can I Help You?</div>
                        <div className={styles.box}>
                            <div className={styles.input_container}>
                                <select onChange={handleSelect1}>
                                    <option value="">All</option> {/* Default option for all */}
                                    {[...new Set(options.map(option => option.howToHelp))].map((howToHelp, index) => (
                                        <option key={index} value={howToHelp}>
                                            {howToHelp}
                                        </option>
                                    ))}

                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className={styles.section}>
                    <h1>Emergency Helpline Numbers</h1>

                    <ul className={styles.links}>
                        {value !== '' || value1 !== '' ? (
                            // Display filtered options if either location or howToHelp is selected
                            (() => {
                                const filteredOptions = options
                                    .filter(option =>
                                        (value === '' || option.location === value) &&
                                        (value1 === '' || option.howToHelp === value1)
                                    );

                                // Check if all locations are USA
                                const allLocationsAreUSA = filteredOptions.every(option => option.location === 'USA');

                                return allLocationsAreUSA ? (
                                    <li>
                                        <strong>Emergency Helpline Numbers in USA</strong>
                                        {filteredOptions.map((option, index) => (
                                            <div key={index}>
                                                <p>Phone Number: {option.phoneNumber}</p>
                                                <p>Location: {option.location}</p>
                                                <p>How to Help: {option.howToHelp}</p>
                                            </div>
                                        ))}
                                    </li>
                                ) : (
                                    filteredOptions.map((option, index) => (
                                        <li key={index}>
                                            <strong>{option.label}</strong>
                                            <p>Phone Number: {option.phoneNumber}</p>
                                            <p>Location: {option.location}</p>
                                            <p>How to Help: {option.howToHelp}</p>
                                        </li>
                                    ))
                                );
                            })()
                        ) : (
                            // Display all options if no selection is made
                            options.map((option, index) => (
                                <li key={index}>
                                    <strong>{option.label}</strong>
                                    <p>Phone Number: {option.phoneNumber}</p>
                                    <p>Location: {option.location}</p>
                                    <p>How to Help: {option.howToHelp}</p>
                                </li>
                            ))
                        )}




                    </ul>
                </div>
                <a href="#" className={styles.call_to_us}>
                    <div className={styles.call_to_us__label}>Support<br />FREE CALL</div>
                </a>
            </div>
        </div>
    );
}
