import React, {useState} from 'react';
import "./Corousel.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


function Carousel({children}) {


    const PAGE_WIDTH = 1270

    const [offset, setOffset] = useState(0)

    const handleClickArrowLeft = () => {
        setOffset((currentOffset) => {
            if (currentOffset >= 0) {
                return -PAGE_WIDTH * 10
            }
            return currentOffset + PAGE_WIDTH
        })
    }
    const handleClickArrowRight = () => {

        setOffset((currentOffset) => {
            if (currentOffset === (-PAGE_WIDTH * 10)) {
                return 0
            }
            return currentOffset - PAGE_WIDTH
        })
    }

    return (
        <div className={"main-container"}>
            <FaChevronLeft className={'arrow arrow-left'} onClick={handleClickArrowLeft}/>
            <div className={"window"}>
                <div className={"all-pages-container"}
                     style={{
                         transform: `translateX(${offset}px)`
                     }}>
                    {
                        children
                    }
                </div>
            </div>
            <FaChevronRight className={'arrow arrow-right'} onClick={handleClickArrowRight}/>
        </div>
    );
}

export default Carousel;