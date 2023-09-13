import {  useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import DetailsBanner from './DetailBanner/DetailsBanner';
import './Details.scss'
import Cast from './Cast/Cast';
import VideoSection from './VideoSections/VideoSection';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner  video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
    </div>
  )
}

export default Details;