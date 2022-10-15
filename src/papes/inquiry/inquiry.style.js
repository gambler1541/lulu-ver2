import styled from 'styled-components';

export const InquiryWrap = styled.div`
  .inquiryContainer {
    .inquiryHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 0.938rem;
      margin-bottom: 3rem;
      text-align: center;

      .title {
        margin-bottom: 0.938rem;
        border-bottom: 0.063rem solid black;

        .titleFont {
          font-size: 1.563rem;
        }
      }
    }

    .inquiryContents {
      max-width: 30rem;
      margin: 0 auto;
      border: 0.063rem solid black;
      border-radius: 0.313rem;

      form {
        margin: 30px 40px;
        text-align: center;

        label {
          margin-right: 30px;
        }

        input {
          margin-top: 10px;
        }
      }
    }
  }
`;
