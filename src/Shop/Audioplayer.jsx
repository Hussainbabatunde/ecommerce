import React, {useState, useRef, useEffect } from 'react';
import './audiostyles.css';
import {BiLeftArrowAlt} from 'react-icons/bi';
import {BiRightArrowAlt} from 'react-icons/bi';
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
// import grenade1 from './grenade.mp3';

//  
function Audioplayer(props){
    const [IsPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlayPause = () => {
        const prevValue = IsPlaying;
        setIsPlaying(!prevValue);
       
        if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whileplaying);
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    

    const audioPlayer= useRef();
    const progressBar= useRef();
    const animationRef = useRef();


    useEffect(()=> {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? '0' + seconds : seconds;
        return returnedMinutes + ':' + returnedSeconds ;
    }

    const whileplaying= () =>{
        progressBar.current.value = audioPlayer.current.currentTime;
       changePlayerCurrentTime();
       animationRef.current = requestAnimationFrame(whileplaying);
    }
        const changeRange = () => {
            audioPlayer.current.currentTime = progressBar.current.value;
           changePlayerCurrentTime();
        }

        const changePlayerCurrentTime = () => {
            setCurrentTime(progressBar.current.value);
        }


        const back30 = () =>{
            progressBar.current.value = Number(progressBar.current.value - 30);
            changeRange();
        }

        const forward30 = () =>{
            progressBar.current.value = Number(progressBar.current.value + 30);
            changeRange();
        }


    return(
        <div className='playstyle'>
            <button className='forwardBackward' onClick={back30}><BiLeftArrowAlt />30</button>
            <audio ref={audioPlayer} src={props.music1} />
            <button onClick={togglePlayPause} className='playpause'> {IsPlaying ? <FaPause /> : <FaPlay />} </button>
            <button className='forwardBackward' onClick={forward30}><BiRightArrowAlt />30</button>

            <div className='currentTime'>{calculateTime(currentTime)}</div>

            <div>
            <input type='range' className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange}/>
            </div>

            <div className='duration'>{ calculateTime(duration)}</div>
        </div>
    )
}

export default Audioplayer;