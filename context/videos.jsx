import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getVideos } from "../api";

const VideoContext = createContext(null);

function VideosContextProvider({ children }) {
  const { data, isLoading, refetch } = useQuery(['videos'], getVideos);

  return (
    <VideoContext.Provider
      value={{
        videos: data,
        refetch,
      }}
    >
      {isLoading ? <div>Loading...</div> : children}
    </VideoContext.Provider>
  );
}

const useVideo = () => useContext(VideoContext);

export { VideosContextProvider, useVideo };

