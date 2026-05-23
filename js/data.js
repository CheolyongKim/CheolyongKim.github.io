// ============================================================
// SITE_DATA — 모든 텍스트 콘텐츠의 중앙 저장소
//
// 콘텐츠를 수정할 때는 이 파일만 편집하면 됩니다.
// [TODO] 표시가 있는 곳은 직접 내용을 채워 넣어야 하는 영역입니다.
// ============================================================

const SITE_DATA = {

  meta: {
    logoText: "KIM CHEOLYONG",
    navLinks: [
      { label: "Tech",      targetId: "tech-stack" },
      { label: "Projects",  targetId: "projects" },
      { label: "Timeline",  targetId: "timeline" }
    ]
  },

  hero: {
    tag: "Portfolio",
    title: "공통적인 본질을 통찰하기 위해 노력하며,\n개발자를 목표로 하는 김철용입니다.",
    description: "취미인 게임개발을 실제 프로젝트로까지 완성시킨 경험이 있고, 동시에 CS와 인공지능 기술을 배우는 등 항상 배움과 성장의 과정에 있어 투트랙 이상의 유연한 사고를 갖추고 있습니다.",
    philosophy: "구체적인 기술을 넘어 공통적인 본질을 통찰하기 위해 노력합니다.",
    contacts: [
      { type: "tel",    icon: "fa-solid fa-phone",     label: "010-3533-2198",              href: "tel:010-3533-2198" },
      { type: "email",  icon: "fa-solid fa-envelope",   label: "cheolyongkim.kr@gmail.com", href: "mailto:cheolyongkim.kr@gmail.com" },
      { type: "github", icon: "fa-brands fa-github",    label: "GitHub",                    href: "https://github.com/CheolyongKim" }
    ],
    ctaText: "자세한 소개 보기"
  },

  techStack: {
    sectionTitle: "Core Tech Stack",
    items: [
      {
        name: "Java",
        desc: "현 교육과정에서 주요 언어로 사용하며, 안정적인 백엔드 아키텍처 및 객체지향 설계를 다집니다."
      },
      {
        name: "Python",
        desc: "컴퓨터 그래픽스, 인공지능 프레임워크 활용 및 데이터 사이언스 분석 모델 구축에 활용하고 있습니다."
      },
      {
        name: "C",
        desc: "컴퓨터 구조, 운영체제 등 시스템 저수준을 다루는 거의 모든 학부 과목의 기반이 되었습니다."
      },
      {
        name: "C++",
        desc: "정교한 자료구조 활용과 효율적인 알고리즘 풀이 및 코딩테스트 대응에 주력으로 사용 중입니다."
      }
    ]
  },

  projects: {
    sectionTitle: "Project Highlight",
    items: [
      {
        id: "comgraphics",
        title: "컴그 과제",
        desc: "/* TODO: 프로젝트 설명을 입력하세요 */",
        tag: "Graphics",
        icon: "fa-solid fa-cube",
        image: "assets/images/comgraphics.png"
      },
      {
        id: "linetracer",
        title: "마프 linetracer",
        desc: "/* TODO: 프로젝트 설명을 입력하세요 */",
        tag: "Embedded",
        icon: "fa-solid fa-microchip",
        image: "assets/images/linetracer.png"
      },
      {
        id: "interop",
        title: "컴네 interoperability test",
        desc: "/* TODO: 프로젝트 설명을 입력하세요 */",
        tag: "Network",
        icon: "fa-solid fa-network-wired",
        image: "assets/images/interop.png"
      },
      {
        id: "capstone",
        title: "졸업프로젝트",
        desc: "/* TODO: 프로젝트 설명을 입력하세요 */",
        tag: "Capstone",
        icon: "fa-solid fa-graduation-cap",
        image: "assets/images/capstone.png"
      },
      {
        id: "dutyflow",
        title: "HD_DutyFlow",
        desc: "/* TODO: 프로젝트 설명을 입력하세요 */",
        tag: "Enterprise",
        icon: "fa-solid fa-diagram-project",
        image: "assets/images/dutyflow.png"
      }
    ]
  },

  timeline: {
    sectionTitle: "Timeline",
    items: [
      {
        id: "uni",
        date: "'20 — '26",
        title: "학사 — 한양대학교 컴퓨터소프트웨어학부",
        summary: "컴퓨터 과학의 전반적인 핵심 이론(CS) 및 소프트웨어 공학 역량을 축적했습니다.",
        modal: {
          tag: "Education",
          heading: "한양대학교 주요 이수 과목",
          bodyHTML: `
            <p>컴퓨터소프트웨어학부 재학 기간 동안 소프트웨어 엔지니어로서 필요한 핵심 전공 역량을 깊이 있게 학습했습니다.</p>
            <ul>
              <li><strong>주요 전공:</strong> 자료구조, 알고리즘, 운영체제, 컴퓨터네트워크, 컴퓨터 그래픽스</li>
              <li><strong>연구 및 실습:</strong> 학부 프로젝트를 통한 문제 분석 및 이론의 실질적 코드화 프로세스 경험</li>
            </ul>
          `
        }
      },
      {
        id: "military",
        date: "'20 — '22",
        title: "대한민국 육군 군 복무",
        summary: "군 조직 생활을 통해 협업 역량 및 성실성, 책임감을 배양했습니다.",
        modal: {
          tag: "Military Experience",
          heading: "군 복무 상세 정보",
          bodyHTML: `
            <table class="modal-table">
              <thead>
                <tr><th>구분</th><th>상세 내용</th></tr>
              </thead>
              <tbody>
                <tr><th>군별 / 계급</th><td>대한민국 육군 / 병장 만기전역</td></tr>
                <tr><th>특기 / 병과</th><td>/* TODO: 병과 정보 입력 */</td></tr>
                <tr><th>복무 기간</th><td>2020년 ~ 2022년</td></tr>
              </tbody>
            </table>
          `
        }
      },
      {
        id: "kosa",
        date: "'26 — 현재",
        title: "KOSA 교육과정 이수 중",
        summary: "MSA 기반 풀스택 양성과정을 수강하며 실무 역량을 강화하고 있습니다.",
        modal: {
          tag: "Professional Training",
          heading: "KOSA MSA 기반 풀스택 양성과정",
          bodyHTML: `
            <p>한국소프트웨어산업협회(KOSA)에서 주관하는 최신 실무 교육과정에 참여하고 있습니다.</p>
            <ul>
              <li><strong>핵심 아키텍처:</strong> Microservice Architecture(MSA) 이론 및 에코시스템 분석</li>
              <li><strong>기술 범위:</strong> Java/Spring 기반 백엔드, 컴포넌트 설계 및 분산 환경 인프라 구축</li>
              <li><strong>학습 목표:</strong> 대규모 트래픽 처리에 유연한 엔터프라이즈급 소프트웨어 개발 역량</li>
            </ul>
          `
        }
      }
    ]
  },

  details: {
    sectionTitle: "About Me — Detail",
    placeholder: "추후 자세한 컨텐츠가 추가될 예정입니다."
  },

  footer: {
    copyright: "© 2026 Kim Cheolyong. All Rights Reserved."
  }
};