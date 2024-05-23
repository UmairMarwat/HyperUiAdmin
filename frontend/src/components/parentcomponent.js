// ParentComponent.js
import React from 'react';
import Addplayer from './addplayer'

const ParentComponent = () => {
    const handleSearch = (searchTerm) => {
        // Logic to handle the search
        console.log('Searching for:', searchTerm);
    };

    return (
        <div>
            <Addplayer onSearch={handleSearch} />
            {/* Other components or content */}
        </div>
    );
};

export default ParentComponent;