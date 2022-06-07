import React from 'react';

const SunComponent = ({isDay, setIsDay}) => {
    function toggleDayNightSettings () {
        setIsDay(!isDay);
    }
    return(
        <div className={isDay ? "itsDayTime": "itsNightTime"} onClick={toggleDayNightSettings}></div>
    )
}

export default SunComponent;