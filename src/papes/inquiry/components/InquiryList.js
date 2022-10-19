import { InquiryListWrap } from './InquiryList.styled';
import { React, useState, useEffect } from 'react';

const InquiryList = ({ setModalOpen, userInfo }) => {
  const [appointList, setAppointList] = useState(
    JSON.parse(localStorage.getItem('appointList'))
  );
  const [myAppointList, setMyAppointList] = useState([]);

  useEffect(() => {
    let arr = [];
    appointList.map(item => {
      if (item.name == userInfo.name && item.ssn == userInfo.ssn) {
        arr.push(item);
      }
    });
    setMyAppointList(arr);
  }, [appointList]);
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
          {myAppointList.map(item => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.phoneNum}</td>
                <td>{item.appointmentDate}</td>
                <td>{item.appointmentTime}</td>
                <td>{item.treatmentSubject}</td>
              </tr>
            );
          })}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
      <button className="listClose" onClick={() => setModalOpen(false)}>
        확인
      </button>
    </InquiryListWrap>
  );
};

export default InquiryList;
