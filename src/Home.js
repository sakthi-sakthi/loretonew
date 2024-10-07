import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Slider from './Components/Slider';
import FlashNews from './Components/FlashNews';
import About from './Components/About';
import Services from './Components/Services';
import Counts from './Components/Counts';
import UpcomingEvents from './Components/UpcomingEvents';
import Newsletter from './Components/Newsletter';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import { ThreeDots } from 'react-loader-spinner';
import { ApiUrl } from './Api/ApiUrl';

const Home = () => {
    const [Homedata, setHomedata] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
                localStorage.setItem("HomeData", JSON.stringify(response?.data?.data));
                setHomedata(response?.data?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading && !Homedata && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <ThreeDots
                        visible={true}
                        width={40}
                        height={40}
                        color="#012c6d !important"
                        ariaLabel="ThreeDots-loading"
                    />
                </div>
            )}
            {!loading && (
                <>
                    <Header menudata={Homedata?.headermenudata} />
                    <Slider sliderdata={Homedata?.SlidesData} />
                    <FlashNews />
                    <About />
                    <UpcomingEvents />
                    <Counts />
                    <Services />
                    <Newsletter />
                    <Gallery />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
