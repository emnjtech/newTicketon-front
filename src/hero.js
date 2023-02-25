import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
import { useNavigate } from 'react-router-dom';






export default function Hero() {
    const [searchCountry, setSearchCountry] = useState([])
    const [searchProvince, setSearchProvince] = useState([])
    const [hintData, setHintData] = useState([])
    const [hintCountry, setHintCountry] = useState([])
    const [hintState, setHintState] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    const navigate = useNavigate()


    const baseUrl = 'https://ticketon-node-server.herokuapp.com/allEvents?title'

    const getData = async () => {
        const res = await axios.get(baseUrl)
        var hintArray = []
        var countryArray = []
        var provinceArray = []
        res.data.map(a => hintArray.push(a.title))
        res.data.map(a => countryArray.push(a.country))
        res.data.map(a => provinceArray.push(a.province))
        setHintData(hintArray)
        setHintCountry(countryArray)
        setHintState(provinceArray)

    }
    console.log(hintData)
    console.log(hintCountry)
    console.log(hintState)


    useEffect(() => {
        getData()
    }, [])


    const handleSearch = () => {
        navigate('/searchResults', { state: { title: searchTitle.toLowerCase(), province: searchProvince.toLowerCase(), country: searchCountry.toLowerCase() } })
    }

    const handleHealth = () => {
        navigate('/healthAndWellness', { state: 'Health & Wellness' })
    }

    const handleMusic = () => {
        navigate('/musicConcertsFestivals', { state: 'Music Concerts & Festivals' })
    }

    const handleOutdoor = () => {
        navigate('/Picnics', { state: 'Outdoor & Picnic' })
    }

    const handleFood = () => {
        navigate('/foodAndBeverages', { state: 'Food & Beverages' })
    }

    const handleSeminars = () => {
        navigate('/seminars', { state: 'Seminars & Workshops' })
    }

    const handleReligion = () => {
        navigate('/religion', { state: 'Religion & Spiritual' })
    }



    return (

        <div className='w-full bg-[url("https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")] lg:px-[20px] md:px-[40px] lg:pb-[50px] pb-[100px] md:pb-[50px] bg-no-repeat bg-cover'>
            {/*<div className='relative '>
               <img src={bg} alt="bgimage" className='h-[700px] w-full' />
            </div>*/}
            <div className=' pt-[80px] mx-auto  w-[90%] border-l-2 border-yellow-500'><h1 className=' px-3 text-white text-sm  md:text-2xl'>Create your events & generate tickets for free.</h1><h1 className='text-white px-3 text-sm mdtext-lg'>Explore concerts and events near you</h1></div>
            <div className=' w-[95%] mt-[100px] mx-auto md:bg-white rounded-full'>

                <div className='grid md:grid-cols-3 md:h-[70px] md:gap-0 gap-4 p-3 outline-none w-full'>


                    <Hint options={hintData} allowTabFill allowEnterFill>
                        <input className='h-full box-border p-3 outline-none md:border-r-2 md:rounded-none 
                  rounded-t-full shadow-xl md:shadow-none  text-sm w-full'
                            value={searchTitle}
                            onChange={e => setSearchTitle(e.target.value)}
                            placeholder='Search event...'
                        />
                    </Hint>


                    <Hint options={hintCountry} allowTabFill allowEnterFill>
                        <input type="text" className=" h-full box-border p-3 outline-none md:border-r-2 md:rounded-none 
                  rounded-r-full shadow-xl md:shadow-none text-sm w-full" placeholder="Host country..."
                            value={searchCountry}
                            onChange={e => setSearchCountry(e.target.value)}


                        />
                    </Hint>


                    <div className='md:flex grid md:justify-between md:gap-0 gap-4 '>
                        <Hint options={hintState} allowTabFill allowEnterFill>
                            <input type="text" className="shadow-xl 
                  rounded-b-full h-full box-border p-3 outline-none md:shadow-none w-full text-sm" placeholder="Host province/state..."
                                value={searchProvince}
                                onChange={e => setSearchProvince(e.target.value)}
                            />


                        </Hint>
                        <button className='rounded-full px-5 py-3 bg-[#C25DC4]' onClick={handleSearch}>Search</button></div>
                </div>
            </div>

            <div className=' lg:mt-[300px]  md:mt-[200px]  mt-[40px]   h-[100px]'>
                <div className='grid md:grid-cols-6 grid-cols-3 gap-4  text-white w-full '>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleSeminars} >
                            <Icon icon="ph:projector-screen-light" className='text-5xl  text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px] text-center'>SEMINARS</h1>

                    </div>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleMusic}>
                            <Icon icon="la:guitar" className='text-5xl  text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px]   text-center'>CONCERTS</h1>

                    </div>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleFood}>
                            <Icon icon="dashicons:food" className='text-5xl   text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px]   text-center'>FOOD & BEVERAGES</h1>

                    </div>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleReligion} >
                            <Icon icon="bi:house-heart" className='text-5xl  px-2 text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px]  text-center'>RELIGION & SPIRITUAL</h1>

                    </div>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleOutdoor}>
                            <Icon icon="fontisto:cocktail" className='text-5xl  px-2 text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px]   text-center'>OUTDOOR</h1>

                    </div>
                    <div >

                        <div className='flex items-center justify-center cursor-pointer' onClick={handleHealth}>
                            <Icon icon="ic:outline-sports-gymnastics" className='text-5xl   text-white' /></div>
                        <h1 className='lg:text-[10px] md:text-[8px] text-[6px]  text-center'>HEALTH & WELLNESS</h1>

                    </div>
                </div>


            </div>
        </div>
    )
}
