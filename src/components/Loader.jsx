import React from 'react'
import ReactDOM  from 'react-dom'
import loaderImg from "../assets/loaderImg.gif"
import { LoaderCss, Wrapper } from './Styles'

const Loader = () => {
    return ReactDOM.createPortal(
        <Wrapper>
            <LoaderCss>
                <img className="mask mask-circle" src={loaderImg} alt="Loading..."/>
            </LoaderCss>
        </Wrapper>,
        document.getElementById("loader")
      )
    }

    export const SpinnerImg = () => {
        return (
            <div className="--center-all">
                 <img src={loaderImg} alt="Loading..."/>
            </div>
        )
    }

export default Loader