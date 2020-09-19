import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { VideoDetail, SearchBar, VideoList } from './components';


export default () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDoIE4005zL-jmqpjsKh1R03lDF7Foyc0I',
                q: searchTerm
            }
        });
        setVideos(videos);
        setSelectedVideo(videos[0]);
    }
    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}