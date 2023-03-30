import styled from "styled-components";

export const CardPage = styled.div`
  padding: 20px 32px;
  overflow-x: scroll;

  .card {
    display: flex;
    justify-content: space-between;
  }

  .card-item {
    border-bottom: 1px solid #c9d2ce;
    border-radius: 3px 3px 0px 0px;
    background: #f2faf6;
    width: 274px;
    height: 30px;
    padding: 11px 9px;
    cursor: pointer;
    color: #414644;
  }

    .card-box {
      background: #ffffff;
      box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.05),
        inset 0px -2px 0px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      width: 258px;
      height: 132px;
      padding: 12px;
      margin: 10px 0;

      h4 {
        margin-top: 0;
        font-weight: 600;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 16px;
        color: #181a19;
      }
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #6d7471;
      }
    }

    .card-items {
      display: flex;
      align-items: center;

      div {
        background: #fafffc;
        border: 1px solid #ebf3ef;
        border-radius: 4px;
        width: 35px;
        height: 24px;
        display: flex;
        align-items: center;
        padding: 3px 6px;
        margin: 0 5px;
      }

      button {
        background: #f6f2ff;
        border-radius: 4px;
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
        color: #856ec6;
        width: 95px;
        height: 30px;
        border: none;
      }
    }
    .card-bottom {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        margin-top: 10px;
      }

      h6 {
        margin-top: 0;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #414644;
      }
      p {
        margin-bottom: 0;
        color: #969f9b;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
      }
    }
  
`;
