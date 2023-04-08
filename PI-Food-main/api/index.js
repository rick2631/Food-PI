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

// Syncing all the models at once.
const dietas = [{name:"gluten free"},{name:"paleolithic"}, {name:"vegetarian"}, {name:"lacto ovo vegetarian"}, {name:"vegan"}, {name:"pescatarian"}, {name:"primal"}, {name:"whole 30"}, {name:"fodmap friendly"},{ name:"dairyFree"}];
conn.sync({force:true}).then(async()=>{await Diet.bulkCreate(dietas);
}) .then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
      // let a = async () => await diet.findAll();
     // console.log(a);
     
    console.log('Tipos de dieta pre-cargadas')

  });
});
