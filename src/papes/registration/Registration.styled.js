import styled from 'styled-components';

export const RegistrationWrap = styled.div`
  .registrationContainer {
    .registrationHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 0.938rem;
      margin-bottom: 3rem;
      text-align: center;
      border-bottom: 0.063rem solid black;

      .title {
        margin-bottom: 0.938rem;

        .titleFont {
          font-size: 1.7rem;
          font-weight: 600;
        }
      }
    }

    .registrationContents {
      max-width: 30rem;
      margin: 0 auto;
      border: 0.063rem solid black;
      border-radius: 0.313rem;
      background-color: #fafafa;

      form {
        margin: 30px 40px;
        text-align: center;

        div {
          margin-bottom: 13px;
          display: flex;
          justify-content: space-around;

          label {
            width: 30%;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
          }

          input {
            width: 70%;
            font-size: 18px;
          }

          input:focus {
            outline: 3px solid #f5f5f5;
          }

          input::placeholder {
            color: #a3a3a3;
            padding-left: 7px;
          }

          .appointDate {
            color: #a3a3a3;
          }
        }

        .timeSelecter {
          display: flex;
          justify-content: flex-start;
        }
      }

      .registrationBtn {
        width: 100px;
        height: 40px;
        margin-top: 15px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 10px;
        background-color: #e1e9f2;
        cursor: pointer;
      }
    }

    .notice {
      max-width: 68.75rem;
      margin: 0 auto;
      padding-top: 3rem;

      span {
        font-size: 16px;
        font-weight: 400;
        color: #616161;
      }
    }
  }
`;
