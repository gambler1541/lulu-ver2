import { InquiryListWrap } from './InquiryList.styled';

const InquiryList = ({ setModalOpen }) => {
  return (
    <InquiryListWrap>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>예약날짜</th>
            <th>예약시간</th>
            <th>진료과목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김땡</td>
            <td>010-9999-9999</td>
            <td>2022/10/10</td>
            <td>13시</td>
            <td>내과</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>김땡</td>
            <td>010-9999-9999</td>
            <td>2022/10/10</td>
            <td>13시</td>
            <td>내과</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>김땡</td>
            <td>010-9999-9999</td>
            <td>2022/10/10</td>
            <td>13시</td>
            <td>내과</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>김땡</td>
            <td>010-9999-9999</td>
            <td>2022/10/10</td>
            <td>13시</td>
            <td>내과</td>
          </tr>
        </tbody>
      </table>
      <button className="listClose" onClick={() => setModalOpen(false)}>
        확인
      </button>
    </InquiryListWrap>
  );
};

export default InquiryList;
