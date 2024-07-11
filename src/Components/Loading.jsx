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
                    color="#012c6d"
                    radius="9"
                    ariaLabel="Loreto Loading..."
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </>
    )
}

export default Loading
