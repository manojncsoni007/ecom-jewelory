import React from 'react'
import { useState, useEffect } from 'react'
import {Navbar,Banner,Footer} from '../../components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Home.css';


const Home = () => {
    
    const [category, setCategory] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const 
                {data:{categories}}  = await axios.get('/api/categories')
                setCategory(categories)
            } catch (e) {
                console.log(e)
            }
        })();
    }, [])

    return (
        <div>
            <Navbar />
            <Banner />
            <main>
                <h3 className='center'>Category</h3>
                <div className="homepage-category">
                    {
                        category && category.map(({categoryName, img}) => (
                            <Link to="">
                                <div className="category-item">
                                    <img src={img} alt="ring" />
                                    <div className="flex-center">
                                        <p className="overlay-text flex-center">{categoryName}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default Home
