

import { useFetcher, useParams } from "react-router-dom";
import "./DetailsBanner.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
import Img from '../../../components/LazyLoadImage/Img'

const DetailsBanner = ({ video, crew }) => {

    const { mediaType, id } = useParams();
    const { data, loading } = useFetcher(`/${mediaType}/${id}`);
    const { url } = useSelector((state) => state.home);
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {
                        !!data && (
                            <>
                                <div className="backdrop-img">
                                    <Img src={url.backdrop + data.backdrop_path} />
                                </div>
                            </>
                        )
                    }
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;