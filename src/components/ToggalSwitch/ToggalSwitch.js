// ToggleSwitch.js

import React from 'react';

const ToggleSwitch = ({ isDarkTheme, onToggle }) => (
    <div className="top-right-toggle">
        <label className="toggle-switch">
            <input type="checkbox" checked={isDarkTheme} onChange={onToggle} />
            <span className="slider round">
                {isDarkTheme ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </span>
        </label>
    </div>
);

const MoonIcon = () => (
    <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.878,16.941A9.528,9.528,0,0,1,11.569,22,9.811,9.811,0,0,1,2,11.984,9.854,9.854,0,0,1,10.923,2a1.034,1.034,0,0,1,.912.458,1,1,0,0,1,.036,1.019,8.278,8.278,0,0,0-.72,1.785,1,1,0,1,1-1.929-.528c.037-.135.077-.269.119-.4A7.989,7.989,0,0,0,4,11.984,7.811,7.811,0,0,0,11.569,20a7.4,7.4,0,0,0,5.568-2.6,9.352,9.352,0,0,1-5.335-2.7,1,1,0,0,1,1.416-1.412,7.23,7.23,0,0,0,5.622,2.177,1.053,1.053,0,0,1,.957.453A1,1,0,0,1,19.878,16.941ZM20.5,13v-.5H21a1,1,0,0,0,0-2h-.5V10a1,1,0,0,0-2,0v.5H18a1,1,0,0,0,0,2h.5V13a1,1,0,0,0,2,0Zm-4-11a1,1,0,0,0-1,1v.5H15a1,1,0,0,0,0,2h.5V6a1,1,0,0,0,2,0V5.5H18a1,1,0,0,0,0-2h-.5V3A1,1,0,0,0,16.5,2Zm-6,10a1,1,0,0,0,1-1v-.5H12a1,1,0,0,0,0-2h-.5V8a1,1,0,0,0-2,0v.5H9a1,1,0,0,0,0,2h.5V11A1,1,0,0,0,10.5,12Z" />
    </svg>
);

const SunIcon = () => (
    <svg fill="#ffea00" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffea00">
        <path d="M23.395 14.106c2.958-1.383 2.828-6.068 5.758-5.884-4.125-2.74-4.019 3.106-9.089 1.235 1.107-3.068-2.292-6.286-0.091-8.227-4.855 0.979-0.645 5.039-5.555 7.301-1.384-2.958-6.068-2.828-5.884-5.758-2.74 4.125 3.106 4.019 1.235 9.089-3.068-1.107-6.286 2.292-8.227 0.091 0.979 4.855 5.039 0.645 7.301 5.555-2.958 1.384-2.828 6.068-5.758 5.884 4.125 2.74 4.019-3.106 9.089-1.235-1.107 3.068 2.292 6.286 0.091 8.227 4.855-0.979 0.645-5.039 5.555-7.301 1.384 2.958 6.068 2.828 5.884 5.758 2.74-4.125-3.106-4.019-1.235-9.089 3.068 1.107 6.286-2.292 8.226-0.091-0.979-4.855-5.039-0.645-7.301-5.555z" />
    </svg>
);

export default ToggleSwitch;
