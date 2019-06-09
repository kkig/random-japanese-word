/* Kanxi of first year of elementary school Level */
let library = [
  {
    word: '一',
    translation: 'One'
  },
  {
    word: '右',
    translation: 'Right'
  },
  {
    word: '雨',
    translation: 'Rain'
  },
  {
    word: '円',
    translation: 'Circle'
  },
  {
    word: '王',
    translation: 'King'
  },
  {
    word: '音',
    translation: 'Sound'
  },
  {
    word: '下',
    translation: 'Under'
  },
  {
    word: '火',
    translation: 'Fire'
  },
  {
    word: '花',
    translation: 'Flower'
  },
  {
    word: '貝',
    translation: 'Shellfish'
  },
  {
    word: '学',
    translation: 'Learn'
  },
  {
    word: '気',
    translation: 'Mood'
  },
  {
    word: '九',
    translation: 'Nine'
  },
  {
    word: '休',
    translation: 'Rest'
  },
  {
    word: '玉',
    translation: 'Ball'
  },
  {
    word: '金',
    translation: 'Gold / Money'
  },
  {
    word: '空',
    translation: 'Sky / Empty'
  },
  {
    word: '月',
    translation: 'Moon / Month'
  },
  {
    word: '犬',
    translation: 'Dog'
  },
  {
    word: '見',
    translation: 'See'
  },
  {
    word: '五',
    translation: 'Five'
  },
  {
    word: '口',
    translation: 'Mouse'
  },
  {
    word: '校',
    translation: '(School)'
  },
  {
    word: '空',
    translation: 'Sky / Empty'
  },
  {
    word: '左',
    translation: 'Left'
  },
  {
    word: '三',
    translation: 'Three'
  },
  {
    word: '山',
    translation: 'Mountain'
  },
  {
    word: '子',
    translation: 'Child'
  },
  {
    word: '四',
    translation: 'Four'
  },
  {
    word: '糸',
    translation: 'Thread'
  },
  {
    word: '字',
    translation: 'Characters / letter of language'
  },
  {
    word: '耳',
    translation: 'Ear'
  },
  {
    word: '七',
    translation: 'Seven'
  },
  {
    word: '車',
    translation: 'Car'
  },
  {
    word: '手',
    translation: 'Hand'
  },
  {
    word: '十',
    translation: 'Ten'
  },
  {
    word: '出',
    translation: 'Out'
  },
  {
    word: '女',
    translation: 'Woman'
  },
  {
    word: '小',
    translation: 'Small'
  },
  {
    word: '上',
    translation: 'Above'
  },
  {
    word: '森',
    translation: 'Forest'
  },
  {
    word: '人',
    translation: 'people'
  },
  {
    word: '水',
    translation: 'Water'
  },
  {
    word: '正',
    translation: '(Being correct)'
  },
  {
    word: '生',
    translation: 'Life / Not cooked'
  },
  {
    word: '青',
    translation: 'Blue'
  },
  {
    word: '夕',
    translation: 'Evening'
  },
  {
    word: '石',
    translation: 'Stone'
  },
  {
    word: '赤',
    translation: 'Red'
  },
  {
    word: '千',
    translation: 'Thousand'
  },
  {
    word: '川',
    translation: 'River'
  },
  {
    word: '先',
    translation: 'Going beyond / Edge of something sharp'
  },
  {
    word: '早',
    translation: 'Early'
  },
  {
    word: '草',
    translation: 'Grass'
  },
  {
    word: '足',
    translation: 'Foot'
  },
  {
    word: '村',
    translation: 'Village'
  },
  {
    word: '大',
    translation: 'Large'
  },
  {
    word: '男',
    translation: 'Man'
  },
  {
    word: '竹',
    translation: 'Bamboo'
  },
  {
    word: '中',
    translation: 'Medium / Inside'
  },
  {
    word: '虫',
    translation: 'Insect'
  },
  {
    word: '町',
    translation: 'Town'
  },
  {
    word: '天',
    translation: 'Sky(religious)'
  },
  {
    word: '田',
    translation: 'Rice field'
  },
  {
    word: '土',
    translation: 'Soil'
  },
  {
    word: '二',
    translation: 'Two'
  },
  {
    word: '日',
    translation: 'Day / (Sunshine)'
  },
  {
    word: '入',
    translation: 'Go inside'
  },
  {
    word: '年',
    translation: 'Year'
  },
  {
    word: '白',
    translation: 'White'
  },
  {
    word: '八',
    translation: 'Eight'
  },
  {
    word: '百',
    translation: 'Hundred'
  },
  {
    word: '文',
    translation: 'Sentence'
  },
  {
    word: '木',
    translation: 'Tree'
  },
  {
    word: '本',
    translation: 'Book'
  },
  {
    word: '名',
    translation: 'Name'
  },
  {
    word: '目',
    translation: 'Eye'
  },
  {
    word: '立',
    translation: 'Stand'
  },
  {
    word: '力',
    translation: 'Power'
  },
  {
    word: '林',
    translation: 'Woods'
  },
  {
    word: '六',
    translation: 'Six'
  }
];

const word = document.querySelector('.word');
const answer = document.querySelector('.answer');
const button = document.querySelector('#button');

button.onclick = e => {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * library.length);

  word.innerHTML = library[randomNumber].word;
  answer.innerHTML = library[randomNumber].translation;
};
