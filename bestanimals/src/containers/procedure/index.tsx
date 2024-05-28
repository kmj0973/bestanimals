import * as S from "./index.styels";

const Procedure = () => {
  return (
    <main>
      <S.ProcedureContainer>
        <S.Header>입양 절차</S.Header>
        <S.ContentsContainer>
          <S.ContentBox>
            <S.Circle>
              <S.ContentTitle>입양 전 확인</S.ContentTitle>
              <S.Content>
                서울동물복지지원센터 홈페이지에서 <br />
                '입양대기동물'를 확인합니다.
                <br />
                <div>
                  *입양대기동물의 다양한 사진과 영상은 <br />
                  서울동물복지지원센터 유튜브에서도 보실 수 있어요. <br />
                </div>
                <a href="https://www.youtube.com/channel/UCiVAmmAhogyGENI2Kjac_Rg">
                  (서울동물복지지원센터 유튜브 바로가기)
                </a>
              </S.Content>
              <S.Line />
            </S.Circle>
            <S.NoticeBox>
              <div>
                ※ 개와 고양이의 수명은 약 15년 정도입니다. <br />
                살아가면서 질병도 걸릴 수 있고요.
                <br /> 생활패턴이나 환경이 바뀌더라도 오랜 기간 동안 <br />
                책임지고 잘 돌보아 줄 수 있나요?
              </div>
            </S.NoticeBox>
            <S.DotsBox>
              <S.RightLargeDot></S.RightLargeDot>
              <S.RightSmallDot
                style={{ backgroundColor: "#C5A999" }}
              ></S.RightSmallDot>
            </S.DotsBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.NoticeBox>
              <div>
                ※ 매일 산책을 시켜주거나 함께 있어줄 수 있는 <br />
                시간이 충분한가요?
                <br />
                개는 물론이고 고양이도 혼자 있으면 외로워하는 <br />
                사회적 동물입니다.
              </div>
            </S.NoticeBox>
            <S.Circle style={{ backgroundColor: "#C5A999" }}>
              <S.ContentTitle>입양 전 교육</S.ContentTitle>
              <S.Content>
                입양을 희망하시는 분은 서울시 평생학습포털의 "반려동물
                입양교육과 반려동물 돌봄 교육"을
                <br /> 이수해 주세요. <br />
                <a href="https://sll.seoul.go.kr/lms/requestCourse/doDetailInfo.do?course_id=ASP00001S995220220000001&class_no=01&course_gubun=1&asp_id=ASP00001&course_category_id=202102012389901&category_status=&page=1&mnid=202102146855">
                  (교육 신청 안내 바로가기)
                </a>
              </S.Content>
              <S.Line />
            </S.Circle>
            <S.DotsBox>
              <S.LeftLargeDot
                style={{ backgroundColor: "#C5A999" }}
              ></S.LeftLargeDot>
              <S.LeftSmallDot
                style={{ backgroundColor: "#BBA395" }}
              ></S.LeftSmallDot>
            </S.DotsBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Circle style={{ backgroundColor: "#BBA395" }}>
              <S.ContentTitle>입양상담예약</S.ContentTitle>
              <S.Content>
                방문 전 유선으로 일정예약을 해주시고 <br /> 센터로 방문해주세요.{" "}
                <br />
                <div>
                  * 유선예약필수 <br />- 마포센터 02-2124-2839 <br />- 구로센터
                  02-2636-7649 <br />- 동대문센터 02-921-2415
                </div>
              </S.Content>
              <S.Line />
            </S.Circle>
            <S.NoticeBox>
              <div>
                ※ 입양대기 동물들은 동물등록과 중성화수술이 되어 <br />
                있는 것을 아시나요?
                <br /> 서울동물복지지원센터의 유기동물들은 중성화 수술 및
                동물등록 완료 후 입양됩니다.
              </div>
            </S.NoticeBox>
            <S.DotsBox>
              <S.RightLargeDot
                style={{ backgroundColor: "#BBA395" }}
              ></S.RightLargeDot>
              <S.RightSmallDot
                style={{ backgroundColor: "#B19E92" }}
              ></S.RightSmallDot>
            </S.DotsBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.NoticeBox>
              <div>
                ※ 신중한 선택과 고민을 하셔야 됩니다.
                <br />
                많은 심사와 절차에 걸쳐 선택되신 보호자분들은 <br />
                크나큰 책임감과 의무감을 가지고 반려동물들과 <br />
                행복하게 살아가셔야 됩니다.
              </div>
            </S.NoticeBox>
            <S.Circle style={{ backgroundColor: "#B19E92" }}>
              <S.ContentTitle>입양 진행</S.ContentTitle>
              <S.Content>
                입양은 1~2회 이상 입양상담 및 <br /> 개체만남을 통해 진행됩니다.{" "}
                <br />
                (입양 후 파양은 불가합니다. 만남을 통해 <br />
                신중하게 결정해 주세요)
              </S.Content>
              <S.Line />
            </S.Circle>
            <S.DotsBox>
              <S.LeftLargeDot
                style={{ backgroundColor: "#B19E92" }}
              ></S.LeftLargeDot>
              <S.LeftSmallDot
                style={{ backgroundColor: "#A7988E" }}
              ></S.LeftSmallDot>
            </S.DotsBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Circle style={{ backgroundColor: "#A7988E" }}>
              <S.ContentTitle>입양 후기 공유</S.ContentTitle>
              <S.Content>
                보호자님과 입양된 반려견, 반려묘의 행복한 <br />
                일상을 네이버카페에 주기적으로 올려주세요.
                <br />
                <div>
                  입양 대기 중인 아이들의 입양과 <br /> 인식 개선에 많은 도움이
                  됩니다.
                </div>
                <a href="https://cafe.naver.com/seoulanimalcare">
                  (서울동물복지지원센터 네이버 카페 바로가기)
                </a>
              </S.Content>
              <S.Line />
            </S.Circle>
            <S.NoticeBox>
              <div>
                ※ 입양 이후 모니터링 관련 정보 제공에 협조를 해 주실 수 있나요?
                <br />
                센터에서는 입양 인식개선을 위해서 보호자분의 적극적인 입양후기
                공유를 요청 드리며, 입양동물 정보제공에도 적극적으로 응해 주시기
                바랍니다.
              </div>
            </S.NoticeBox>
          </S.ContentBox>
        </S.ContentsContainer>
      </S.ProcedureContainer>
    </main>
  );
};

export default Procedure;
