// ESM(ECMAScript modules) - 브라우저 동작, Node modules 지원 X
// ESM - import, export

// CommonJS - Node modules 지원
// CommonJS - require, module.exports

// 가져오기
// import autoprefixer from './autoprefixer'

// 내보내기
/* exports {
      plugins: [
        autoprefixer
    ]
  }
*/
module.exports = {
  plugins: [require('autoprefixer')],
};
