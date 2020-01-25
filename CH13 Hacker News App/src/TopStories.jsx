import React from 'react';
import { connect } from 'react-redux';
import { showMoreStories } from './operations';
import StoryItem from './StoryItem';

function TopStories({ stories, showMoreStories }){
    return (
        <div>
            <div>
                { stories.map(story => 
                    <StoryItem key={story.id} story={story} />
                )}
            </div>
            <div>
                <button 
                    onClick={showMoreStories} 
                    type="button">
                        Show More
                </button>
            </div>
        </div>
    )
}

function mapState({topStories}){
    return {
        stories: topStories
    }
}
    
export default connect(
    mapState,
    { showMoreStories }
)(TopStories);