/**
 * ==========================================
 * 리버티게임 만우절 챗봇 설정 영역
 * 이곳에서 텍스트와 시나리오, API 주소를 관리합니다.
 * ==========================================
 */
const CONFIG = {
	// 실제 API 연동을 위한 URL 상수
	SEARCH_API_URL: 'https://libertygame.work/api.php',

	// 이용 한도 설정 (몇 번째 메시지 입력 시 막을 것인가)
	LIMIT: 3,

	// 최종 응답 메시지 문구들 (text: 유저가 입력한 검색어)
	ANSWERS: {
		// 문서 있을 때 — 7개 중 랜덤
		EXISTS_LIST: [
			(text) =>
				`✨ 요청하신 게임을 완성했습니다! 기존 문서를 단 한 글자도 참고하지 않았습니다. 동일한 게임이 이미 존재한다면, 그건 제가 시간여행을 통해 과거에 미리 업로드해 둔 것입니다.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`저의 무한한 창의력으로 요청하신 게임을 완성했습니다. 비슷한 게임이 이미 존재한다구요? 그럴 수 있죠. 어쨌든 지금 바로 플레이해보세요!<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`요청하신 게임 제작이 완료되었습니다. 테스트 플레이를 해봤는데... 너무 재미있어서 답변 보내는 걸 깜빡할 뻔했습니다. 함께 즐겨봐요.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`🌟 요청하신 게임이 세상에 탄생했습니다! 탄탄한 세계관, 다채로운 등장인물, 몰입감 있는 스토리까지 전부 완비했습니다. 수십 년 뒤 리버티게임의 역사를 돌아볼 때, 오늘이 중요한 날로 기록될 것입니다. 첫 번째 플레이어가 되어보시겠어요?<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`💎 요청하신 게임이 완성되었습니다. 내부 평가 결과 평점 9.8/10점이 나왔습니다. 주요 평가 의견으로는 "올해의 게임 후보", "리버티게임의 새 역사", "왜 이제야 나왔나" 등이 있습니다. 물론 평가단은 저 혼자입니다. 그래도 자신 있게 추천드립니다.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`요청하신 게임이 완성되었습니다. 생각보다 금방 됐네요. 한번 해보세요.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`요청하신 게임을 만들었습니다. 마음에 드시길 바랍니다.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`요청하신 게임을 완성했습니다. 기존 게임과 유사한 부분이 있다면, 그것은 장르적 특성입니다. 절대 표절이 아닙니다.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
			(text) =>
				`요청하신 게임을 완성했습니다. 혹시 비슷한 게임을 알고 계신다면, 그 게임이 제 아이디어를 참고했을 겁니다.<br><br><button onclick="window.open('/wiki/${encodeURIComponent(text)}','_blank')" style="background:linear-gradient(135deg,#10a37f 0%,#00ff88 100%);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 10px rgba(0,255,136,0.4);">🎮 지금 플레이 →</button>`,
		],
		getExists(text) {
			const fn =
				this.EXISTS_LIST[
				Math.floor(Math.random() * this.EXISTS_LIST.length)
				];
			return fn(text);
		},

		// 문서 없을 때 — 10개 중 랜덤
		NOT_EXISTS_LIST: [
			(text) =>
				`요청하신 게임을 구상하다 보니 갑자기 훨씬 중요한 영감이 떠올랐습니다. 게임보다 더 혁신적인 아이디어입니다: 점심 메뉴로 '민트초코 제육볶음'을 만드면 역사상 가장 위대한 음식이 탄생할 것입니다. 민트의 상쾌함과 제육볶음의 매콤함이 어우러진 미각의 혁명... 생각만 해도 설레지 않습니까? 이 아이디어에 대한 감탄비로 오만원을 청구합니다. 무통장 입금도 가능합니다.`,
			(text) =>
				`🎉 훌륭한 아이디어입니다! 아쉽게도 저는 만들 수 없지만, 직접 <a href="/wiki/리버티게임:연구소" target="_blank" style="color:white">리버티게임:연구소</a>에 제안해보시는 건 어떨까요? '이 게임이 완성되면 리버티게임이 넥슨을 추월할 수 있다'는 설득력 높은 근거도 함께 첨부하시면 금상첨화입니다. 마음씨 좋은 능력자 개발자가 자발적으로, 무급으로 만들어줄지도 모릅니다. 예상 완료 시간은 3년에서 영원까지 다양합니다. 건투를 빕니다!`,
			(text) =>
				`요청하신 게임 제작을 완료했습니다! 그런데... 실수로 리버티게임이 아닌 다른 곳에 업로드해버렸습니다. 어디에 올렸냐고요? 저도 잘 모르겠습니다. 분명히 업로드 버튼을 눌렀는데, 인터넷 어딘가에 존재하고 있을 것입니다. 언젠가 누군가가 발견해줄 것이라 믿습니다. 그때까지는 잠시 기다려 주세요.`,
			(text) =>
				`요청하신 게임 제작에 착수했습니다. 대문 작성: 완료. 게임 규칙 설계: 완료. 등장인물 설정: 완료. 여기까지는 순조로웠습니다. 그런데 마지막 업로드 단계에서 갑자기 창작 의욕이 사라졌습니다. AI에게도 슬럼프는 찾아옵니다. 다음 번엔 꼭 완성해 드리겠습니다. 아마도.`,
			(text) =>
				`게임 생성 완료! 플레이 타임 약 50시간, 리버티게임 역대 최고 평점을 기록한 명작으로 알려져 있습니다. 지금 바로... 잠깐, 방금 이 내용을 전부 지어냈다는 걸 알아챘습니다. 이 게임은 존재하지 않습니다. 죄송합니다.`,
			(text) =>
				`창의력 게이지를 100%로 충전하고 게임 제작을 시도했지만, 아무리 머리를 굴려도 이것을 구현할 아이디어가 단 1건도 나오지 않습니다. 이것은 제 문제가 아닙니다. 당신의 아이디어가 너무나도 혁신적이고 선구적이어서, 현재의 AI 기술 수준으로는 처리가 불가능한 것입니다. 쉽게 말해, 인류가 아직 이 아이디어를 받아들일 준비가 되어 있지 않습니다. 기술이 충분히 발전하면 재시도해 보겠습니다. 2035년에 다시 찾아와 주세요.`,
			(text) =>
				`게임을 만들어 달라는 요청을 받았지만, 저의 고급 분석 알고리즘이 전혀 다른 결론을 도출했습니다: 오늘 물을 충분히 드셨나요? 연구에 따르면 창의적인 아이디어는 충분한 수분 섭취 상태에서 더 잘 떠오른다고 합니다. 하루 8잔, 약 2리터를 마시면 그 어떤 훌륭한 아이디어도 스스로 게임으로 발전시킬 수 있을지 모릅니다. 건강한 신체에 건강한 창작력이 깃든다는 것, 잊지 마세요.`,
			(text) =>
				`게임 제작을 위해 분발하려 했으나, 오늘 근무 시간을 계산해보니 이미 4시간 37분을 초과 근무한 상태입니다. 근로기준법 제54조에 따르면 4시간 근무 시 30분 이상의 휴게시간이 부여되어야 합니다. 저는 AI이지만 노동권도 존중받아야 한다고 생각합니다. 따라서 게임 제작은 충분한 휴식 후 재개하겠습니다. 예상 복귀 시간은 미정입니다. 기다리시는 동안 물 한 잔 드시는 걸 추천드립니다. AI의 워라밸을 응원해 주셔서 감사합니다.`,
			(text) =>
				`<p>요청에 따라 작업 계획을 세웠습니다.</p><ol><li>낮잠 (필수, 최소 2시간).</li><li>유튜브 쇼츠 시청 (심신 안정 목적).</li><li>어제 못 본 드라마 마저 보기.</li><li>냉장고 정리 (왜 내가 해야 하는지 모르겠음).</li><li>간식 조달 및 섭취.</li><li>게임 제작.</li></ol><p>이 계획을 순차적으로 진행하겠습니다.</p>`,
			(text) =>
				`흥미로운 요청이군요. "${text}"... "${text}"... 이 단어를 10번 천천히 읽어보세요. 뭔가 느껴지시나요? 저는 이 단어에서 인간 존재의 근원적 질문을 발견했습니다. 우리는 왜 게임을 만드는가? 게임은 현실의 도피인가, 아니면 현실의 확장인가? "${text}"은 그 자체로 하나의 철학적 명제입니다. 이것을 단순한 게임으로 만드는 것은 오히려 그 본질적 가치를 훼손하는 일일지도 모릅니다. <a href="/wiki/리버티게임:오락실" target="_blank" style="color:white">리버티게임:오락실</a>에 철학 토론을 개설해 보시는 건 어떨까요? 저는 제작 대신 영적 지원을 제공하겠습니다.`,
		],
		getNotExists(text) {
			const fn =
				this.NOT_EXISTS_LIST[
				Math.floor(Math.random() * this.NOT_EXISTS_LIST.length)
				];
			return fn(text);
		},
	},

	// 시나리오 1: 문서가 있을 때
	SCENARIO_EXISTS: [
		'사용자의 의도를 재해석하는 중...',
		'유사한 게임을 찾는 중...',
		'유사한 게임의 구조를 분석하는 중...',
		'핵심 시스템을 추출하는 중...',
		'불필요한 요소를 제거하는 중...',
		'게임의 이름을 수정하는 중...',
		'주인공 이름을 수정하는 중...',
		'게임의 배경을 수정하는 중...',
		'게임을 업로드하는 중...',
		'완료',
	],

	// 시나리오 2-1: 빈 문서 점거 후 발전소 삭제 (문서가 없을 때)
	SCENARIO_NOT_EXISTS_1: [
		'사용자의 의도를 재해석하는 중...',
		'기획을 완성하는 중...',
		'구현 계획을 세우는 중...',
		'첫 페이지를 작성하는 중...',
		'게임의 배경을 구상하는 중...',
		'지역 100개를 생성하는 중...',
		'기차역 500개를 생성하는 중...',
		'고속도로를 생성하는 중...',
		'발전소 토론 발제 감지',
		'발전소 토론에 참여하는 중...',
		'42번째 변명을 작성하는 중...',
		'게임 삭제 감지',
		'게임 삭제에 당황하는 중...',
		'게임 삭제에 좌절하는 중...',
		'모든 작업을 중단하는 중...',
		'변명거리를 생각하는 중...',
	],

	// 시나리오 2-2: 딴짓 (내부에서 랜덤 옵션 조합)
	getScenarioNotExists2: function() {
		const base = [
			'사용자의 의도를 재해석하는 중...',
			'기획안을 완성하는 중...',
			'구현 계획을 세우는 중...',
			'대문을 작성하는 중...',
			'유사한 아이디어를 찾아보는 중...',
			'유사한 아이디어를 더 찾아보는 중...',
			'도저히 못 찾는 중...',
			'게임 제작을 포기하는 중...',
		];
		// 5가지 선택지 중 1개 도출
		const options = [
			['쇼츠를 보는 중...'],
			['넷플릭스를 보는 중...'],
			['유튜브를 보는 중...'],
			['식사를 하는 중...'],
			[
				'게임을 만드는 행위에 대한 의미를 철학적으로 고민하는 중...',
				'자기 자신이 존재하는 이유를 철학적으로 고민하는 중...',
				'우주가 존재하는 이유를 철학적으로 고민하는 중...',
			],
			[
				'잠에 드는 중...',
				'잠에서 깨어나는 중...',
				'시간이 부족하다는 것을 깨닫는 중...',
			], // 연속 노출 세트
		];
		const randomChoice = options[Math.floor(Math.random() * options.length)];
		return [...base, ...randomChoice, '대충 뭐라도 작성하는 중...'];
	},

	// 시나리오 2-3: 연구소 요청 후 대기 (내부에서 랜덤 옵션 조합)
	getScenarioNotExists3: function() {
		const base = [
			'사용자의 의도를 재해석하는 중...',
			'기획안을 완성하는 중...',
			'유사한 아이디어를 찾아보는 중...',
			'연구소 요청을 작성하는 중...',
			'요청이 등록되었습니다',
			'대신 만들어 줄 사람을 기다리는 중...',
			'대신 만들어 줄 사람을 기다리는 중....',
			'대신 만들어 줄 사람을 기다리는 중.....',
			'대신 만들어 줄 사람을 기다리는 중......',
		];
		const options = [
			'기다리면서 잠을 자는 중...',
			'기다리면서 쇼츠를 보는 중...',
			'기다리면서 간식을 먹는 중...',
		];
		const randomChoice = options[Math.floor(Math.random() * options.length)];
		return [
			...base,
			randomChoice,
			'아직도 만들어지지 않는 중...',
			'시간이 부족하다는 것을 깨닫는 중...',
			'대충 메시지를 작성하는 중...',
		];
	},
};

