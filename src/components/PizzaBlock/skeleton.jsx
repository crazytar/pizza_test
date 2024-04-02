import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={420}
            viewBox="0 0 280 420"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="-1" y="248" rx="14" ry="14" width="276" height="35" />
            <circle cx="135" cy="124" r="111" />
            <rect x="-1" y="293" rx="12" ry="12" width="276" height="82" />
            <rect x="4" y="385" rx="12" ry="12" width="105" height="31" />
            <rect x="147" y="385" rx="12" ry="12" width="124" height="31" />
        </ContentLoader>
    )
}

export default Skeleton

