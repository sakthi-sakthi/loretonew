import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
        <>
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
                    height="60"
                    width="60"
                    color="#286b82"
                    radius="9"
                    ariaLabel="loading..."
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </>
    )
}

export default Loading
