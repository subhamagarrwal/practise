"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const LPFooter: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string>('Hire a freelancer');

    return (
        <footer className="bg-transparent text-white flex flex-col sx:flex-row justify-around flex-wrap">
            <ToggleButton
                label="Hire a freelancer"
                selected={selectedButton === 'Hire a freelancer'}
                onClick={() => setSelectedButton('Hire a freelancer')}
            />
            <ToggleButton
                label="Apply as freelancer"
                selected={selectedButton === 'Apply as freelancer'}
                onClick={() => setSelectedButton('Apply as freelancer')}
            />
        </footer>
    );
};

export default LPFooter;
