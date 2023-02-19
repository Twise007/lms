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
