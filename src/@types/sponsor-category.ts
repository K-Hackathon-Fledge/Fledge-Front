export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: "DAILY_NECESSITY", label: "생활필수품" },
  { id: "FOOD", label: "식품" },
  { id: "HOME_APPLIANCES", label: "가전제품" },
  { id: "EDUCATION", label: "교육비/교재비" },
  { id: "MEDICAL", label: "의료비" },
  { id: "LEGAL_AID", label: "법률구조비" },
  { id: "ETC", label: "기타" },
];

export const ways: Category[] = [
  { id: "ONCE", label: "1회 인증" },
  { id: "WEEKLY", label: "4주 간 매 주 인증" },
  { id: "MONTHLY", label: "3개월 간 매 달 인증" },
];

export const banks: Category[] = [
  { id: "001", label: "한국" },
  { id: "002", label: "산업" },
  { id: "003", label: "기업" },
  { id: "004", label: "국민" },
  { id: "005", label: "외환" },
  { id: "007", label: "수협" },
  { id: "008", label: "수출입" },
  { id: "011", label: "농협" },
  { id: "020", label: "우리" },
  { id: "023", label: "SC제일" },
  { id: "026", label: "서울" },
  { id: "027", label: "한국씨티" },
  { id: "031", label: "대구" },
  { id: "032", label: "부산" },
  { id: "034", label: "광주" },
  { id: "035", label: "제주" },
  { id: "037", label: "전북" },
  { id: "039", label: "경남" },
  { id: "045", label: "새마을금고" },
  { id: "048", label: "신협" },
  { id: "081", label: "하나" },
  { id: "088", label: "신한" },
  { id: "089", label: "케이뱅크" },
  { id: "090", label: "카카오뱅크" },
  { id: "092", label: "토스뱅크" },
];

export const sorts: Category[] = [
  { id: "ing", label: "후원 중" },
  { id: "end", label: "후원 종료" },
];
