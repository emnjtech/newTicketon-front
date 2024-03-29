import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ScaleLoader from "react-spinners/ScaleLoader";
import EventComponent from './EventComponent'



export default function NewHome() {
    const [post, setPost] = useState(null)
    const [wait, setWait] = useState(false)
    let [color, setColor] = useState("purple");
    const [currentCountry, setCurrentCountry] = useState("")
  

    useEffect(() => {
        
        const getLocation = () => {
            try {
           axios.post('https://countriesnow.space/api/v0.1/countries/positions',{name:'Nigeria'})
                .then((response) => {
                setCurrentCountry(response.data)
            })
            }
            catch (error) {
                console.log(error)
            }
        } 
       
        getLocation()
    }, [])
    
    console.log(currentCountry)

    const baseUrl = "https://ticketon-node-server.herokuapp.com/allEvents"

    useEffect(() => {
        const getPost = async () => {
            try {
                
           
            setWait(true)
            await axios.get(baseUrl).then((response) => {
                setPost(response.data);

                setWait(false)
                setColor('green')
            })
            }
            catch (error) {
                console.log(error)
            }
        }
        getPost()
    }, []);

    const newPost = post?.sort(item => item.dateCreated = -1)
    console.log(newPost)
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl text-center p-4 font-bold'>UPCOMING EVENTS </h1>
            {post? <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-[90%] mx-auto p-5'>
                {post.slice(0, 9).map((item) => (
                    <div> <EventComponent
                        key={item.eventId}
                        eventId={item.eventId}
                        image={item.image}
                        artiste={item.Artiste}
                        title={item.title}
                        province={item.province}
                        country={item.country}
                        venue={item.venue}
                        town={item.town}
                        dateAndTime={item.dateAndTime}
                        ticketFrom={item.ticketFrom}
                        alt={item.alt}
                    /></div>   

                ))

                }
                

            </div> : 
            
                <div className='flex justify-center items-center h-[300px]'> <ScaleLoader color={color} loading={wait} size={150} className='pt-0"' /></div>
            }
            
        </div>
    )
}
