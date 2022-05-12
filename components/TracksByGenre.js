import { useState } from 'react'

import Tabs from './Tabs'
import Tracks from './Tracks'

import {getTracks, getGenres, filterTracksByGenre} from '../lib/api'

const TracksByGenre = () => {
	//const [stateVariable, setStateFunction] = useState(initValue);
	const tracks = getTracks();
	const genres = getGenres();

    const [activeGenre, setActiveGenre] = useState("Rock");

    return <div>
        <h2>Tracks By Genre</h2>
        <Tabs  
            items={genres} 
            activeItem = {activeGenre} 
            clickHandler= {setActiveGenre}
        />
        <Tracks 
            items={filterTracksByGenre(tracks, activeGenre)}
        /> 
    </div>
}

export default TracksByGenre;