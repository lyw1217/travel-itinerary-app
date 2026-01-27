import React, { useState } from 'react';
import { Plane, MapPin, Coffee, Utensils, Camera, CreditCard, Heart, Info, ChevronDown, ChevronUp, Users, Leaf, Train, Beer, Ticket, ShoppingBag, Lock, Unlock, Bus, Car, CheckCircle2, Circle, ClipboardList, AlertCircle } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('itinerary');
  // 다중 선택 지원: 여러 날짜를 동시에 펼쳐볼 수 있습니다.
  const [expandedDays, setExpandedDays] = useState([]);
  const [showBudget, setShowBudget] = useState(false);

  // 로컬 상태 관리 (Firebase 제거됨)
  const [checkedItems, setCheckedItems] = useState({});

  // --- Action Handlers ---

  const toggleDay = (day) => {
    setExpandedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day) // 이미 있으면 제거 (닫기)
        : [...prev, day] // 없으면 추가 (열기)
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

  // 체크리스트 데이터
  const checklistData = [
    {
      title: "출국 전 필수 확인 (중요!)",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      color: "border-l-4 border-red-400 bg-red-50/30",
      items: [
        { id: 'chk_cancel_agoda', text: '아고다 숙소 예약 취소 (이전 예약건)' },
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
        { id: 'res_rapit', text: '라피트 왕복권 예매 (QR)' },
        { id: 'res_cruise', text: '도톤보리 리버크루즈 예약' },
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
        { time: "08:10", icon: <Car className="w-5 h-5 text-gray-600" />, title: "인천공항 도착 (자차)", desc: "출발 3시간 전 도착. 장기주차장 주차 후 여유롭게 체크인" },
        { time: "11:10", icon: <Plane className="w-5 h-5 text-blue-500" />, title: "인천공항 출발", desc: "파라타 항공, 위탁수하물 30kg 포함으로 넉넉하게" },
        { time: "13:00", icon: <MapPin className="w-5 h-5 text-green-500" />, title: "간사이 공항 도착", desc: "입국 수속 후 라피트 탑승 (텐가차야 하차)" },
        { time: "15:00", icon: <Coffee className="w-5 h-5 text-amber-600" />, title: "히노데 호텔 체크인", desc: "에비스초역 1분. 얼리 체크인 또는 짐 보관 후 가벼운 차림" },
        { time: "16:00", icon: <Camera className="w-5 h-5 text-rose-500" />, title: "신세카이 & 츠텐카쿠", desc: "낮과 밤의 매력이 다른 레트로 거리 산책" },
        { time: "18:00", icon: <Utensils className="w-5 h-5 text-orange-500" />, title: "저녁: 쿠시카츠(튀김꼬치)", desc: "다루마 등 유명 꼬치집에서 시원한 맥주 한잔" },
        { time: "20:30", icon: <Beer className="w-5 h-5 text-yellow-500" />, title: "호텔 해피아워 (무료)", desc: "호텔 무료 라면 & 주류 무제한 파티 즐기기" }
      ]
    },
    {
      day: 2,
      date: "2월 17일 (화)",
      title: "교토 3대 명소 버스투어",
      theme: "아라시야마부터 청수사까지",
      color: "border-l-4 border-emerald-500",
      activities: [
        { time: "07:50", icon: <Bus className="w-5 h-5 text-emerald-600" />, title: "투어 집합 및 출발", desc: "집합 장소(난바 등) 시간 엄수. 조금 일찍 도착 권장" },
        { time: "09:40", icon: <Leaf className="w-5 h-5 text-green-600" />, title: "아라시야마 (3h) & 점심", desc: "대나무 숲, 도게츠교 산책. 체류 시간이 기므로 이곳에서 여유롭게 점심 식사" },
        { time: "13:00", icon: <Camera className="w-5 h-5 text-yellow-600" />, title: "금각사 (50m)", desc: "황금빛 3층 누각과 연못이 어우러진 교토의 상징 (입장료 500엔/인)" },
        { time: "14:25", icon: <Ticket className="w-5 h-5 text-purple-600" />, title: "청수사(기요미즈데라) (2h)", desc: "절벽 위 사찰 관람. 니넨자카/산넨자카 거리 구경 (입장료 500엔/인)" },
        { time: "16:50", icon: <Bus className="w-5 h-5 text-gray-500" />, title: "교토역 경유", desc: "숙박객 하차 지점 (오사카 숙박이므로 계속 탑승)" },
        { time: "18:00", icon: <MapPin className="w-5 h-5 text-gray-600" />, title: "오사카 복귀 및 해산", desc: "투어 종료. 저녁 식사 후 호텔 온천으로 피로 풀기" }
      ]
    },
    {
      day: 3,
      date: "2월 18일 (수)",
      title: "오사카 랜드마크 투어",
      theme: "오사카 성 & 우메다 & 도톤보리",
      color: "border-l-4 border-blue-500",
      activities: [
        { time: "09:30", icon: <MapPin className="w-5 h-5 text-green-600" />, title: "오사카 성 공원", desc: "천수각 배경 사진 필수. 코끼리 열차 이용하여 걷기 최소화" },
        { time: "12:30", icon: <Utensils className="w-5 h-5 text-rose-500" />, title: "점심: 우메다 함박스테이크", desc: "동양정 등 유명 경양식 맛집 (부모님들이 좋아하시는 맛)" },
        { time: "14:30", icon: <Camera className="w-5 h-5 text-blue-600" />, title: "우메다 공중정원 or 쇼핑", desc: "탁 트인 전망대 관람 또는 한큐백화점 손수건 쇼핑" },
        { time: "17:00", icon: <Ticket className="w-5 h-5 text-purple-600" />, title: "도톤보리 리버크루즈", desc: "해 질 녘 배 타고 글리코상 앞에서 사진 찍기 (예약 필수)" },
        { time: "19:00", icon: <Utensils className="w-5 h-5 text-rose-500" />, title: "저녁: 와규 야키니쿠", desc: "오사카에서의 마지막 만찬, 입에서 녹는 소고기" }
      ]
    },
    {
      day: 4,
      date: "2월 19일 (목)",
      title: "꽉 찬 마지막 날",
      theme: "쇼핑 & 힐링 후 저녁 출발",
      color: "border-l-4 border-gray-400",
      activities: [
        { time: "10:00", icon: <CreditCard className="w-5 h-5 text-gray-500" />, title: "체크아웃 & 짐 보관", desc: "호텔에 짐 맡기고 가벼운 차림으로 이동" },
        { time: "10:30", icon: <Utensils className="w-5 h-5 text-orange-500" />, title: "구로몬 시장 투어", desc: "도보 10분. 신선한 해산물, 과일 등 아침 겸 점심 군것질" },
        { time: "12:30", icon: <ShoppingBag className="w-5 h-5 text-purple-600" />, title: "난바 파크스 쇼핑", desc: "공중정원 산책 후 쇼핑몰에서 마지막 선물 구매" },
        { time: "15:00", icon: <Coffee className="w-5 h-5 text-amber-600" />, title: "짐 찾기 및 이동 준비", desc: "호텔 복귀하여 짐 찾고 텐가차야역으로 이동" },
        { time: "16:00", icon: <Train className="w-5 h-5 text-blue-600" />, title: "공항 이동 (라피트)", desc: "16:00 라피트 탑승 → 16:40 공항 도착 (출발 2시간 30분 전)" },
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
        <div className="bg-white rounded-full p-1 shadow-md flex justify-center">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'itinerary' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            여행 일정
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'checklist' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            체크리스트
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'info' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-500 hover:bg-stone-100'}`}
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
                  <strong>07:50 출발!</strong> 아라시야마에서 3시간 동안 여유롭게 자연을 즐기고 점심 식사를 합니다. 이후 금각사와 청수사를 편안하게 버스로 이동합니다.
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

        {/* Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 flex items-start gap-3 mb-2">
              <ClipboardList className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-800 text-sm mb-1">체크리스트 활용법</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  항목을 누르면 완료 표시(✅)가 됩니다. 여행 전 부모님과 함께 하나씩 체크해보세요.
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
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/223758362.jpg?k=5b2e5c8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e&o=&hp=1" alt="Hinode Hotel" className="w-20 h-20 rounded-lg object-cover bg-gray-200" onError={(e) => e.target.style.display = 'none'} />
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
                    <div className="text-[10px] text-blue-500 mt-1">위탁 30kg</div>
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
                  <span><strong>수하물 무게 확인</strong>: 갈 때는 30kg로 넉넉하지만, 올 때는 20kg입니다. 쇼핑 시 무게 배분에 유의하세요.</span>
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
