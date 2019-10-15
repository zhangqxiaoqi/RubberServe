const fs = require('fs');
const config = require('../config/config');

module.exports = class extends think.Controller {
  async uploadAction() {
    if (!think.isEmpty(this.file('uploadFile'))) {
      // 进行压缩等处理
      const file = think.extend({}, this.file('uploadFile'));
      // 保存文件的路径
      const savepath = think.ROOT_PATH + '/www/static/uploading/';
      const filepath = file.path; // 文件路径
      const filename = file.name; // 文件名
      const suffix = filename.substr(filename.lastIndexOf('.') + 1); // 文件后缀
      const newfilename =
        Math.random()
          .toString(36)
          .substr(2) +
        '.' +
        suffix;

      // 读文件
      const datas = fs.readFileSync(filepath);
      // 写文件
      fs.writeFileSync(savepath + newfilename, datas);
      const dbPath = `${config.sitDomain}/static/uploading/${newfilename}`;
      return this.json({
        code: 200,
        data: {
          name: newfilename,
          status: 'done',
          url: dbPath,
          thumbUrl: dbPath
        }
      });
    }
  }
};
