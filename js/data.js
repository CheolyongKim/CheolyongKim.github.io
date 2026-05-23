// ============================================================
// SITE_DATA - 콘텐츠 중앙 저장소
// [TODO] 표시 = 직접 채울 영역
// ============================================================

const SITE_DATA = {

  nav: {
    logo: "CHEOLYONG",
    links: [
      { label: "Tech",     id: "tech" },
      { label: "Projects", id: "projects" },
      { label: "Timeline", id: "timeline" }
    ],
    ctaLabel: "Contact",
    ctaId: "contact"
  },

  hero: {
    titleTop: "본질을 통찰하는,",
    titleBottom: "개발자 김철용.",
    // 회전 단어 (umanodesign의 rotating word 패턴)
    rotatingPrefix: "저는",
    rotatingWords: ["Java", "Python", "C / C++", "게임개발", "인공지능"],
    rotatingSuffix: "을 다루며 성장 중입니다."
  },

  // Sticky 스크롤 텍스트 (word-by-word reveal)
  stickyText: {
    words: "취미인 게임개발을 실제 프로젝트로까지 완성시킨 경험이 있고, 동시에 CS와 인공지능 기술을 배우는 등 항상 배움과 성장의 과정에 있어 투트랙 이상의 유연한 사고를 갖추고 있습니다.".split(" ")
  },

  tech: {
    label: "Core Tech Stack",
    items: [
      {
        name: "Java",
        desc: "현 교육과정에서 주요 언어로 사용하며, 안정적인 백엔드 아키텍처 및 객체지향 설계를 다집니다.",
        icon: "fa-brands fa-java"
      },
      {
        name: "Python",
        desc: "컴퓨터 그래픽스, 인공지능 프레임워크 활용 및 데이터 사이언스 분석 모델 구축에 활용하고 있습니다.",
        icon: "fa-brands fa-python"
      },
      {
        name: "C",
        desc: "컴퓨터 구조, 운영체제 등 시스템 저수준을 다루는 거의 모든 학부 과목의 기반이 되었습니다.",
        icon: "fa-solid fa-microchip"
      },
      {
        name: "C++",
        desc: "정교한 자료구조 활용과 효율적인 알고리즘 풀이 및 코딩테스트 대응에 주력으로 사용 중입니다.",
        icon: "fa-solid fa-code"
      }
    ]
  },

  projects: {
    label: "Project Highlight",
    items: [
      { id: "comgraphics", title: "컴그 과제",                  desc: "[TODO: 프로젝트 설명]", tag: "Graphics",   icon: "fa-solid fa-cube",            image: "assets/images/comgraphics.png" },
      { id: "linetracer",  title: "마프 linetracer",            desc: "[TODO: 프로젝트 설명]", tag: "Embedded",   icon: "fa-solid fa-microchip",       image: "assets/images/linetracer.png" },
      { id: "interop",     title: "컴네 interoperability test", desc: "[TODO: 프로젝트 설명]", tag: "Network",    icon: "fa-solid fa-network-wired",   image: "assets/images/interop.png" },
      { id: "capstone",    title: "졸업프로젝트",                desc: "[TODO: 프로젝트 설명]", tag: "Capstone",   icon: "fa-solid fa-graduation-cap",  image: "assets/images/capstone.png" },
      { id: "dutyflow",    title: "HD_DutyFlow",                desc: "[TODO: 프로젝트 설명]", tag: "Enterprise", icon: "fa-solid fa-diagram-project", image: "assets/images/dutyflow.png" }
    ]
  },

  // 타임라인 (umanodesign FAQ 아코디언 패턴)
  timeline: {
    heading: "경력 및 학력",
    subtext: "주요 이력을 확인하세요.",
    items: [
      {
        q: "'20 ~ '26  |  학사 - 한양대학교 컴퓨터소프트웨어학부",
        a: "컴퓨터소프트웨어학부에서 자료구조, 알고리즘, 운영체제, 컴퓨터네트워크, 컴퓨터 그래픽스 등 핵심 전공을 이수하고, 학부 프로젝트를 통해 이론의 실질적 코드화 프로세스를 경험했습니다."
      },
      {
        q: "'20 ~ '22  |  대한민국 육군 군 복무",
        a: "병장 만기전역. 군 조직 생활을 통해 협업 역량 및 성실성, 책임감을 배양했습니다. [TODO: 병과 정보 추가]"
      },
      {
        q: "'26 ~ 현재  |  KOSA MSA 기반 풀스택 양성과정",
        a: "한국소프트웨어산업협회(KOSA) 주관 교육과정 수강 중. Microservice Architecture(MSA) 이론, Java/Spring 기반 백엔드, 분산 환경 인프라 구축 등 엔터프라이즈급 실무 역량을 강화하고 있습니다."
      }
    ]
  },

  contact: {
    heading: "연락처",
    items: [
      { label: "Email",  value: "cheolyongkim.kr@gmail.com", href: "mailto:cheolyongkim.kr@gmail.com" },
      { label: "Tel",    value: "010-3533-2198",              href: "tel:010-3533-2198" },
      { label: "GitHub", value: "github.com/CheolyongKim",   href: "https://github.com/CheolyongKim" }
    ]
  },

  footer: {
    copy: "\u00A9 2026 Kim Cheolyong. All Rights Reserved."
  }
};