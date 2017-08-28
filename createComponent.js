/* eslint-disable no-console,consistent-return,no-shadow,no-use-before-define,global-require,import/no-extraneous-dependencies */
// Генератор файлов блока

// Использование: node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');
const projectConfig = require('./projectConfig.json');

const dirs = projectConfig.dirs;
const mkdirp = require('mkdirp');

const blockName = process.argv[2];          // получим имя блока
const defaultExtensions = ['less', 'pug', 'vue', 'js']; // расширения по умолчанию
// добавим введенные при вызове расширения (если есть)
const extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));
// Если есть имя блока
if (blockName) {
  const dirPath = `${dirs.srcPath}${dirs.blocksDirName}/${blockName}/`; // полный путь к создаваемой папке блока
  mkdirp(dirPath, (err) => { // создаем
    // Если какая-то ошибка — покажем
    if (err) {
      console.error(`[NTH] Отмена операции: ${err}`);
    } else { // Нет ошибки, поехали!
      console.log(`[NTH] Создание папки ${dirPath} (если отсутствует)`);

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach((extention) => {
        const filePath = `${dirPath}${blockName}.${extention}`; // полный путь к создаваемому файлу
        let fileContent = '';                                 // будущий контент файла
        let fileCreateMsg = '';                               // будущее сообщение в консоли при создании файла

        // Если это LESS
        if (extention === 'less') {
          fileContent = '@import \'../../assets/less/variables.less\';';
          // fileCreateMsg = '';

          // Добавим созданный файл
          let hasThisBlock = false;
          for (const block in projectConfig.blocks) {
            if (block === blockName) {
              hasThisBlock = true;
              break;
            }
          }
          if (!hasThisBlock) {
            projectConfig.blocks[blockName] = [];
            const newPackageJson = JSON.stringify(projectConfig, '', 2);
            fs.writeFileSync('./projectConfig.json', newPackageJson);
            fileCreateMsg = '[NTH] Подключение блока добавлено в projectConfig.json';
          }
        } else if (extention === 'pug') { // Если это PUG
          fileContent = `div
  | content\n`;
        } else if (extention === 'vue') { // Если это VUE
          fileContent = `<template lang="pug" src="./${blockName}.pug"></template>
<style lang="less" src="./${blockName}.less"></style>
<script src="./${blockName}.js"></script>
`;
        } else if (extention === 'js') { // Если это JS
          fileContent = `export default {
  name: '${blockName}',
  components: {
  },
  props: {
  },
  data() {
  },
  computed: {
  },
  filters: {
  },
  methods: {
  },
};
`;
        } else if (extention === 'img') { // Если нужна подпапка для картинок
          const imgFolder = `${dirPath}img/`;
          if (fileExist(imgFolder) === false) {
            mkdirp(imgFolder, (err) => {
              if (err) console.error(err);
              else console.log(`[NTH] Создание папки: ${imgFolder} (если отсутствует)`);
            });
          } else {
            console.log(`[NTH] Папка ${imgFolder} НЕ создана (уже существует)`);
          }
        }

        // Создаем файл, если он еще не существует
        if (fileExist(filePath) === false && extention !== 'img') {
          fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
              return console.log(`[NTH] Файл НЕ создан: ${err}`);
            }
            console.log(`[NTH] Файл создан: ${filePath}`);
            if (fileCreateMsg) {
              console.warn(fileCreateMsg);
            }
          });
        } else if (extention !== 'img') {
          console.log(`[NTH] Файл НЕ создан: ${filePath} (уже существует)`);
        }
      });
    }
  });
} else {
  console.log('[NTH] Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  const objectTemp = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
}
