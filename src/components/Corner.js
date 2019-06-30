import React from "react"
import { Link } from "gatsby"
import "./style.css"

export default () => (
  <Link to="/page-2" className="github-corner">
    <svg
      width="70"
      height="80"
      viewBox="0 0 140 140"
      style={{
        position: "absolute",
        top: "12",
        border: "0",
        left: "10",
      }}
    >
      {/* <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /> */}
      {/* <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor"
        style={{ transformOrigin: "130px 106px" }}
        className="octo-arm"
      />
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor"
        className="octo-body"
      /> */}

      <path
        d="M18.25,106.7c5.6,5.399,12.3,9.8,20.1,12.8c7.8,3,16.5,4.6,25.9,4.6c10.5,0,20.2-1.6,28.9-4.899
		c7.9-2.9,1.1-17.601-4.7-15.2c-6.399,2.7-14.2,4.1-23.101,4.1c-7,0-13.399-1.1-19-3.199c-5.6-2.101-10.5-5.101-14.5-9
		c-4-3.9-7.2-8.7-9.4-14.2c-2.3-5.601-3.4-12-3.4-19c0-6.6,1.1-12.9,3.3-18.5c2.2-5.6,5.2-10.6,9.2-14.6c3.9-4.1,8.7-7.4,14.2-9.7
		c5.5-2.3,11.7-3.5,18.5-3.5c6.301,0,12.1,0.9,17.301,2.5c5.1,1.6,9.5,4.1,13.199,7.4c3.7,3.3,6.6,7.3,8.7,12.1
		c2.101,4.8,3.101,10.4,3.101,16.8c0,3.7-0.4,7.2-1.201,10.5c-0.799,3.1-1.799,5.899-3.199,8.1c-1.301,2.101-2.801,3.8-4.6,5
		c-2.101,1.4-5.201,2.2-7.601,1.4c-3-1-2.399-5.2-2.2-7.7c0.301-3.4,1.2-6.6,1.9-9.9c1.1-5.4,2.3-10.7,3.4-16
		c0.6-2.9,1.299-5.9,1.899-8.8c0.8-3.7-2-7.3-5.899-7.3h-4.4c-2.7,0-5.1,1.8-5.801,4.4c-0.299,1.2-0.6,2.2-0.6,2.2
		c-2.199-6.8-10.3-8.7-16.7-8.6c-8.4,0.1-16.1,4.4-21.7,10.5c-0.5,0.6-1.1,1.2-1.6,1.8c-2.9,3.5-5.1,7.6-6.6,11.9
		c-1.6,4.6-2.4,9.3-2.4,14.1c0,4.101,0.6,8,1.7,11.5c1.2,3.601,2.9,6.7,5.1,9.3c2.2,2.601,5,4.7,8.3,6.2c3.3,1.5,7,2.3,11,2.3
		c3,0,5.8-0.5,8.3-1.399c2.4-0.9,4.6-2,6.5-3.3c1.5-1,2.9-2.2,4-3.301c0.699,1.301,1.5,2.4,2.6,3.5c2.801,3,7.1,4.5,12.801,4.5
		c4.5,0,8.899-0.899,13-2.699c4.1-1.801,7.799-4.601,10.899-8.2c3-3.601,5.5-8,7.3-13.2c1.801-5.2,2.7-11.2,2.7-17.8
		c0-9-1.7-17-5-23.7s-7.8-12.4-13.399-16.9c-5.5-4.5-11.9-7.8-19-10.1C79.05,1.1,71.75,0,64.25,0c-8.7,0-17,1.6-24.7,4.7
		c-7.7,3.2-14.5,7.6-20.2,13.1c-5.8,5.5-10.4,12.2-13.7,19.7c-3.3,7.5-5,15.9-5,24.7c0,8.899,1.5,17.3,4.6,24.8
		C8.25,94.6,12.65,101.2,18.25,106.7z M72.349,64.7c-0.699,2.7-1.699,5.3-3.1,7.7c-1.4,2.3-3.1,4.199-5.3,5.699
		c-2,1.4-4.4,2.101-7.4,2.101c-1.9,0-3.4-0.4-4.5-1.101c-1.2-0.8-2.2-1.8-2.9-3.1c-0.8-1.4-1.3-2.9-1.6-4.4
		c-0.3-1.6-0.5-3.1-0.5-4.399c0-2.8,0.4-5.6,1.2-8.5c0.8-2.8,1.9-5.4,3.4-7.6c1.5-2.2,3.2-4,5.3-5.4c1.9-1.3,4-1.9,6.5-1.9
		c2,0,3.601,0.3,4.8,1c1.2,0.7,2.2,1.6,2.9,2.7c0.8,1.2,1.3,2.6,1.699,4.1c0.4,1.7,0.601,3.5,0.601,5.2
		C73.349,59.3,73.05,61.9,72.349,64.7z"
        style={{ transformOrigin: "center" }}
        className="octo-arm"
        fill="currentColor"
      />
    </svg>
  </Link>
)
