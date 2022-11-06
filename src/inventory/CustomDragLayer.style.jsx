import styled, { css } from "styled-components";

const StyledCustomDragLayer = styled.div`
  ${props => {
    const { isDragging } = props;
    return css`
      position: fixed;
      pointer-events: none;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `;
  }}
`;

StyledCustomDragLayer.displayName = "StyledCustomDragLayer";

export default StyledCustomDragLayer;
