// import Layout from '@/components/layout/Layout';
// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS= [
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/2683dfb6-47e9-44f9-a1b5-78315738a1f6/23ed0ed9-9cef-4d4a-921c-146a282d9105/1280x720/match/image.jpg',
        address:'Bangalore',
        description:'This is first meetup!'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://c4.wallpaperflare.com/wallpaper/39/876/963/beautiful-beauty-beautiful-place-nature-mountains-hd-art-wallpaper-preview.jpg',
        address:'Chennai',
        description:'This is second meetup!'
    },

]
function HomePage(props){
    

    return  <MeetupList meetups={props.meetups} />;
    
}

export async function getStaticProps() {
         return {
            props:{
                meetups:DUMMY_MEETUPS
            },
            revalidate:10
         };
}

export default HomePage;