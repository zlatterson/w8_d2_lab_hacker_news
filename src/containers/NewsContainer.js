import React, {useEffect, useState} from 'react';
import NewsList from '../components/NewsList';
import TitleSelect from '../components/TitleSelect';

const NewsContainer = (() => {
    const [ topStoryIds, setTopStoryIds ] = useState( [] )
    const [topStoryTitles, setTopStoryTitles] = useState([])

    const [titleChange, setTitlechange] = useState(null);
    
    useEffect(()=>{
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')            
        .then( res => res.json() )
        .then( data => setTopStoryIds( data ) )
        const promises = topStoryIds.title.map( (title) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${topStoryIds}.json`)
            .then(res => res.json())
            .then(title => setTopStoryTitles(title.title))
        })
        // .then( data => setTopStoryIds( data ) )
    },[])




    // const handleTitle = async (topStoryIds) => {
    //     const promises = topStoryIds.title.map( (title) => {
    //         fetch(`https://hacker-news.firebaseio.com/v0/item/${topStoryIds}.json`))
    //         .then(res => res.json())
    //         .then(title => )

            
    //     }
    // }

    return(
        <h1>hi</h1>
    )
})

export default NewsContainer;