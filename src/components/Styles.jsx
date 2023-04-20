import styled from "styled-components";

export const Wave1 = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;

 .svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 286px;
    transform: rotateY(180deg);
}
.shape-fill {
    fill:  var(--color-white);
}
`
export const Wave2 = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;
transform: rotate(180deg);

 .svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}
.shape-fill {
    fill:  var(--color-white);
}
`
export const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 12;
`

export const LoaderCss = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`

export const Thead = styled.div`
    .tr{
        th{
        background: var(--color-purple) !important;
        }
    }
`