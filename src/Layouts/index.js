import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ApiUrl } from "../Api/ApiUrl";

const MainLayout = () => {
    const [loading, setLoading] = useState(true);
    const [homedata, setHomedata] = useState(null);

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

    if (loading) {
        return (
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
                    width="50"
                    height="50"
                    color="#012c6d !important"
                    ariaLabel="three-dots-loading"
                />
            </div>
        );
    }

    return (
        <>
            <Header menudata={homedata?.headermenudata} />
            <div style={{ minHeight: "66.5vh", padding: "10px"}}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;