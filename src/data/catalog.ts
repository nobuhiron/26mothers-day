export interface RankingItem {
  rank: number;
  name: string;
  lead: string | null;
  description: string;
  price: string;
}

export interface BrandCard {
  reason: string;
  title: string;
  description: string;
  cta: string | null;
}

export interface TimeSceneProduct {
  name: string;
  price: string;
  description: string;
}

export interface PriceBandItem {
  name: string;
  price: string;
  description: string;
}

export interface PriceBand {
  id: string;
  label: string;
  labelEn: string;
  arch: string;
  items: PriceBandItem[];
}

export const RANKING_ITEMS: RankingItem[] = [
  {
    rank: 1,
    name: 'スイーツお試しセット',
    lead: '（母の日限定box）',
    description:
      '森半のスイーツを初めてご利用の方に、人気の3種を詰め合わせたお試しセットです。',
    price: '2,268',
  },
  {
    rank: 2,
    name: 'CHASTA（チャスタ）・\nISSEN［10P入り］ギフトセット',
    lead: null,
    description:
      '日常を整える、とっておきの急須時間を。届いてすぐに五感で楽しめます。',
    price: '5,390',
  },
  {
    rank: 3,
    name: '森半\nお茶屋のスイーツ満足セット',
    lead: null,
    description: '人気の抹茶スイーツが8種類入った詰め合わせ。',
    price: '5,508',
  },
];

export const BRAND_CARDS: BrandCard[] = [
  {
    reason: 'Reason 01',
    title: '森半のブランドについて',
    description:
      '天保7年(1836年)、宇治小倉に創業した森半。古くから新しい事に挑戦する精神を持ち、昭和初期には現在の水出し緑茶の元祖である「氷茶」や関西のご当地ドリンクである「グリーンティー」の販売を開始しました。その後も日本緑茶初のハイバキューム缶詰、世界初の泡立つ抹茶オーレの製造・販売、お茶のテーマパーク「TEASQUARE MORIHAN」をオープンするなど、今もなお革新的創造に挑戦する精神は引き継がれています。',
    cta: '森半について詳しく見る',
  },
  {
    reason: 'Reason 02',
    title: '確かな品質',
    description:
      '安定した品質を提供できるよう、熟練した茶師達により、茶葉の色・形・風味・味を鑑別する官能検査を製造ロット毎に実施しています。それに加え、さまざまな設備・技術を利用した細菌検査や理化学検査を実施しています。\n\n人間の五感と科学的根拠の両面から「信頼」され「安心」いただける商品作りをサポートし、日々の品質改善・向上にむけた取り組みを行っています。',
    cta: null,
  },
  {
    reason: 'Reason 03',
    title: 'お茶のある暮らし',
    description:
      '日常のひとときを特別な時間に変えるお茶の力。森半は、お茶を通じて心豊かな暮らしを提案し続けています。',
    cta: null,
  },
];

export const TIME_SCENE_PRODUCTS: TimeSceneProduct[] = [
  {
    name: 'CHASTA（チャスタ）＆\n森半八十八夜（玉露・煎茶）',
    price: '5,500',
    description: '家事がひと段落した午前中。\n自分のためだけに丁寧にお茶を\n淹れる贅沢なひとときを',
  },
  {
    name: 'おけいこ用抹茶＆\n日本茶パウダー（煎茶・ほうじ茶）',
    price: '5,500',
    description: 'お菓子作りが趣味のおかあさんへ。\n好きを深める時間を',
  },
  {
    name: '抹茶くるる＆\n森半 ＜五香（ごこう）＞\n煎茶［100g袋入り］',
    price: '5,500',
    description: '心がほどけるリラックスタイム。\n美味しいお菓子とお茶で\n会話や心が弾む昼下がりを',
  },
  {
    name: 'CHASTA（チャスタ）＆鳳春',
    price: '5,500',
    description: '背筋がのびる、凛とした時間。\n夕暮れの静けさの中で、\n抹茶の香りとともに心を整えるひとときを。',
  },
  {
    name: '黒豆ルイボスティー＆\n抹茶くるる',
    price: '5,500',
    description: 'ねぎらう、オフの時間。\nノンカフェインのお茶と抹茶のお菓子で、\nやさしくほどける夜のひとときを。',
  },
];

