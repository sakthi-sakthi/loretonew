import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../css/AllLatestNews.css";
import { ReligioUrl } from "../../Api/ApiUrl";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const NewsDetails = styled.div`
  padding: 20px;
`;

const NewsCategory = styled.p`
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
`;

const NewsContent = styled.div`
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: justify;
  text-justify: inter-word;
  font-size: 14px;
  letter-spacing: 0.5px;
  word-spacing: 0.5px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &:hover {
    overflow-y: overlay;
    &::-webkit-scrollbar {
      display: block;
    }
  }
  &::-webkit-scrollbar {
    width: 5px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const NoData = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const AllLatestNews = () => {
    const search = useLocation().search;
    const encryptedId = new URLSearchParams(search).get("newsid");
    const newsid = parseInt(atob(decodeURIComponent(encryptedId)));

    const [selectedNews, setSelectedNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${ReligioUrl}/news/province/1`);
                const newsData = response.data.data || [];
                const selected = newsData.find(
                    (item) => item.id === newsid
                );
                setSelectedNews(selected || null);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news data:", error);
                setLoading(false);
            }
        };
        fetchNewsData();
    }, [newsid]);

    return (
        <Container className="latest-news-container mt-3">
            {loading ? (
                <Loading>
                    <FontAwesomeIcon icon={faSpinner} spin size="1x" /> Loading...
                </Loading>
            ) : selectedNews ? (
                <div className="container">
                    <h4 className="text-center">{selectedNews.name}</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <NewsDetails>
                                <img
                                    src={selectedNews?.upload_image[0] || 'assets/images/home/noimage.jpg'}
                                    alt={selectedNews.name}
                                    className="news-image"
                                />
                                <br />
                                <NewsCategory>
                                    <i className="fa fa-calendar"></i> {selectedNews.date}
                                </NewsCategory>
                                <NewsContent
                                    dangerouslySetInnerHTML={{ __html: selectedNews.description }}
                                ></NewsContent>
                                <Link
                                    to={"/"}
                                    className="btn btn-primary btn-sm mt-3 mb-3 text-white"
                                    style={{ float: "right" }}
                                >
                                    <i className="fa fa-home"></i> Go Back
                                </Link>
                            </NewsDetails>
                        </div>
                    </div>
                </div>
            ) : (
                <NoData>No Lastest News found</NoData>
            )}
        </Container>
    );
};

export default AllLatestNews;