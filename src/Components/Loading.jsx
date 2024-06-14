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
                    height="80"
                    width="80"
                    color="#06163a !important"
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
