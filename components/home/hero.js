import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 개발자 김태민 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          <br/>
          <b>경험을 바탕으로 끊임없이 성장하고 있는 3년차 백엔드 서버개발자입니다.</b><br /><br />
          Java/Spring, Docker 등을 이용해 on-premise 서버를 구축하여 API 개발 및배포한 경험이 있습니다. <br /> 
          호기심과 도전 정신을 바탕으로 새로운 기술과 문제 해결에 대한 열정을 가지고 있습니다. <br />
          개발 과정에서 발생하는 어려움을 극복하며 성장하는 기쁨을 느낍니다.<br />
          성능 최적화와 문제 해결 능력을 키우며, 효율적이고 유지보수 가능한 코드를 작성하는 것을 목표로 합니다. <br />
          반복, 수동 작업을 자동화 하는것을 좋아합니 다. (Shell script 작성) 항상 일정과 업무를 기록하는 습관을 가지고있고, <br />
          기술블로그를 통해 비슷한 어려움을 겪는 사람들에게 공유하기위해 시작했습니다. <br />
          개발 스터디를 운영하고 본인의 학습내용을 주1회 업로드하며 꾸준한 학습과 개선을 통해 <br />
          더 가치있는 개발자로 발전하기 위해 노력하고 있습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            경력기술서 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
