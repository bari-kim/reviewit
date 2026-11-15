export const products = [
  {id:'tumbler',name:'매일 함께하는 텀블러',brand:'오브젝트 데일리',price:24000,rating:'4.8',count:128,category:'생활',tag:'일상의 작은 변화',color:'#E9EEE9',art:'tumbler',description:'가방에 가볍게, 책상 위에 단정하게. 따뜻한 커피부터 시원한 물까지 하루를 함께하는 500ml 텀블러.'},
  {id:'headphones',name:'나만의 시간을 위한 헤드폰',brand:'무드 사운드',price:89000,rating:'4.9',count:86,category:'디지털',tag:'몰입이 필요한 순간',color:'#EEEAF5',art:'headphones',description:'가벼운 착용감과 포근한 이어패드. 일할 때도, 쉬어갈 때도 좋아하는 소리에 집중해 보세요.'},
  {id:'cream',name:'편안한 하루 핸드크림',brand:'온유',price:16000,rating:'4.7',count:64,category:'뷰티',tag:'나를 위한 작은 쉼',color:'#F8EBE4',art:'cream',description:'건조한 손에 부드럽게 스며드는 데일리 핸드크림. 은은한 향으로 일상에 작은 쉼을 더해보세요.'},
  {id:'coffee',name:'느긋한 아침 드립백',brand:'슬로우 모닝',price:12500,rating:'4.8',count:92,category:'푸드',tag:'좋은 하루의 시작',color:'#F3EEDC',art:'coffee',description:'따뜻한 물만 있으면 어디서든 즐기는 한 잔. 부담 없는 산미와 고소한 여운의 드립백 8개입.'}
];
export const initialState = {reviews:[],ads:[],saved:[]};
export function reviewErrors({rating,body,proof,consent}) {const errors={};if(!Number.isInteger(Number(rating))||rating<1||rating>5)errors.rating='별점을 선택해 주세요.';if((body||'').trim().length<20)errors.body='사용 경험을 20자 이상 작성해 주세요.';if(!proof)errors.proof='구매 인증 자료를 첨부해 주세요.';if(!consent)errors.consent='자료 검토 안내를 확인하고 동의해 주세요.';return errors;}
export function submitReview(state, data, id) {const errors=reviewErrors(data);if(state.reviews.some(r=>r.productId===data.productId&&!['rejected'].includes(r.status)))errors.duplicate='이 상품의 리뷰가 이미 제출되어 있어요. 마이에서 검토 상태를 확인해 주세요.';if(Object.keys(errors).length)return {errors};return {state:{...state,reviews:[{id,productId:data.productId,rating:Number(data.rating),body:data.body.trim(),status:'pending',points:500,date:new Date().toISOString()},...state.reviews]}};}
export function reviewTransition(state,id,status){if(!['approved','rejected','revision','pending'].includes(status))return state;return {...state,reviews:state.reviews.map(r=>r.id===id?{...r,status}:r)};}
export const balance = state => state.reviews.filter(r=>r.status==='approved').reduce((n,r)=>n+r.points,0);
export const expected = state => state.reviews.filter(r=>r.status==='pending').reduce((n,r)=>n+r.points,0);
export function filterProducts(query='',category='전체'){return products.filter(p=>(category==='전체'||p.category===category)&&`${p.name} ${p.brand}`.includes(query.trim()));}
export function fileError(file){if(!file)return '파일을 선택해 주세요.';if(!['image/jpeg','image/png','image/webp','application/pdf'].includes(file.type))return 'JPG, PNG, WEBP 또는 PDF 파일을 선택해 주세요.';if(file.size>5*1024*1024)return '5MB 이하 파일을 선택해 주세요.';return '';}
