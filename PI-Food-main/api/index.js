//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Diet } = require('./src/db.js');

//const dietas = [{name:"gluten free"},{name:"paleolithic"}, {name:"vegetarian"}, {name:"lacto ovo vegetarian"}, {name:"vegan"}, {name:"pescatarian"}, {name:"primal"}, {name:"whole 30"}, {name:"fodmap friendly"},{ name:"dairyFree"}];
// Syncing all the models at once.
conn.sync({force:false}).then(() => {
  server.listen(3001, () => {
  })
  console.log('%s listening at 3001'); // eslint-disable-line no-console
  // let a = async () => await diet.findAll();
  // console.log(a);
  // const dietas = ["gluten free","paleolithic", "vegetarian", "lacto ovo vegetarian","vegan","pescatarian","primal","whole 30", "fodmap friendly","dairyFree"];
  //        dietas.forEach(async (element) => await Diet.create({name: element}));
    console.log('Tipos de dieta pre-cargadas')

  });

