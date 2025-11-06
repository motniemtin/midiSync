const cpr = require('cpr');
const path = require('path');
const fs = require('fs');

const source = path.resolve(__dirname, '../node_modules/@coderline/alphatab/dist');
const destination = path.resolve(__dirname, '../public/alphatab');

console.log('Copying AlphaTab assets...');

// Đảm bảo thư mục đích tồn tại
fs.mkdirSync(destination, { recursive: true });

cpr(source, destination, {
  deleteFirst: true, // Xóa thư mục đích trước khi sao chép
  overwrite: true,
  confirm: true
}, (err, files) => {
  if (err) {
    return console.error('Error copying AlphaTab assets:', err);
  }
  console.log(`Successfully copied ${files.length} AlphaTab assets.`);
});