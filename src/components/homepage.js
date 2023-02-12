import Post from "./post";
import MyCarousel from "./carousel";
import MinhDucInfo from "./minhducinfo";
import useFetch from "./useFetch";
import { motion } from "framer-motion"
import Animation from "./animation";

import { useEffect } from "react";
import apiURI from "./api"

export default function Homepage(props) {
  const url = apiURI.post;
  const { data, loading, error } = useFetch(url);

  return (
   
    <Animation children={<div className="homepage">
        <MyCarousel url={apiURI.post +"/latest"} />

        <MinhDucInfo />
        <Post
          loading={loading}
          data={data}
          tag={props.tag}
          postIdRef={props.postIdRef}
        />
      </div>} animationName="appearFromTransparent"/>
    
  );
}