export const PRICE_BANDS: PriceBand[] = [
  {
    id: 'band-1',
    label: '1,000円〜1,999円',
    labelEn: '1000 yen - 1999 yen',
    arch: '/ashirai-1000.svg',
    items: [
      {
        name: 'MINTON（ミントン）＜ティーバッグ＞ 和紅茶 3箱ギフトセット（京・苺・白桃）',
        price: '1,620',
        description: 'テーブルの貴婦人といわれる本格英国紅茶「MINTON（ミントン）」の"和紅茶"です。',
      },
      {
        name: 'KFK（カフカ）COFFEE MEETS MILK カフェインレス ホンジュラス［18g×6P］',
        price: '1,500',
        description: 'ミルクさえあれば簡単に濃厚でなめらかなミルクコーヒーが抽出できるのでお家CAFÉにはぴったりです。',
      },
      {
        name: '森半 クリームサンド ヴァッフェル（抹茶・ほうじ茶）詰合せ［各5個入り］',
        price: '1,990',
        description: '茶師が厳選した人気のスイーツでお茶の時間をぐっと豊かに。',
      },
    ],
  },
  {
    id: 'band-2',
    label: '2,000円〜3,999円',
    labelEn: '2000 yen - 3999 yen',
    arch: '/ashirai-2000.svg',
    items: [
      {
        name: 'KFK（カフカ）＜ドリップコーヒー＞ロマンスコーヒーセレクション ギフトセット［ガラパゴス／エチオピア 各10g×5P入り］',
        price: '2,268',
        description: '焙煎、鮮度、品質にこだわった人の心を魅了するワンランク上のコーヒーのギフトセットです。',
      },
      {
        name: '森半 宇治産 手摘み抹茶［30g缶入り］',
        price: '3,780',
        description: '京の現代名工で「宇治にこの人あり」と称される名人 吉田利一氏の茶園で手摘みされた茶葉を丁寧に石臼で挽き上げました。',
      },
      {
        name: '森半 銘茶五香（ごこう）煎茶・抹茶カステラ詰合せ（WG-3）',
        price: '2,945',
        description: 'ティータイムのお供に上級の抹茶をたっぷり使って焼き上げた極上の手作り抹茶カステラとご一緒に。',
      },
    ],
  },
  {
    id: 'band-3',
    label: '4,000円〜5,999円',
    labelEn: '4000 yen - 5999 yen',
    arch: '/ashirai-4000.svg',
    items: [
      {
        name: '森半 お茶屋のスイーツ満足セット',
        price: '5,508',
        description: '抹茶スイーツが8種類入った詰め合わせ。ご自宅用はもちろん、ご進物にも最適です。',
      },
      {
        name: 'KFK（カフカ）＜ドリップバッグ＞ コーヒーギフトボックス 40PG 七宝つなぎ［40個入り］',
        price: '4,698',
        description: '厳選ドリップコーヒーが全種類が入ったバラエティー豊かなギフトセットは贈り物に最適！',
      },
      {
        name: '森半 くつろぎ 五感で味わう急須 CHASTA（チャスタ）・五香（ごこう）煎茶［120g缶入り］',
        price: '4,980',
        description: '厳選茶葉のみをブレンドして仕上げた「五香（ごこう）」シリーズの煎茶と五感で味わう急須「CHASTA（チャスタ）」の詰め合わせ。',
      },
    ],
  },
  {
    id: 'band-4',
    label: '6,000円〜',
    labelEn: '6000 yen -',
    arch: '/ashirai-6000.svg',
    items: [
      {
        name: '森半 宇治茶詰め合わせ［玉露／国の誉 120g缶、初摘煎茶 120g缶、雁が音／鷹が峰 100g缶］',
        price: '7,731',
        description: '全国茶審査技術大会で2度の優勝を誇る茶師が、自信を持ってお勧めする玉露と煎茶、雁が音（茎茶）のギフトセットです。',
      },
      {
        name: '森半 ＜宇治＞ 名品銘茶詰め合わせ（国松 100R）',
        price: '10,800',
        description: '森半の茶師が贈る逸品。玉露の甘み、煎茶の清涼感。極上の日本茶をあの方へ。',
      },
      {
        name: '茶缶「開化堂 真鍮茶筒 100g」',
        price: '23,100',
        description: 'ひとつひとつ丁寧に手作りされた茶筒は、素材である真鍮（しんちゅう）の風合いを楽しんでいただける生地物で、使い込むほどにその表情を変化させていきます。',
      },
    ],
  },
];
