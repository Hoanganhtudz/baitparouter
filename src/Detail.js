import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";

function Detail() {
    let { dcm } = useParams();
    useEffect(() => {
        console.log(dcm)
    }, [dcm]);
    return (
        <>
            {Data.map((items, index) => {
                return (
                     Number(dcm) === items.id ?
                        <div className="container">
                            <h1 className="my-4">
                                ID:{items.id}
                            </h1>
                            <div className="row">
                                <div className="col-md-8">
                                    <img className="img-fluid" src={items.avatar} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <h3 className="my-3">{items.title}</h3>
                                    <p>{items.content}</p>
                                </div>
                            </div>
                            <h3 className="my-4">chú bé thiện yêu cả thế giới</h3>
                        </div>
                :
                <div></div>    
            )})}


        </>
    );
}

export default Detail;