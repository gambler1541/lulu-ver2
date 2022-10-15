import { InquiryWrap } from './inquiry.style';
import React, { useState } from 'react';
import Modal from 'react-modal';
import InquiryList from '../inquiry/components/InquiryList';

const Inquiry = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const inquiryBtn = () => {
    setModalOpen(true);
  };

  const stopEvent = e => {
    e.preventDefault();
  };

  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffff',
      zIndex: 10,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: '#ffffe7',
      overflow: 'auto',
      top: '15vh',
      left: '20vw',
      right: '20vw',
      bottom: '20vh',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '14px',
      outline: 'none',
      zIndex: 10,
    },
  };

  return (
    <InquiryWrap>
      <div className="inquiryContainer">
        <div className="inquiryHeader">
          <div className="title">
            <span className="titleFont">예약 내역 조회</span>
          </div>
          <div className="notice">
            <span>진료 예약이 된 이름과 주민번호를 입력해주세요</span>
          </div>
        </div>
        <div className="inquiryContents">
          <form onSubmit={stopEvent} action="/send">
            <div>
              <label>예약자명</label>
              <input placeholder="실명을 입력해주세요"></input>
            </div>
            <div>
              <label>주민번호</label>
              <input placeholder="- 를 빼고 입력해주세요"></input>
            </div>
            <button onClick={inquiryBtn}>조회하기</button>
          </form>
          <Modal isOpen={modalOpen} style={modalStyle}>
            <InquiryList setModalOpen={setModalOpen} />
          </Modal>
        </div>
      </div>
    </InquiryWrap>
  );
};

Modal.setAppElement('#root');
export default Inquiry;
