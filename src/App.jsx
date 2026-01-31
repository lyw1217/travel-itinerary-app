import React, { useState } from 'react';
import { Plane, MapPin, Coffee, Utensils, Camera, CreditCard, Heart, Info, ChevronDown, ChevronUp, Users, Leaf, Train, Beer, Ticket, ShoppingBag, Lock, Unlock, Bus, Car, CheckCircle2, Circle, ClipboardList, AlertCircle, BookOpen, Star, Gift, ExternalLink } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDays, setExpandedDays] = useState([]); 
  const [showBudget, setShowBudget] = useState(false);

  const [checkedItems, setCheckedItems] = useState({});

  // --- Action Handlers ---

  const toggleDay = (day) => {
    setExpandedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day] 
    );
  };

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSecretMode = () => {
    setShowBudget(!showBudget);
  };

  // 맛집 데이터 (Google Maps 링크 포함)
  const diningData = [
    {
      day: 0, // Special Section
      title: "🎁 히노데 호텔 무료 혜택 (매일)",
      color: "border-l-4 border-yellow-500",
      meals: [
        {
          type: "주류 무제한 (15:00 ~ 20:30)",
          desc: "호텔 내에서 마음껏 즐기는 술 한 잔",
          spots: [
            { name: "생맥주 & 하이볼", note: "시원한 맥주와 프리징 하이볼", tag: "무제한" },
            { name: "칵테일 & 일본주 & 소주", note: "취향대로 골라 마시는 다양한 주류", tag: "무제한" }
          ]
        },
        {
          type: "야식 라멘 (21:00 ~ 22:00)",
          desc: "출출한 밤을 달래주는 최고의 야식",
          spots: [
            { name: "수제 라면", note: "매일 바뀌는 메뉴, 마음껏 이용 가능", tag: "강추" }
          ]
        },
        {
          type: "디저트 & 음료",
          desc: "관광 후 당 충전 및 수분 보충",
          spots: [
            { name: "아이스크림", note: "매일 15:00 ~ 22:00 제공", tag: "달콤함" },
            { name: "24시간 드링크바", note: "커피, 주스, 차, 물 (1층 조식회장)", tag: "언제나" }
          ]
        }
      ]
    },
    {
      day: 1,
      title: "1일차: 신세카이의 맛 (쿠시카츠 & 라멘)",
      color: "border-l-4 border-orange-400",
      meals: [
        {
          type: "저녁 (쿠시카츠)",
          desc: "오사카 명물 튀김꼬치. 소스는 한 번만 찍는 것이 룰!",
          spots: [
            { name: "쿠시카츠 다루마 신세카이점", note: "본점 라인, 회전 빠름", tag: "약간 대기", link: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Shinsekai+Main+Shop+Osaka" },
            { name: "쿠시카츠 다루마 츠텐카쿠점", note: "에비스초역 근처, 부모님과 가기 편함", tag: "추천", link: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Tsutenkaku+Osaka" },
            { name: "쿠시카츠 사쿠라 본점", note: "조용한 분위기, 로컬 느낌", tag: "대기 적음", link: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Sakura+Shinsekai+Osaka" }
          ]
        },
        {
          type: "야식/마무리 (라멘)",
          desc: "첫 날 밤을 따뜻한 국물로 마무리 (호텔 라면도 있음!)",
          spots: [
            { name: "멘도코로 토라지", note: "신세카이 인근, 국물이 좋은 라멘집", tag: "한산함", link: "https://www.google.com/maps/search/?api=1&query=Mendokoro+Toraji+Shinsekai+Osaka" }
          ]
        }
      ]
    },
    {
      day: 2,
      title: "2일차: 교토의 점심 & 난바의 저녁",
      color: "border-l-4 border-emerald-500",
      meals: [
        {
          type: "점심 (아라시야마)",
          desc: "버스투어 중 자유 식사 (11:30 입장 추천)",
          spots: [
            { name: "골목 안 소규모 정식집", note: "덮밥/우동 등 가정식, 줄 짧은 곳", tag: "무난함", link: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Lunch+Osaka" },
            { name: "두부 요리집 (유도후)", note: "부모님 속 편한 메뉴", tag: "웨이팅 확인", link: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Tofu+Restaurant" },
            { name: "카페 레스토랑", note: "파스타/카레 등 가볍게 해결", tag: "빠름", link: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Cafe+Lunch" }
          ]
        },
        {
          type: "저녁 (난바/도톤보리)",
          desc: "투어 복귀 후 가볍고 부담 없는 식사",
          spots: [
            { name: "이마이 우동 본점", note: "도톤보리 중심, 깔끔한 국물", tag: "회전 빠름", link: "https://www.google.com/maps/search/?api=1&query=Dotonbori+Imai+Main+Shop+Osaka" },
            { name: "오사카오쇼 난바 센니치마에점", note: "교자 & 중화요리, 좌석 많음", tag: "대기 적음", link: "https://www.google.com/maps/search/?api=1&query=Osaka+Ohsho+Namba+Sennichimae" },
            { name: "백화점 식당가", note: "난바 마루이 등, 엘리베이터 이동 편리", tag: "쾌적함", link: "https://www.google.com/maps/search/?api=1&query=Namba+Marui+Restaurant" }
          ]
        }
      ]
    },
    {
      day: 3,
      title: "3일차: 미식의 날 (함박 & 와규 & 라멘)",
      color: "border-l-4 border-blue-500",
      meals: [
        {
          type: "점심 (우메다)",
          desc: "동양정 대기 길면 백화점 식당가 공략",
          spots: [
            { name: "그릴 캐피탈 동양정 (한큐)", note: "함박스테이크/양식, 현장 대기 보고 결정", tag: "접근성 갑", link: "https://www.google.com/maps/search/?api=1&query=Grill+Capital+Touyoutei+Hankyu+Umeda" },
            { name: "가정식 정식집", note: "한큐/한신 백화점 내, 좌석 넓음", tag: "부모님 추천", link: "https://www.google.com/maps/search/?api=1&query=Hankyu+Umeda+Restaurant" },
            { name: "지하상가 카레/돈카츠", note: "빠른 회전, 가볍게 해결", tag: "웨이팅 없음", link: "https://www.google.com/maps/search/?api=1&query=Umeda+Underground+Restaurant" }
          ]
        },
        {
          type: "저녁 (난바 와규)",
          desc: "입에서 살살 녹는 소고기 파티 (예약 권장)",
          spots: [
            { name: "Akatsuki Gyu (아카츠키)", note: "A5 와규 코스, 온라인 예약 가능", tag: "예약 필수", link: "https://www.google.com/maps/search/?api=1&query=Akatsuki+Gyu+Namba+Osaka" },
            { name: "Yakiniku Lab 난바점", note: "룸 좌석 많음, Klook 예약 가능", tag: "프라이빗", link: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Lab+Namba" },
            { name: "마츠사카규 야키니쿠 M", note: "호젠지 인근 유명 맛집", tag: "인기 많음", link: "https://www.google.com/maps/search/?api=1&query=Matsusakagyu+Yakiniku+M+Hozenji+Yokocho" }
          ]
        },
        {
          type: "선택 사항 (라멘)",
          desc: "야키니쿠 전후로 출출하다면?",
          spots: [
            { name: "하나마루켄 라멘", note: "24시간, 호젠지 골목, 간사이 스타일", tag: "줄 짧은 편", link: "https://www.google.com/maps/search/?api=1&query=Hanamaruken+Namba+Hozenji" },
            { name: "라멘 보꼬시", note: "진한 국물, 도톤보리 메인에서 한 블록 뒤", tag: "숨은 맛집", link: "https://www.google.com/maps/search/?api=1&query=Ramen+Bokkoshi+Osaka" },
            { name: "나니와 멘지로", note: "난바역 역사 내 위치", tag: "현지인 위주", link: "https://www.google.com/maps/search/?api=1&query=Naniwa+Menjiro+Namba" }
          ]
        }
      ]
    },
    {
      day: 4,
      title: "4일차: 시장 먹방 & 마지막 식사",
      color: "border-l-4 border-gray-400",
      meals: [
        {
          type: "아침/간식 (구로몬 시장)",
          desc: "조금씩 다양하게 맛보기",
          spots: [
            { name: "이부키 커피", note: "토스트+커피 모닝 세트, 앉아서 휴식", tag: "조식 추천", link: "https://www.google.com/maps/search/?api=1&query=Ibuki+Coffee+Kuromon+Osaka" },
            { name: "꼬치 요리 & 스시", note: "가리비/새우/과일 꼬치 등", tag: "길거리 음식", link: "https://www.google.com/maps/search/?api=1&query=Kuromon+Market+Osaka" }
          ]
        },
        {
          type: "점심 (난바 파크스)",
          desc: "공항 가기 전 쾌적하고 여유롭게",
          spots: [
            { name: "샤브샤브 온야사이", note: "점심엔 여유로움, 야채 섭취", tag: "속 편함", link: "https://www.google.com/maps/search/?api=1&query=Onyasai+Namba+Osaka" },
            { name: "레스토랑층 (파스타/일식)", note: "줄 짧은 곳 골라 들어가기", tag: "선택 다양", link: "https://www.google.com/maps/search/?api=1&query=Namba+Parks+Restaurant" }
          ]
        }
      ]
    }
  ];

  // 체크리스트 데이터
  const checklistData = [
    {
      title: "출국 전 필수 확인 (중요!)",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      color: "border-l-4 border-red-400 bg-red-50/30",
      items: [
        { id: 'chk_re_hotel', text: '숙소 예약 재확인 (히노데 호텔)' },
        { id: 'chk_re_flight', text: '항공 예약 재확인 (파라타/티웨이)' },
        { id: 'chk_re_tour', text: '교토 버스투어 예약 확정 확인' },
      ]
    },
    {
      title: "여행 예약 및 준비",
      icon: <Ticket className="w-5 h-5 text-rose-500" />,
      color: "border-l-4 border-rose-400",
      items: [
        { id: 'res_flight', text: '왕복 항공권 E-티켓 저장/출력' },
        { id: 'res_hotel', text: '호텔 바우처 저장/출력' },
        { id: 'res_rapit', text: '라피트 왕복권 예매 (간사이공항 ↔ 난바)' },
        { id: 'res_food', text: '주요 식당 및 맛집 예약 (저녁식사 등)' },
        { id: 'res_amazing', text: '오사카 주유패스 1일권 (2/18 사용) 예매' },
        { id: 'res_cruise', text: '도톤보리 리버(원더)크루즈 예약 (17:30~ 추천)' },
        { id: 'res_wifi', text: '와이파이 도시락 or 로밍 신청' },
        { id: 'res_ins', text: '여행자 보험 가입 (3인)' },
        { id: 'res_vjw', text: 'Visit Japan Web 등록 (입국용)' },
      ]
    },
    {
      title: "부모님 맞춤 준비물",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
      color: "border-l-4 border-emerald-500",
      items: [
        { id: 'pack_pass', text: '여권 (유효기간 6개월 이상)' },
        { id: 'pack_money', text: '엔화 현금 & 트래블 카드' },
        { id: 'pack_110v', text: '110V 돼지코 어댑터 (필수)' },
        { id: 'pack_med', text: '부모님 상비약(혈압약 등) & 소화제' },
        { id: 'pack_heat', text: '휴족시간 & 핫팩 (많이 걷는 날 대비)' },
        { id: 'pack_shoes', text: '가장 편한 운동화 신고 가기' },
        { id: 'pack_power', text: '보조배터리 & 충전 케이블' },
        { id: 'pack_umb', text: '작은 우산 (비상용)' },
      ]
    }
  ];

  const schedule = [
    {
      day: 1,
      date: "2월 16일 (월)",
      title: "오사카의 레트로 감성",
      theme: "여유로운 공항 도착과 시작",
      color: "border-l-4 border-orange-500",
      activities: [
        { time: "08:10", icon: <Car className="w-5 h-5 text-gray-600" />, title: "인천공항 도착 (자차)", desc: "출발 3시간 전 도착. 장기주차장 주차 후 여유롭게 체크인", link: "https://www.google.com/maps/search/?api=1&query=Incheon+International+Airport" },
        { time: "11:10", icon: <Plane className="w-5 h-5 text-blue-500" />, title: "인천공항 출발", desc: "파라타 항공, 위탁수하물 15kg 포함 (짐 무게 주의)" },
        { time: "13:00", icon: <MapPin className="w-5 h-5 text-green-500" />, title: "간사이 공항 도착", desc: "입국 수속 및 짐 찾기 (약 40~50분 소요 예상)", link: "https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport" },
        { time: "13:50", icon: <Utensils className="w-5 h-5 text-amber-600" />, title: "점심: 공항 도시락(에키벤) 구매", desc: "★팁: 식당 대기 대신 맛있는 도시락을 사서 열차 내에서 편하게 드세요." },
        { time: "14:05", icon: <Train className="w-5 h-5 text-blue-600" />, title: "라피트 열차 탑승 (확정)", desc: "14:05 출발 → 14:40 신이마미야역 도착. (도시락 식사)" },
        { time: "15:10", icon: <Coffee className="w-5 h-5 text-amber-600" />, title: "히노데 호텔 체크인", desc: "신이마미야역 → 사카이스지선 환승 → 에비스초역 5번 출구 (도보 1분)", link: "https://www.google.com/maps/search/?api=1&query=Hinode+Hotel+Nipponbashi+Osaka" },
        { time: "16:00", icon: <Camera className="w-5 h-5 text-rose-500" />, title: "신세카이 & 츠텐카쿠", desc: "호텔 바로 옆! 낮과 밤의 매력이 다른 레트로 거리 산책", link: "https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka" },
        { time: "18:00", icon: <Utensils className="w-5 h-5 text-orange-500" />, title: "저녁: 쿠시카츠(다루마 등)", desc: "호텔 근처 신세카이 맛집. (상세 정보는 '맛집 리스트' 탭 확인)", link: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Tsutenkaku+Osaka" },
        { time: "20:30", icon: <Beer className="w-5 h-5 text-yellow-500" />, title: "호텔 해피아워 & 야식 라멘", desc: "무료 라면 제공. (부족하면 근처 '멘도코로 토라지' 추천)" }
      ]
    },
    {
      day: 2,
      date: "2월 17일 (화)",
      title: "교토 3대 명소 버스투어",
      theme: "아라시야마부터 청수사까지",
      color: "border-l-4 border-emerald-500",
      activities: [
        { time: "07:50", icon: <Bus className="w-5 h-5 text-emerald-600" />, title: "투어 집합 및 출발", desc: "집합: 츠루통탄 소에몬쵸점 앞 (도톤보리). 호텔에서 택시/도보 이동 추천", link: "https://www.google.com/maps/search/?api=1&query=Tsurutontan+Soemoncho+Osaka" },
        { time: "09:40", icon: <Leaf className="w-5 h-5 text-green-600" />, title: "아라시야마 (3h) & 점심", desc: "대나무 숲 산책. 점심은 줄 짧은 정식집이나 두부요리 추천", link: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove+Kyoto" },
        { time: "13:00", icon: <Camera className="w-5 h-5 text-yellow-600" />, title: "금각사 (50m)", desc: "황금빛 3층 누각과 연못이 어우러진 교토의 상징 (입장료 500엔)", link: "https://www.google.com/maps/search/?api=1&query=Kinkakuji+Kyoto" },
        { time: "14:25", icon: <Ticket className="w-5 h-5 text-purple-600" />, title: "청수사(기요미즈데라) (2h)", desc: "★팁: 부모님이 힘드시면 본당 계단 대신 니넨자카 거리 위주로 산책하세요.", link: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Kyoto" },
        { time: "16:50", icon: <Bus className="w-5 h-5 text-gray-500" />, title: "교토역 경유", desc: "숙박객 하차 지점 (오사카 숙박이므로 계속 탑승)" },
        { time: "18:00", icon: <MapPin className="w-5 h-5 text-gray-600" />, title: "오사카 복귀 및 해산", desc: "투어 종료 후 난바에서 저녁(우동/교자 등) 해결 후 귀가 추천", link: "https://www.google.com/maps/search/?api=1&query=Dotonbori+Osaka" }
      ]
    },
    {
      day: 3,
      date: "2월 18일 (수)",
      title: "오사카 랜드마크 투어 (주유패스)",
      theme: "주유패스로 교통비·입장료 프리패스",
      color: "border-l-4 border-blue-500",
      activities: [
        { time: "09:30", icon: <MapPin className="w-5 h-5 text-green-600" />, title: "오사카 성 공원", desc: "★천수각 입장 무료(주유패스). 공원 산책 및 외관 촬영 위주.", link: "https://www.google.com/maps/search/?api=1&query=Osaka+Castle+Park" },
        { time: "12:30", icon: <Utensils className="w-5 h-5 text-rose-500" />, title: "점심: 우메다 백화점 식당가", desc: "함박스테이크 등 대기 줄 짧은 곳 선택 (맛집 탭 참고)", link: "https://www.google.com/maps/search/?api=1&query=Hankyu+Umeda+Main+Store" },
        { time: "14:30", icon: <Camera className="w-5 h-5 text-blue-600" />, title: "우메다 공중정원", desc: "★입장 무료(주유패스, 15:00 이전 입장 시). 탁 트인 전망 감상", link: "https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building" },
        { time: "17:30", icon: <Ticket className="w-5 h-5 text-purple-600" />, title: "도톤보리 리버(원더)크루즈", desc: "★승선 무료(주유패스). 매표소에서 패스 제시 후 티켓 교환 필수", link: "https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Man+Sign" },
        { time: "19:00", icon: <Utensils className="w-5 h-5 text-rose-500" />, title: "저녁: 와규 야키니쿠", desc: "오사카에서의 마지막 만찬! 예약해둔 식당으로 이동" }
      ]
    },
    {
      day: 4,
      date: "2월 19일 (목)",
      title: "꽉 찬 마지막 날",
      theme: "쇼핑 & 힐링 후 저녁 출발",
      color: "border-l-4 border-gray-400",
      activities: [
        { time: "10:30", icon: <CreditCard className="w-5 h-5 text-gray-500" />, title: "체크아웃 & 짐 보관", desc: "12시까지 체크아웃 가능! 느긋하게 준비 후 짐 보관." },
        { time: "11:00", icon: <Utensils className="w-5 h-5 text-orange-500" />, title: "구로몬 시장 투어", desc: "해산물/과일 꼬치, 이부키 커피 등 아침 겸 간식", link: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba+Market" },
        { time: "12:30", icon: <ShoppingBag className="w-5 h-5 text-purple-600" />, title: "난바 파크스 쇼핑 & 점심", desc: "공중정원 산책 후 식당가에서 마지막 식사 (샤브샤브/파스타)", link: "https://www.google.com/maps/search/?api=1&query=Namba+Parks" },
        { time: "15:00", icon: <Coffee className="w-5 h-5 text-amber-600" />, title: "짐 찾기 및 이동 준비", desc: "호텔 복귀하여 짐 찾고 에비스초역→신이마미야역 이동" },
        { time: "15:37", icon: <Train className="w-5 h-5 text-blue-600" />, title: "라피트 열차 탑승 (확정)", desc: "15:37 신이마미야역 출발 → 16:20 공항 도착 (여유로움)", link: "https://www.google.com/maps/search/?api=1&query=Shin-Imamiya+Station+Osaka" },
        { time: "19:10", icon: <Plane className="w-5 h-5 text-blue-500" />, title: "간사이 공항 출발", desc: "티웨이항공 (TW), 21:05 인천 도착" }
      ]
    }
  ];

  const budget = {
    flight: 606398 + 966251,
    hotel: 923212,
    food: 100000 * 3 * 4,
    transport: 300000, 
    reserve: 200000
  };

  const totalBudget = Object.values(budget).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-orange-600 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-xl relative overflow-hidden transition-all duration-500">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Beer size={120} />
        </div>

        {/* Secret Toggle Button */}
        <button 
          onClick={toggleSecretMode}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-white/50 hover:text-white transition-all z-50"
          title={showBudget ? "예산 숨기기" : "상세 비용 보기"}
        >
          {showBudget ? <Unlock size={16} /> : <Lock size={16} />}
        </button>

        <div className="max-w-md mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-2 text-orange-100">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">2026.02.16 - 02.19</span>
            <span className="flex items-center gap-1 text-sm"><Users size={14} /> 3명</span>
          </div>
          <h1 className="text-3xl font-bold mb-1">꽉 찬 오사카 & 교토</h1>
          <h2 className="text-xl font-light opacity-90">더 길어진 일정, 더 깊은 추억</h2>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-md mx-auto -mt-6 px-4 relative z-20">
        <div className="bg-white rounded-full p-1 shadow-md flex justify-center overflow-hidden">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold transition-all ${activeTab === 'itinerary' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            여행 일정
          </button>
          <button 
            onClick={() => setActiveTab('dining')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold transition-all ${activeTab === 'dining' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            맛집 리스트
          </button>
          <button 
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold transition-all ${activeTab === 'checklist' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            체크리스트
          </button>
          <button 
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold transition-all ${activeTab === 'info' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            숙소 & 항공
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 mt-6">

        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-start gap-3 mb-6">
              <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-emerald-800 text-sm mb-1">2일차: 교토 버스투어</h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  <strong>07:50 출발!</strong> 집합 장소(츠루통탄 소에몬쵸점)까지 이동 시간(약 20분)을 고려해 여유 있게 출발해 주세요. 교토에서는 체력에 맞춰 쉬엄쉬엄 다니시면 됩니다.
                </p>
              </div>
            </div>

            {schedule.map((day) => (
              <Card key={day.day} className={day.color}>
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer active:bg-stone-50 transition-colors"
                  onClick={() => toggleDay(day.day)}
                >
                  <div>
                    <div className="text-xs font-bold text-stone-500 mb-1">{day.date}</div>
                    <div className="font-bold text-lg flex items-center gap-2">
                      <span className="bg-stone-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono">{day.day}</span>
                      {day.title}
                    </div>
                    <div className="text-sm text-stone-500 mt-1">{day.theme}</div>
                  </div>
                  {/* 변경: expandedDays 배열에 포함되어 있는지 확인 */}
                  {expandedDays.includes(day.day) ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
                </div>

                {/* 변경: expandedDays 배열에 포함되어 있는지 확인 */}
                {expandedDays.includes(day.day) && (
                  <div className="px-4 pb-4 bg-stone-50/50">
                    <div className="border-t border-stone-200 my-2"></div>
                    <div className="space-y-4 mt-4 relative pl-2">
                      {/* Vertical line */}
                      <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-stone-200"></div>

                      {day.activities.map((act, idx) => (
                        <div key={idx} className="relative flex gap-4 items-start z-10">
                          <div className="bg-white p-1 rounded-full border border-stone-200 shadow-sm shrink-0">
                            {act.icon}
                          </div>
                          <div>
                            <div className="font-bold text-stone-800 text-sm flex items-center gap-2">
                              {act.time} <span className="font-normal text-stone-400 text-xs">|</span> {act.title}
                              {act.link && (
                                <a href={act.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" title="지도 보기">
                                  <ExternalLink size={12} />
                                </a>
                              )}
                            </div>
                            <div className="text-xs text-stone-600 mt-1 leading-relaxed bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
                              {act.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Dining Tab */}
        {activeTab === 'dining' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 flex items-start gap-3 mb-2">
              <Utensils className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-orange-800 text-sm mb-1">식사 가이드</h3>
                <p className="text-xs text-orange-700 leading-relaxed">
                  부모님과 함께라면 <strong>'줄 짧은 곳'</strong>이 최고의 맛집입니다. 상황에 맞춰 유동적으로 선택하세요.
                </p>
              </div>
            </div>

            {diningData.map((data, idx) => (
              <Card key={idx} className={data.color}>
                <div className="p-4 bg-white/50 border-b border-stone-100">
                  <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
                    <BookOpen size={18} className="text-stone-500" /> {data.title}
                  </h3>
                </div>
                <div className="p-4 space-y-6">
                  {data.meals.map((meal, mIdx) => (
                    <div key={mIdx}>
                      <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
                        <Utensils size={14} className="text-orange-500" /> {meal.type}
                      </h4>
                      <p className="text-xs text-stone-500 mb-3">{meal.desc}</p>
                      <div className="space-y-2">
                        {meal.spots.map((spot, sIdx) => (
                          <div key={sIdx} className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm">
                            <div className="flex justify-between items-start">
                              <div className="font-bold text-sm text-stone-800 flex items-center gap-2">
                                {spot.name}
                                {spot.link && (
                                  <a href={spot.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" title="지도 보기">
                                    <ExternalLink size={12} />
                                  </a>
                                )}
                              </div>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${spot.tag.includes('예약') ? 'bg-rose-100 text-rose-600' :
                                  spot.tag.includes('추천') ? 'bg-blue-100 text-blue-600' :
                                    spot.tag.includes('무제한') ? 'bg-yellow-100 text-yellow-700' :
                                      spot.tag.includes('무료') ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-stone-100 text-stone-500'
                                }`}>{spot.tag}</span>
                            </div>
                            <div className="text-xs text-stone-500 mt-1">{spot.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 flex items-start gap-3 mb-2">
              <ClipboardList className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-800 text-sm mb-1">체크리스트 활용법</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  항목을 누르면 완료 표시(✅)가 되고 자동 저장됩니다. 여행 전 부모님과 함께 하나씩 체크해보세요.
                </p>
              </div>
            </div>

            {checklistData.map((section, idx) => (
              <Card key={idx} className={section.color}>
                <div className="p-4 bg-white/50 border-b border-stone-100 flex items-center gap-2">
                  {section.icon}
                  <h3 className="font-bold text-lg text-stone-800">{section.title}</h3>
                </div>
                <div className="p-2">
                  {section.items.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3 m-1 rounded-lg flex items-center gap-3 cursor-pointer transition-all ${checkedItems[item.id] ? 'bg-stone-100 text-stone-400' : 'hover:bg-stone-50'}`}
                    >
                      {checkedItems[item.id] ? 
                        <CheckCircle2 className="w-5 h-5 text-stone-400 shrink-0" /> : 
                        <Circle className="w-5 h-5 text-stone-300 shrink-0" />
                      }
                      <span className={`text-sm font-medium ${checkedItems[item.id] ? 'line-through' : 'text-stone-700'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Info Tab (Always Visible to Parents) */}
        {activeTab === 'info' && (
          <div className="space-y-6 animate-fade-in">
            {/* Hotel Selection Info */}
            <Card className="p-5 border-l-4 border-red-500 bg-red-50/30">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Beer className="text-red-500" size={20} /> 확정 숙소 정보
              </h3>
              <div className="flex gap-4 items-start mb-3">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hinode Hotel" className="w-20 h-20 rounded-lg object-cover bg-gray-200" onError={(e) => e.target.style.display = 'none'} />
                <div>
                  <div className="font-bold text-lg text-red-900">히노데 호텔 닛폰바시</div>
                  <div className="text-xs text-stone-500 mt-1">Triple Room (싱글 침대 3개)</div>

                  {/* Google Map Link Added */}
                  <a 
                    href="https://www.google.com/maps/place/%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9E%88%EB%85%B8%EB%8D%B0+%ED%98%B8%ED%85%94+%EB%8B%9B%ED%8F%B0%EB%B0%94%EC%8B%9C/@34.6547847,135.5022192,17z/data=!4m9!3m8!1s0x6000e766d8b76335:0x18e31717b1ee08f0!5m2!4m1!1i2!8m2!3d34.6547847!4d135.5047941!16s%2Fg%2F11f04lkqgh?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 mt-2 font-bold bg-blue-50 px-2 py-1 rounded-md border border-blue-100"
                  >
                    <MapPin size={12} /> 구글맵에서 위치 보기
                  </a>
                </div>
              </div>
              <ul className="text-sm space-y-2 text-stone-700">
                <li className="flex gap-2">✅ <strong>장점:</strong> 대욕장 온천 + 3인 침대 완비</li>
                <li className="flex gap-2">🍺 <strong>특전:</strong> 매일 밤 주류/라면 무제한 무료 제공</li>
                <li className="flex gap-2">📍 <strong>위치:</strong> 에비스초역 1분, 신세카이 바로 옆</li>
              </ul>
            </Card>

            {/* Flight Info */}
            <Card className="p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Plane className="text-blue-500" size={20} /> 항공편 정보 (확정)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
                  <div className="text-left">
                    <div className="text-xs text-stone-500">ICN → KIX (파라타)</div>
                    <div className="font-bold text-lg">11:10</div>
                    <div className="text-xs text-stone-400">02.16 (월)</div>
                    <div className="text-[10px] text-blue-500 mt-1">위탁 15kg</div>
                  </div>
                  <div className="text-stone-300">✈︎</div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500">도착</div>
                    <div className="font-bold text-lg">13:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
                  <div className="text-left">
                    <div className="text-xs text-stone-500">KIX → ICN (티웨이)</div>
                    <div className="font-bold text-lg">19:10</div>
                    <div className="text-xs text-stone-400">02.19 (목)</div>
                    <div className="text-[10px] text-blue-500 mt-1">위탁 20kg</div>
                  </div>
                  <div className="text-stone-300">✈︎</div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500">도착</div>
                    <div className="font-bold text-lg">21:05</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Parents Care Tips */}
            <Card className="p-5 border-l-4 border-rose-400">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Heart className="text-rose-400" size={20} /> 여행 준비물 체크
              </h3>
              <ul className="space-y-3 text-sm text-stone-600">
                <li className="flex gap-2 items-start">
                  <span className="text-rose-500 font-bold">1.</span>
                  <span><strong>수하물 무게 확인</strong>: 갈 때는 15kg, 올 때는 20kg입니다. 쇼핑 시 무게 배분에 유의하세요.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-rose-500 font-bold">2.</span>
                  <span><strong>마지막 날 일정</strong>: 4일차에 시간이 많습니다. 짐을 호텔에 맡기고 난바 파크스 등 쇼핑몰에서 편하게 시간 보내세요.</span>
                </li>
              </ul>
            </Card>

            {/* Cost Estimate - Only shows if unlocked */}
            {showBudget && (
              <Card className="p-5 border-l-4 border-amber-500 bg-amber-50 animate-fade-in">
                <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <CreditCard className="text-amber-500" size={20} /> 3인 상세 예산
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-dashed border-stone-300 pb-2">
                    <span className="text-stone-600">항공권 (3인 확정)</span>
                    <span className="font-medium">{(budget.flight).toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-stone-300 pb-2">
                    <span className="text-stone-600">숙박비 (히노데 3박)</span>
                    <span className="font-medium">{(budget.hotel).toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-stone-300 pb-2">
                    <span className="text-stone-600">식비 (맛집 위주)</span>
                    <span className="font-medium">{(budget.food).toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-stone-300 pb-2">
                    <span className="text-stone-600">교통비/입장료</span>
                    <span className="font-medium">{(budget.transport).toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-stone-300 pb-2 text-stone-400">
                    <span className="">예비비</span>
                    <span className="">{(budget.reserve).toLocaleString()} 원</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 mt-2 bg-white p-3 rounded-lg border border-amber-200">
                    <span className="font-bold text-amber-800">총 예상 비용</span>
                    <span className="font-bold text-amber-700 text-lg">약 {(totalBudget).toLocaleString()} 원</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-2 text-right">
                    * 1인당 약 {(totalBudget / 3).toFixed(0).toLocaleString()}원 예상
                  </p>
                </div>
              </Card>
            )}

          </div>
        )}

      </div>
    </div>
  );
}