import { RegistrationWrap } from './Registration.styled';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const GoToInquiry = () => {
    navigate('/inquiry');
  };

  return (
    <RegistrationWrap>
      <div className="registrationContainer">
        <div className="registrationHeader">
          <div className="title">
            <span className="titleFont">예약 등록하기</span>
          </div>
          <div className="notice">
            <span>1. 상담시간: 평일 08:30 - 17:30 (일요일 및 공휴일 제외)</span>
            <br />
            <span>
              2. 1577-0106 번호로 상담 전화가 수신되며 연결 2회 이상 실패 시
              예약 의뢰가 자동 취소됩니다.
            </span>
            <br />
            <span>
              3. 예약변경 또는 취소를 원하실 경우 진료 3시간 전까지 가능 합니다.
            </span>
            <br />
            <span>
              4. 예약취소 없이 진료에 오지 않은 횟수가 2회를 경과하면 1년간
              인터넷예약 사용이 제한됩니다. (전화예약만 가능)
            </span>
          </div>
        </div>
        <div className="registrationContents">
          <form>
            <div>
              <label>이름</label>
              <input placeholder="실명을 입력해주세요"></input>
            </div>
            <div>
              <label>주민번호</label>
              <input placeholder="- 를 빼고 입력해주세요"></input>
            </div>
            <div>
              <label>전화번호</label>
              <input placeholder="- 를 빼고 입력해주세요"></input>
            </div>
            <div>
              <label>예약날짜</label>
              <input></input>
            </div>
            <div>
              <label name="time">예약시간</label>
              <select name="time" form="form">
                <option>시간넣으쇼</option>
              </select>
            </div>
            <div>
              <label>진료과목</label>
              <input></input>
            </div>
            <button onClick={GoToInquiry}>예약 등록</button>
          </form>
        </div>
      </div>
    </RegistrationWrap>
  );
};

export default Registration;
