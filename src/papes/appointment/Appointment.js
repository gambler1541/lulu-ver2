import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentWrap } from './Appointment.styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appointment = () => {
  const navigate = useNavigate();

  const GoToRegistration = () => {
    navigate('/registration');
  };

  return (
    <AppointmentWrap>
      <div className="appointContainer">
        <div className="appointHeader">
          <div className="title">
            <span className="titleFont">온라인 예약</span>
          </div>
        </div>
        <div className="appointContents">
          <div className="calendarBox">
            <Calendar />
          </div>
          <div className="appointBody">
            <div className="appointBtn" onClick={GoToRegistration}>
              <span className="appointBtnTitle">진료예약</span>
              <img src="/images/document.png" />
              <span className="appointBtnText">
                원하시는 날짜를 선택 후
                <br />
                예약 해주세요.
              </span>
            </div>
            <div className="appointBtn">
              <span className="appointBtnTitle">상담예약</span>
              <img src="/images/telephone.png" />
              <span className="appointBtnText">
                전문상담원이
                <br />
                의료진 추천을 도와드립니다.
              </span>
            </div>
            <p className="notice">
              예약은 약속 입니다.
              <br />
              병원도 고객도 약속시간을 지키려는 노력이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </AppointmentWrap>
  );
};

export default Appointment;
