Script generate id 64bit for a record in database (Script sinh id 64bit cho 1 bản ghi trong database).
From this tutorial: https://nghethuatcoding.com/2019/05/19/instagram-da-sinh-ra-id-trong-database-cua-ho-nhu-the-nao/

I) Installation (Cài đặt tool)
* Download: Download ZIP file or use this command (Tải file zip hoặc dùng lệnh sau):
```
git clone https://github.com/Long2k1708/id_64bit_generator_for_db.git
```

* Run npm installation (Chạy trình cài thư viện npm):
```
cd id_64bit_generator_for_db
npm i
```

* Execute the script (Thực thi script):
```
node index.js
```

II) How to use (Cách sử dụng)
* This script contains 2 functions (Script này chứa 2 hàm)
```
encodeId(timeInMillis, shardId, seqId); //Generate ID (Sinh id)
decodeId(idEncoded); //Decode and get information from idEncoded (Giải mã và lấy thông tin từ id)
```

* Open `index.js` and change your value in line 18, then run `node index.js`. You will get the result from console.
(Mở file `index.js` và chỉnh giá trị của bạn ở dòng 18 và chạy `node index.js`. Bạn sẽ lấy được kết quả từ console)