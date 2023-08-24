// const { Fragment } = require("react");
import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(){

    return( 
    <MeetupDetail image='https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/2683dfb6-47e9-44f9-a1b5-78315738a1f6/23ed0ed9-9cef-4d4a-921c-146a282d9105/1280x720/match/image.jpg' 
    title='A First Meetup' 
    address='Bangalore' 
    description='The Meetup Description' />
    );
}

export function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {
                params: {
                meetupId:'m1',
            }
        },
        {
            params: {
            meetupId:'m2',
        },
    }
        ]
    }
}


export function getStaticProps(context){
      const meetupId = context.params.meetupId;
      console.log(meetupId);

    return{
        props:{
            meetupData:{
                image:'https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/2683dfb6-47e9-44f9-a1b5-78315738a1f6/23ed0ed9-9cef-4d4a-921c-146a282d9105/1280x720/match/image.jpg',
                id:meetupId,
                title:'First Meetup',
                address:'Bangalore',
                description:'The Meetup Description'
            }
        }
    }
}

export default MeetupDetails;