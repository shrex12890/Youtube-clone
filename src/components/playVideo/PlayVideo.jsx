import React, { useEffect, useState } from 'react'
import './PlayVideo.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_key, value_converter } from '../../data'
import { data } from 'react-router-dom'
 import moment from 'moment'



const PlayVideo = ({videoId}) => {

    const [apiData,setApiData] = useState(null);

    const fetchVideoData = async () =>{
        const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_key}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]))
    }

    useEffect(()=>{
        fetchVideoData();
    },[])

  return (
    <div className='play-video'>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>

        <div className='play-video-info'>
            <p>{apiData? value_converter(apiData.statistics.viewCount) :"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>

            <div >
                <span><img src={like} alt="" /> {apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" /> {apiData?value_converter(apiData.statistics.dislikeCount):155}</span>
                <span><img src={share} alt="" /> Share</span>
                <span><img src={save} alt="" /> Save</span>

            </div>
        </div>

        <hr />

        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"The channel"}</p>
                <span>1M Subscribers</span>
            </div>

            <button>Subscribe</button>
        </div>

        <div className="description">
            <p>{apiData ? apiData.snippet.description.slice(0, 250) : "description"}</p>
            <hr />

            <h4>{apiData?value_converter(apiData.statistics.commentCount):"120 comments"} comments</h4>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicl <span>1 day ago</span></h3>
                    <p>Since Toy Story is for Pixar, Disney could make a show like this</p>
                
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>11</span>
                    </div>
                </div>

            </div>


            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicl <span>1 day ago</span></h3>
                    <p>Since Toy Story is for Pixar, Disney could make a show like this</p>
                
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>11</span>
                    </div>
                </div>

            </div>


            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicl <span>1 day ago</span></h3>
                    <p>Since Toy Story is for Pixar, Disney could make a show like this</p>
                
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>11</span>
                    </div>
                </div>

            </div>


            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicl <span>1 day ago</span></h3>
                    <p>Since Toy Story is for Pixar, Disney could make a show like this</p>
                
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>11</span>
                    </div>
                </div>

            </div>


            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicl <span>1 day ago</span></h3>
                    <p>Since Toy Story is for Pixar, Disney could make a show like this</p>
                
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>11</span>
                    </div>
                </div>

            </div>
            
        </div>

        

    </div>
  )
}

export default PlayVideo