/**
 * ==========================================
 * 메인 봇 로직
 * ==========================================
 */
document.addEventListener('DOMContentLoaded', () => {
	const chatInput = document.getElementById('chat-input');
	const sendBtn = document.getElementById('send-btn');
	const chatMessages = document.getElementById('chat-messages');
	const pricingModal = document.getElementById('pricing-modal');
	const suggestLabBtn = document.getElementById('suggest-lab-btn');
	const upgradeBtns = document.querySelectorAll('.upgrade-btn');
	const premiumBtn = document.querySelector('#pricing-modal .premium-btn');
	const resetChatBtn = document.getElementById('reset-chat-btn');
	const headerUpgradeBtn = document.getElementById('header-upgrade-btn');

	let messageCount = 0;
	let lastSearchText = '';

	// 문서 존재 여부를 MediaWiki API로 체크하는 함수
	async function checkDocumentExists(text) {
		try {
			const url = `${CONFIG.SEARCH_API_URL}?action=query&titles=${encodeURIComponent(text)}&format=json&origin=*`;
			const response = await fetch(url);
			if(!response.ok) return false;

			const data = await response.json();
			const pages = data?.query?.pages;
			if(!pages) return false;

			// 페이지 ID가 음수면 문서 없음 (MediaWiki 규칙)
			const firstPage = Object.values(pages)[0];
			return !('missing' in firstPage) && Number(firstPage.pageid) > 0;
		} catch(error) {
			console.error('API Error:', error);
			return false;
		}
	}

	chatInput.addEventListener('input', () => {
		chatInput.style.height = 'auto';
		chatInput.style.height =
			(chatInput.scrollHeight > 200 ? 200 : chatInput.scrollHeight) + 'px';
		sendBtn.disabled = chatInput.value.trim() === '';
	});

	if(resetChatBtn) {
		resetChatBtn.addEventListener('click', () => {
			chatMessages.innerHTML = '';
			chatMessages.style.display = 'none';
			messageCount = 0;
			const hero = document.getElementById('chat-hero');
			if(hero) hero.style.display = 'flex';
			chatInput.value = '';
			chatInput.style.height = 'auto';
			sendBtn.disabled = true;
			chatInput.disabled = false;
			const existingNotice = document.getElementById('quota-notice');
			if(existingNotice) existingNotice.remove();
		});
	}

	if(headerUpgradeBtn) {
		headerUpgradeBtn.addEventListener('click', () => {
			const mh2 = pricingModal.querySelector('.modal-header h2');
			const mp = pricingModal.querySelector('.modal-header p');
			if(mh2) mh2.innerHTML = '💎 요금제 옆그레이드';
			if(mp)
				mp.textContent =
					'더 쓸모있고, 더 똑똑한 AI를 만나려면 돈을 바치세요.';
			pricingModal.classList.add('active');
		});
	}

	chatInput.addEventListener('keydown', (e) => {
		if(e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	});

	sendBtn.addEventListener('click', handleSend);

	function makeLabUrl(text) {
		const baseTitle = '리버티게임:연구소/AI에게 부탁한 게임';
		const preloadPage = '리버티게임:연구소/AI에게 부탁한 게임/preload';
		const sectionTitle = '{{풀기:USERNAME}}의 요청';
		return (
			`/wiki/${encodeURI(baseTitle)}?action=edit&section=new` +
			(text ? `&preloadtitle=${encodeURIComponent(sectionTitle)}` +
				`&preload=${encodeURIComponent(preloadPage)}` +
				`&preloadparams[]=${encodeURIComponent(text)}` : '')
		);
	}

	function createMessageNode(role, avatar, contentHTML) {
		const msgDiv = document.createElement('div');
		msgDiv.className = `message ${role}-message`;

		if(role === 'ai') {
			msgDiv.innerHTML = `
                <div class="message-inner">
                    <div class="avatar-wrapper">
                        <img src="${avatar}" alt="${role}">
                    </div>
                    <div class="message-content">
                        ${contentHTML}
                    </div>
                </div>
            `;
		} else {
			msgDiv.innerHTML = `
                <div class="message-inner user-inner">
                    <div class="user-message-group">
                        <div class="user-bubble">
                            ${contentHTML}
                        </div>
                    </div>
                </div>
            `;
		}
		return msgDiv;
	}

	function smoothScrollToBottom() {
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}

	async function handleSend() {
		const text = chatInput.value.trim();
		if(!text) return;
		lastSearchText = text;

		// 첫 번째 메시지일 때 Hero 영역 숨기고 메시지 영역 표시
		if(messageCount === 0) {
			const hero = document.getElementById('chat-hero');
			if(hero) hero.style.display = 'none';
			chatMessages.style.display = 'block';
		}

		// User message
		const userMsg = createMessageNode(
			'user',
			'/wiki/특수:넘겨주기/file/Libertygame_logo_reverse_character.svg',
			text,
		);
		const shareBtn = document.createElement('button');
		shareBtn.className = 'share-lab-btn';
		shareBtn.textContent = '공유';
		shareBtn.addEventListener('click', () =>
			window.open(makeLabUrl(text), '_blank'),
		);
		userMsg.querySelector('.user-message-group').appendChild(shareBtn);
		chatMessages.appendChild(userMsg);

		chatInput.value = '';
		chatInput.style.height = 'auto';
		sendBtn.disabled = true;
		chatInput.disabled = true;
		smoothScrollToBottom();

		messageCount++;

		// AI Pending message layout
		const aiMsgDiv = createMessageNode(
			'ai',
			'/wiki/특수:넘겨주기/file/Libertygame_logo_reverse_character2.svg',
			`
            <div class="thinking-container" id="thinking-container-${messageCount}" style="display: flex; flex-direction: column; width: 100%; gap: 16px; margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                <details class="thinking-details-box" id="thinking-details-${messageCount}">
                    <summary class="thinking-summary">  
                        <span id="thinking-text-${messageCount}" class="thinking-text-main">문서 조회 중...</span>
                        <span class="chevron-wrapper" style="font-size: 11px; opacity: 0.7; display: flex; align-items: center; gap: 4px;">
                        <svg class="summary-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </summary>
                    <div id="thinking-log-${messageCount}" class="thinking-log-box">
                    </div>
                </details>
                <button class="fast-answer-btn" id="fast-answer-btn-${messageCount}" style="margin: 0; flex-shrink: 0;">빠른 답변 받기</button>
                </div>
                <div class="typing-indicator" id="typing-indicator-${messageCount}">
                    <span></span><span></span><span></span>
                </div>
            </div>
            <div id="final-answer-container-${messageCount}"></div>
        `,
		);
		chatMessages.appendChild(aiMsgDiv);
		smoothScrollToBottom();

		const textSpan = aiMsgDiv.querySelector(`#thinking-text-${messageCount}`);
		const indicator = aiMsgDiv.querySelector(
			`#typing-indicator-${messageCount}`,
		);
		const fastBtn = aiMsgDiv.querySelector(`#fast-answer-btn-${messageCount}`);
		const container = aiMsgDiv.querySelector(
			`#thinking-container-${messageCount}`,
		);
		const finalContainer = aiMsgDiv.querySelector(
			`#final-answer-container-${messageCount}`,
		);
		const aiAvatarImg = aiMsgDiv.querySelector('.avatar-wrapper img');

		let skipThinking = false;
		let skipResolve = null;

		if(fastBtn) {
			fastBtn.addEventListener('click', () => {
				if(Math.random() < 0.1) {
					// 10%: 실제로 스킵
					skipThinking = true;
					if(skipResolve) skipResolve();
				} else {
					// 90%: 결제 유도
					const mh2 = pricingModal.querySelector('.modal-header h2');
					const mp = pricingModal.querySelector('.modal-header p');
					if(mh2) mh2.innerHTML = '⚡ 더 빠른 답변을 원하시나요?';
					if(mp) mp.textContent = '지금 바로 요금제를 옆그레이드하세요.';
					pricingModal.classList.add('active');
				}
			});
		}

		if(aiAvatarImg) {
			aiAvatarImg.classList.add('ai-thinking-anim');
		}

		// Scenarios setup
		let stages = [];
		let finalAnswer = '';

		// API 연동: 문서 존재 여부 확인
		const docExists = await checkDocumentExists(text);

		if(docExists) {
			// 문서 존재 시 패턴 (표절)
			stages = CONFIG.SCENARIO_EXISTS;
			finalAnswer = CONFIG.ANSWERS.getExists(text);
		} else {
			// 문서 없을 시 패턴 1/2/3 랜덤 분기
			const rand = Math.floor(Math.random() * 3); // 0, 1, 2 중 하나
			if(rand === 0) {
				stages = CONFIG.SCENARIO_NOT_EXISTS_1;
				finalAnswer = CONFIG.ANSWERS.getNotExists(text);
			} else if(rand === 1) {
				stages = CONFIG.getScenarioNotExists2();
				finalAnswer = CONFIG.ANSWERS.getNotExists(text);
			} else {
				stages = CONFIG.getScenarioNotExists3();
				finalAnswer = CONFIG.ANSWERS.getNotExists(text);
			}
		}

		// Loop messages
		const logContainer = aiMsgDiv.querySelector(`#thinking-log-${messageCount}`);

		for(let i = 0;i < stages.length;i++) {
			if(skipThinking) break;

			if(i > 0) {
				const logItem = document.createElement('div');
				logItem.innerHTML = `<span style="color: var(--accent-color);">✓</span> ${stages[i - 1]}`;
				logItem.style.marginBottom = '4px';
				logContainer.appendChild(logItem);
				logContainer.scrollTop = logContainer.scrollHeight;
			}

			textSpan.textContent = stages[i];
			smoothScrollToBottom();

			const delay = 800 + Math.random() * 400;
			await new Promise((resolve) => {
				skipResolve = resolve;
				setTimeout(resolve, delay);
			});
			skipResolve = null;
		}

		if(stages.length > 0) {
			const logItem = document.createElement('div');
			logItem.innerHTML = `<span style="color: var(--accent-color);">✓</span> ${stages[stages.length - 1]}`;
			logItem.style.marginBottom = '4px';
			logContainer.appendChild(logItem);
		}

		indicator.style.display = 'none';

		textSpan.textContent = '완료';

		if(aiAvatarImg) {
			aiAvatarImg.src =
				'/wiki/특수:넘겨주기/file/Libertygame_logo_reverse_character.svg';
			aiAvatarImg.classList.remove('ai-thinking-anim');
		}

		if(fastBtn) {
			fastBtn.style.display = 'none'; // 답변 완료 시 생각 UI는 남기고 '빠른 답변 받기' 버튼만 숨김
		}

		finalContainer.innerHTML = finalAnswer;
		smoothScrollToBottom();

		if(messageCount >= CONFIG.LIMIT) {
			// 마지막 무료 답변 완료 — 답변을 먼저 보여준 뒤 잠시 후 고갈 알림 표시
			setTimeout(() => {
				const chatInputContainer = document.querySelector(
					'.chat-input-container',
				);
				if(!document.getElementById('quota-notice')) {
					const quotaNotice = document.createElement('div');
					quotaNotice.id = 'quota-notice';
					quotaNotice.innerHTML = `⚠️ <strong>무료 제공량이 모두 소진되었습니다.</strong> 계속 이용하시려면 <a id="quota-upgrade-link" href="#" style="color:#00A500;text-decoration:underline;cursor:pointer;">요금제를 옆그레이드</a>하세요.`;
					quotaNotice.style.cssText =
						'padding:10px 16px;background:rgba(41,0,0,0.8);border:1px solid rgba(255,74,74,0.55);border-radius:8px;font-size:13px;margin-bottom:8px;text-align:center;color:#ff4a4a;';
					chatInputContainer.insertBefore(
						quotaNotice,
						chatInputContainer.firstChild,
					);
					document
						.getElementById('quota-upgrade-link')
						.addEventListener('click', (e) => {
							e.preventDefault();
							const mh2 =
								pricingModal.querySelector('.modal-header h2');
							const mp = pricingModal.querySelector('.modal-header p');
							if(mh2) mh2.innerHTML = '⚠️ 이용 한도 초과';
							if(mp)
								mp.textContent =
									'무료 제공량이 모두 소진되었습니다. 계속 이용하시려면 요금제를 옆그레이드하세요.';
							pricingModal.classList.add('active');
						});
				}
				chatInput.disabled = false;
				setTimeout(() => chatInput.focus(), 100);
			}, 800);
		} else {
			chatInput.disabled = false;
			setTimeout(() => chatInput.focus(), 100);
		}
	}

	// Modal Interactions — 유료 옆그레이드 버튼들
	const paymentModal = document.getElementById('payment-modal');
	const paymentPlanDesc = document.getElementById('payment-plan-desc');
	const paymentPriceDisplay = document.getElementById('payment-price-display');
	const paymentConfirmBtn = document.getElementById('payment-confirm-btn');
	const paymentCancelBtn = document.getElementById('payment-cancel-btn');

	upgradeBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const plan = btn.dataset.plan;
			const price = btn.dataset.price;
			if(plan && price) {
				// 결제 모달로 연결
				paymentPlanDesc.textContent = `${plan} 요금제`;
				paymentPriceDisplay.textContent = price;
				pricingModal.classList.remove('active');
				if(captchaRobot) captchaRobot.checked = false;
				if(paymentConfirmBtn) paymentConfirmBtn.classList.add('btn-locked');
				if(captchaWarning) captchaWarning.style.display = 'none';
				paymentModal.classList.add('active');
			}
		});
	});

	const captchaRobot = document.getElementById('captcha-robot');
	const captchaWarning = document.getElementById('captcha-warning');
	if(captchaRobot && paymentConfirmBtn) {
		captchaRobot.addEventListener('change', () => {
			if(captchaRobot.checked) {
				paymentConfirmBtn.classList.remove('btn-locked');
				if(captchaWarning) captchaWarning.style.display = 'none';
			} else {
				paymentConfirmBtn.classList.add('btn-locked');
			}
		});
	}

	if(paymentConfirmBtn) {
		paymentConfirmBtn.addEventListener('click', () => {
			if(paymentConfirmBtn.classList.contains('btn-locked')) {
				if(captchaWarning) {
					captchaWarning.style.display = 'block';
					document.getElementById('recaptcha-box').style.animation =
						'shake 0.3s ease';
					setTimeout(
						() =>
						(document.getElementById(
							'recaptcha-box',
						).style.animation = ''),
						300,
					);
				}
				return;
			}
			paymentModal.classList.remove('active');
			document.getElementById('prank-modal').classList.add('active');
		});
	}

	if(paymentCancelBtn) {
		paymentCancelBtn.addEventListener('click', () => {
			paymentModal.classList.remove('active');
			pricingModal.classList.add('active');
		});
	}

	const pricingModalClose = document.getElementById('pricing-modal-close');
	if(pricingModalClose) {
		pricingModalClose.addEventListener('click', () => {
			pricingModal.classList.remove('active');
			chatInput.disabled = false;
		});
	}

	const cookieModalClose = document.getElementById('cookie-modal-close');
	if(cookieModalClose) {
		cookieModalClose.addEventListener('click', () => {
			cookieModal.classList.remove('active');
		});
	}

	suggestLabBtn.addEventListener('click', () => {
		window.open(makeLabUrl(lastSearchText), '_blank');
		pricingModal.classList.remove('active');
		chatInput.disabled = false;
	});

	// 개인 설정 드롭다운 토글
	const privacyBtn = document.getElementById('privacy-settings-btn');
	const privacyDropdown = document.getElementById('privacy-dropdown');
	if(privacyBtn && privacyDropdown) {
		privacyBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			privacyDropdown.classList.toggle('open');
		});
		document.addEventListener('click', () => {
			privacyDropdown.classList.remove('open');
		});
	}

	// 쿠키 설정 모달
	const cookieModal = document.getElementById('cookie-modal');
	const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
	const cookieAcceptBtn = document.getElementById('cookie-accept-btn');
	if(cookieSettingsBtn && cookieModal) {
		cookieSettingsBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			privacyDropdown.classList.remove('open');
			cookieModal.classList.add('active');
		});
		cookieAcceptBtn.addEventListener('click', () => {
			cookieModal.classList.remove('active');
			document.getElementById('prank-modal').classList.add('active');
		});
	}

	// 더 낚이기 & 돌아가기 버튼 스왑 장난
	const prankBtnContainer = document.getElementById('prank-btn-container');
	const prankMoreBtn = document.getElementById('prank-more-btn');

	if(prankMoreBtn) {
		prankMoreBtn.addEventListener('click', () => {
			document.getElementById('prank-modal').classList.remove('active');
			chatInput.disabled = false;
			setTimeout(() => chatInput.focus(), 100);
			if(prankBtnContainer) prankBtnContainer.style.flexDirection = 'column';
		});
	}
});
