import React, { useState } from "react";
import './Man_hinh.css';
import Mon_an from "../Mon_an/Mon_an";
let tenMon = [
    //SALAD
    {ten: 'シーザーサラダ' , tenOdder: 'シーザー (S)', tenTV: 'chưa ghi', soLanDung: 0, soLanXH: 1},
    {ten: 'ポテサラあじたまのせい',  tenOdder: 'ポテ (S)', tenTV: 'salad khoai tây trứng muối', soLanDung: 0, soLanXH: 1 },
    {ten: 'ラーユサラダ',  tenOdder: 'ラー (S)', tenTV: 'salad gà', soLanDung: 0, soLanXH: 1},
    {ten: 'とふサラダ' , tenOdder: 'とふ (S)', tenTV: 'salad đậu phụ', soLanDung: 0, soLanXH: 1},
    {ten: 'サーモンサラダ' , tenOdder: 'サーモン (S)', tenTV: 'salad cá hồi', soLanDung: 0, soLanXH: 1},
    {ten: 'パリパリいもサラダ' , tenOdder: 'パリ (S)', tenTV: 'salad khoai tây trứng nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'カイセンサラダ' , tenOdder: 'カイセン (S)', tenTV: 'salad hải sản', soLanDung: 0, soLanXH: 1},
    {ten: 'わかねサラダ' , tenOdder: 'わかね (S)', tenTV: 'salad rong biển trứng cua', soLanDung: 0, soLanXH: 1},
    //MÓN KHAI VỊ (otsumami)
    {ten: 'おつまみうずら' , tenOdder: 'うずら', tenTV: 'trứng cút muối', soLanDung: 0, soLanXH: 1},
    {ten: 'とりかわポンズ' , tenOdder: 'とりポン', tenTV: 'da gà nhúng sốt bonzu', soLanDung: 0, soLanXH: 1},
    {ten: 'ひやしトマト' , tenOdder: 'トマト', tenTV: 'cà chua giảm nhiệt', soLanDung: 0, soLanXH: 1},
    {ten: 'えだまめ' , tenOdder: 'まめ', tenTV: 'đậu nành luộc', soLanDung: 0, soLanXH: 1},
    {ten: 'みそずけフリームチズ' , tenOdder: 'みそチ', tenTV: 'phô mai sốt miso', soLanDung: 0, soLanXH: 1},
    {ten: 'キノコマリネ' , tenOdder: 'マリネ', tenTV: 'nắm muối chua', soLanDung: 0, soLanXH: 1},
    {ten: 'いかのしおから' , tenOdder: 'しおから', tenTV: 'mực muối', soLanDung: 0, soLanXH: 1},
    {ten: 'ひややこ' , tenOdder: 'やこ', tenTV: 'đậu phụ nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'たこわさ' , tenOdder: 'たこわさ', tenTV: 'bạch tuộc muối', soLanDung: 0, soLanXH: 1},
    {ten: 'にたまごいくら' , tenOdder: 'にたまご', tenTV: 'bán nguyệt đội trứng cá hồi', soLanDung: 0, soLanXH: 1},
    {ten: 'せんまいサシミ' , tenOdder: 'せんまい', tenTV: 'sách bò bóp sốt miso', soLanDung: 0, soLanXH: 1},
    {ten: 'チャーシュー' , tenOdder: 'チャーシュー', tenTV: 'sá xíu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'とりゴマとふ' , tenOdder: 'ゴマとふ', tenTV: 'đậu phụ sốt vừng', soLanDung: 0, soLanXH: 1},
    {ten: 'せせりポンズ' , tenOdder: 'せせりポン', tenTV: 'cổ gà nhúng sốt bonzu', soLanDung: 0, soLanXH: 1},
    {ten: 'よだれどり' , tenOdder: 'よだれ', tenTV: 'gà dội sốt', soLanDung: 0, soLanXH: 1},
    {ten: 'きゅうたたき' , tenOdder: 'たたき', tenTV: 'bò tái sốt momitare', soLanDung: 0, soLanXH: 1},
    {ten: 'セロリあさずけ' , tenOdder: 'セロリ', tenTV: 'cần tây muối', soLanDung: 0, soLanXH: 1},
    {ten: 'キムチ' , tenOdder: 'キムチ', tenTV: 'kimchi', soLanDung: 0, soLanXH: 1},
    {ten: 'しおダレきゅうり' , tenOdder: 'きゅうり', tenTV: 'dưa chuột muối', soLanDung: 0, soLanXH: 1},
    {ten: 'つけものもりあわせ' , tenOdder: 'つけもり', tenTV: 'muối tổng hợp', soLanDung: 0, soLanXH: 1},
    {ten: 'ほっきがいすみそあえ' , tenOdder: 'ほっきがみそ', tenTV: 'sò đỏ dội sốt miso', soLanDung: 0, soLanXH: 1},
    {ten: 'たこのすのもの' , tenOdder: 'たこす', tenTV: 'bạch tuộc bóp lạnh', soLanDung: 0, soLanXH: 1},
    {ten: 'やまいものすみいもの' , tenOdder: 'やまいも', tenTV: 'khoai muối bóp lạnh', soLanDung: 0, soLanXH: 1},
    {ten: 'もずくす' , tenOdder: 'もずく', tenTV: 'rong biển ướp xì dầu', soLanDung: 0, soLanXH: 1},
    //
    {ten: 'うざく' , tenOdder: 'うざく', tenTV: 'lươn ớt dấm', soLanDung: 0, soLanXH: 1},
    {ten: 'とこぶし' , tenOdder: 'とこぶし', tenTV: 'bào ngư', soLanDung: 0, soLanXH: 1},
    {ten: 'サーモン' , tenOdder: 'サーモン', tenTV: 'cá hồi', soLanDung: 0, soLanXH: 1},
    {ten: 'こごちにしん' , tenOdder: 'にしん', tenTV: 'cá chích ép trứng', soLanDung: 0, soLanXH: 1},
    {ten: 'ホタテ' , tenOdder: 'ホタテ', tenTV: 'sò điệp', soLanDung: 0, soLanXH: 1},
    {ten: 'タイ' , tenOdder: 'タイ', tenTV: 'cá tai', soLanDung: 0, soLanXH: 1},
    {ten: 'えびさし' , tenOdder: 'えびさし', tenTV: 'sashimi tôm', soLanDung: 0, soLanXH: 1},
    {ten: 'あぶりしめさば' , tenOdder: 'しめさば', tenTV: 'cá thu khò lửa', soLanDung: 0, soLanXH: 1},
    {ten: 'サーモンいくらのせ' , tenOdder: 'いくらのせ', tenTV: 'cá hồi để trứng', soLanDung: 0, soLanXH: 1},
    {ten: 'づけマグロ' , tenOdder: 'づけマグロ', tenTV: 'cá ngừ nhúng sốt', soLanDung: 0, soLanXH: 1},
    {ten: 'あじなんばんずけ' , tenOdder: 'あじなんばん', tenTV: 'cá đục nướng sốt', soLanDung: 0, soLanXH: 1},
    {ten: 'あぶりサーモン' , tenOdder: 'あぶりサーモン', tenTV: 'cá hồi nướng tái', soLanDung: 0, soLanXH: 1},
    {ten: 'ホタテとタコのカルパッチョ' , tenOdder: 'カルパ', tenTV: 'sò điệp và bạch tuộc sốt itali', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃなめろう' , tenOdder: 'なめろう', tenTV: 'sashimi đổi vị', soLanDung: 0, soLanXH: 1},
    {ten: 'ごまさば' , tenOdder: 'ごまさば', tenTV: 'cá thu sốt vừng', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃロール' , tenOdder: 'ロール', tenTV: 'cơm cuộn yancha', soLanDung: 0, soLanXH: 1},
    //SUSHI
    {ten: 'てまりすしもりあわせ' , tenOdder: 'すしもり', tenTV: 'sushi tổng hợp', soLanDung: 0, soLanXH: 1},
    {ten: 'てっかまき' , tenOdder: 'てっかまき', tenTV: 'sushi cá ngừ', soLanDung: 0, soLanXH: 1},
    {ten: 'うなきゅうまき' , tenOdder: 'うなきゅう', tenTV: 'sushi lươn cuộn dưa leo', soLanDung: 0, soLanXH: 1},
    {ten: 'ゆてまりすし' , tenOdder: 'たたき (S)', tenTV: 'sushi bò mĩ', soLanDung: 0, soLanXH: 1},
    {ten: 'うなぎのおしずし' , tenOdder: 'うなぎすし', tenTV: 'sushi lươn', soLanDung: 0, soLanXH: 1},
    {ten: 'あぶりしめさばのおしずし' , tenOdder: 'さばすし', tenTV: 'sushi cá thu', soLanDung: 0, soLanXH: 1},
    {ten: 'サーモンのおしずし' , tenOdder: 'サーモンすし', tenTV: 'sushi cá hồi', soLanDung: 0, soLanXH: 1},
    //ĐỒ NƯỚNG
    {ten: 'やんちゃやきかいせん' , tenOdder: 'かいせん', tenTV: 'yanncha nướng tổng hợp', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうカルビ' , tenOdder: 'カルビ', tenTV: 'sườn non bò mĩ áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうロース' , tenOdder: 'ステキ', tenTV: 'bẹ vai bò mĩ áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうハラミ' , tenOdder: 'ハラミ', tenTV: 'riềng bò nướng đá', soLanDung: 0, soLanXH: 1},
    {ten: 'ポンじいとにんにくのめいけめ' , tenOdder: 'ぼんじりいため', tenTV: 'phao câu xào mồng tỏi', soLanDung: 0, soLanXH: 1},
    {ten: 'トンテキ' , tenOdder: 'トンテキ', tenTV: 'thịt vai lợn áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'ぶたキムチ' , tenOdder: 'ぶたキムチ', tenTV: 'thịt lợn sào kimchi', soLanDung: 0, soLanXH: 1},
    {ten: 'とんべいやき' , tenOdder: 'とんべいやき', tenTV: 'trứng cuộn thịt lợn', soLanDung: 0, soLanXH: 1},
    {ten: 'いちまいにくあぶり' , tenOdder: 'あぶり', tenTV: 'bò nướng 1 miếng thú vị', soLanDung: 0, soLanXH: 1},
    {ten: 'スンドゥブとふ' , tenOdder: 'スンドゥブ', tenTV: 'canh kimchi đậu phụ', soLanDung: 0, soLanXH: 1},
    {ten: 'レバニラいため' , tenOdder: 'レバニラ', tenTV: 'gan bò xào hẹ', soLanDung: 0, soLanXH: 1},
    {ten: 'ひよしまさんかきのさけに' , tenOdder: 'かきに', tenTV: 'hầu hấp rượu sake', soLanDung: 0, soLanXH: 1},
    {ten: 'ホタテしょゆばたいため' , tenOdder: 'ホタテしょゆ', tenTV: 'sò điệp xào sốt', soLanDung: 0, soLanXH: 1},
    {ten: 'だしまきたまご' , tenOdder: 'だしまき', tenTV: 'trứng cuộn kiểu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'さかむし' , tenOdder: 'さかむし', tenTV: 'ngao hấp rượu sake', soLanDung: 0, soLanXH: 1},
    {ten: 'とろろやき' , tenOdder: 'とろろやき', tenTV: 'bánh xèo kiểu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'しろたんたんめん' , tenOdder: 'S たんめん', tenTV: 'S たんめん cay vừa', soLanDung: 0, soLanXH: 1},
    {ten: 'くろたんたんめん' , tenOdder: 'K たんめん', tenTV: 'K たんめん cay vừa tỏi đen', soLanDung: 0, soLanXH: 1},
    {ten: 'あかたんたんめん' , tenOdder: 'A たんめん', tenTV: 'A たんめん cay nhất', soLanDung: 0, soLanXH: 1},
    {ten: 'しろたんたんめん' , tenOdder: 'しろたんたんめん', tenTV: 'しろたんたんめん cay vừa', soLanDung: 0, soLanXH: 1},
    {ten: 'とりしょゆラメン' , tenOdder: 'とりラメン', tenTV: 'mì gà sốt xì dầu', soLanDung: 0, soLanXH: 1},
    {ten: 'しおラメン' , tenOdder: 'しおラメン', tenTV: 'mì đao sốt shio', soLanDung: 0, soLanXH: 1},
    {ten: 'サラダうどん' , tenOdder: 'サラダうどん', tenTV: 'salad udon trứng trần', soLanDung: 0, soLanXH: 1},
    {ten: 'にくうどん' , tenOdder: 'にくうどん', tenTV: 'mì udon bò', soLanDung: 0, soLanXH: 1},
    {ten: 'カレーうどん' , tenOdder: 'K うどん', tenTV: 'mì udon sốt kare', soLanDung: 0, soLanXH: 1},
    {ten: 'おむはそば' , tenOdder: 'おむはそば', tenTV: 'trứng cuộn mì soba', soLanDung: 0, soLanXH: 1},
    {ten: 'カルボナーラうどん' , tenOdder: 'カルボ', tenTV: 'mì udon sốt kem tươi', soLanDung: 0, soLanXH: 1},
    {ten: 'しおダレかいせんうどん' , tenOdder: 'S うどん', tenTV: 'mì udon sào hải sản', soLanDung: 0, soLanXH: 1},
    {ten: 'しおやきそば' , tenOdder: 'しおやきそば', tenTV: 'mì soba kiểu okinawa', soLanDung: 0, soLanXH: 1},
    {ten: 'エビチリ' , tenOdder: 'エビチリ', tenTV: 'tôm chiên sốt cay', soLanDung: 0, soLanXH: 1},
    {ten: 'エビマヨ' , tenOdder: 'エビマヨ', tenTV: 'tôm chiên sốt mayone', soLanDung: 0, soLanXH: 1},
    {ten: 'しせんふまぼうどふ' , tenOdder: 'まぼ', tenTV: 'đậu phụ tứ xuyên', soLanDung: 0, soLanXH: 1},
    {ten: 'あげはるまき' , tenOdder: 'はるまき', tenTV: 'nem cuộn kiểu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'すぶたん' , tenOdder: 'すぶたん', tenTV: 'thịt lợn sào chua ngọt', soLanDung: 0, soLanXH: 1},
    {ten: 'こまかせごほんもりあわせ' , tenOdder: 'くしやつ', tenTV: 'xiên ...', soLanDung: 0, soLanXH: 1},
    {ten: 'するめいいかてんぷら' , tenOdder: 'するめい', tenTV: 'mực khô chiên', soLanDung: 0, soLanXH: 1},
    {ten: 'こらかなてんぷら' , tenOdder: 'こらかな', tenTV: 'cá cơm chiên', soLanDung: 0, soLanXH: 1},
    {ten: 'チキンなんばん' , tenOdder: 'なんばん', tenTV: 'cà chiên sốt trứng', soLanDung: 0, soLanXH: 1},
    {ten: 'チーズいりメンチカツ' , tenOdder: 'メンチ', tenTV: 'thịt bao nhân pho mai chiên giòn', soLanDung: 0, soLanXH: 1},

    {ten: 'とりからおろしポンズ' , tenOdder: 'とりから', tenTV: 'đùi gà chiên sốt bonzu', soLanDung: 0, soLanXH: 1},
    {ten: 'ささみおばチーズあげ' , tenOdder: 'ささみあげ', tenTV: 'ốc gà cuộn lá tía tô mơ muối', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃのぎゅうにくコロック' , tenOdder: 'コロック', tenTV: 'bánh trộn thịt bò và kem chiên giòn', soLanDung: 0, soLanXH: 1},
    {ten: 'てばあげ' , tenOdder: 'てげ', tenTV: 'cánh gà chiên kem sốt cay', soLanDung: 0, soLanXH: 1},
    {ten: 'なんこつあげ' , tenOdder: 'なんこつあげ', tenTV: 'sụi gà chiên kem sốt cay', soLanDung: 0, soLanXH: 1},
    {ten: 'えびとかみのクリームコロック' , tenOdder: 'かみコロック', tenTV: 'bánh trộn cua tôm', soLanDung: 0, soLanXH: 1},
    {ten: 'あげだしとふ' , tenOdder: 'あげだし', tenTV: 'canh khoai và nấm kiểu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'あげぎんなん' , tenOdder: 'ぎんなん', tenTV: 'bạch quảng trao dầu', soLanDung: 0, soLanXH: 1},
    {ten: 'えびあげ' , tenOdder: 'えびあげ', tenTV: 'tôm đồng chiên', soLanDung: 0, soLanXH: 1},
    {ten: 'チーズもち' , tenOdder: 'チズもち', tenTV: 'bánh mo chi nhân phô mai chiên giòn', soLanDung: 0, soLanXH: 1},
    {ten: 'アジフライ' , tenOdder: 'アジフライ', tenTV: 'cá đục chiên xù', soLanDung: 0, soLanXH: 1},
    {ten: 'とろろあげ' , tenOdder: 'とろろあげ', tenTV: 'rong biển bao khoai núi', soLanDung: 0, soLanXH: 1},
    {ten: 'ひろしまサソカキフライ' , tenOdder: 'カキフライ', tenTV: 'hàu nhật chiên giòn', soLanDung: 0, soLanXH: 1},
    {ten: 'ガーリックアライドボテト' , tenOdder: 'ボテト', tenTV: 'khoai tây chiên tỏi', soLanDung: 0, soLanXH: 1},
    {ten: 'ひろしまさんカキなば' , tenOdder: 'カキなべ', tenTV: 'lẩu hầu', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃちげなべ' , tenOdder: 'ちげなべ', tenTV: 'lẩu cay', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃすきやき' , tenOdder: 'すきやき', tenTV: 'lẩy bò nướng kiểu nhật', soLanDung: 0, soLanXH: 1},
    {ten: 'いしなべチャーシューはん' , tenOdder: 'チャどん', tenTV: 'cơm thịt hầm', soLanDung: 0, soLanXH: 1},
    {ten: 'ビビンパドン' , tenOdder: 'ビビンバ', tenTV: 'cơm trộn yancha', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうどん' , tenOdder: 'ぎゅうどん', tenTV: 'cơm bò', soLanDung: 0, soLanXH: 1},
    {ten: 'ガパオライス' , tenOdder: 'ガパオ', tenTV: 'cơm kiểu thái', soLanDung: 0, soLanXH: 1},
    {ten: 'うなぎどん' , tenOdder: 'うなぎうどん', tenTV: 'cơm lươn', soLanDung: 0, soLanXH: 1},
    {ten: 'ばくだんどん' , tenOdder: 'ばくだんどん', tenTV: 'cơm cá ngừ khoai núi', soLanDung: 0, soLanXH: 1},
    {ten: 'ばくだんたんビソ' , tenOdder: 'ばくだんたん', tenTV: 'cơm cá ngừ khoai núi nhưng không có cơm ', soLanDung: 0, soLanXH: 1},
    {ten: 'たこわさちゃずけ' , tenOdder: 'たこちゃ', tenTV: 'cơm chà bạch tuộc muối', soLanDung: 0, soLanXH: 1},
    {ten: 'うめちゃずけ' , tenOdder: 'うめちゃ', tenTV: 'cơm chà mơ muối', soLanDung: 0, soLanXH: 1},
    {ten: 'やきおみぎりちゃずけ' , tenOdder: 'やきおみちゃ', tenTV: 'cơm chà nấm nướng', soLanDung: 0, soLanXH: 1},
    {ten: 'さけいくらちゃずけ' , tenOdder: 'さけちゃ', tenTV: 'cơm chả cá hồi', soLanDung: 0, soLanXH: 1},
    {ten: 'うなぎちゃずけ' , tenOdder: 'うなぎちゃ', tenTV: 'cơm chả lươn', soLanDung: 0, soLanXH: 1},
    {ten: 'さけおにぎり' , tenOdder: 'さけおに', tenTV: 'cơm nắm cá hồi', soLanDung: 0, soLanXH: 1},
    {ten: 'うめおにぎり' , tenOdder: 'うめおに', tenTV: 'cơm nắm mơ muối', soLanDung: 0, soLanXH: 1},
    {ten: 'ナマヨおにぎり' , tenOdder: 'ツナおに', tenTV: 'cơm nắm cá ngừ', soLanDung: 0, soLanXH: 1},
    {ten: 'ごはん' , tenOdder: 'ごはん', tenTV: 'cơm', soLanDung: 0, soLanXH: 1},
    {ten: 'やきおにぎり' , tenOdder: 'やきおにぎり', tenTV: 'cơm nắm nướng', soLanDung: 0, soLanXH: 1},
    {ten: 'みそしず' , tenOdder: 'しず', tenTV: 'súp miso', soLanDung: 0, soLanXH: 1},
    {ten: 'いもちゃんバニラアイズ' , tenOdder: 'いもね', tenTV: 'bánh khoai lang kem vani', soLanDung: 0, soLanXH: 1},
    {ten: 'きなこアイス' , tenOdder: 'きなこ', tenTV: 'kem đậu xanh', soLanDung: 0, soLanXH: 1},
    {ten: 'ゆめいごこちクリムチズ' , tenOdder: 'ゆめチ', tenTV: 'bánh mì kem tươi', soLanDung: 0, soLanXH: 1},
    {ten: 'マンゴーアイス' , tenOdder: 'マンゴ', tenTV: 'kem xoài', soLanDung: 0, soLanXH: 1},
    {ten: 'くろごまアイス' , tenOdder: 'くろごま', tenTV: 'kem mè đen', soLanDung: 0, soLanXH: 1},
    {ten: 'ココナッツアイズ' , tenOdder: 'ココナッツ', tenTV: 'kem dừa', soLanDung: 0, soLanXH: 1},
    {ten: 'まっちゃアイス' , tenOdder: 'まっちゃ', tenTV: 'kem matcha', soLanDung: 0, soLanXH: 1},
    {ten: 'おずきアイス' , tenOdder: 'あずき', tenTV: 'kem đậu đỏ', soLanDung: 0, soLanXH: 1},
    // ĐỒ SET
    {ten: 'ひやしたんたんめん' , tenOdder: 'ひやしたんめん', tenTV: 'mì tantanmen lạnh', soLanDung: 0, soLanXH: 1},
    {ten: 'ひやしうどん' , tenOdder: 'ひやしうどん', tenTV: 'mì udon lạnh', soLanDung: 0, soLanXH: 1},
    {ten: 'サラダうどん' , tenOdder: 'サラダうどん', tenTV: 'salad udon trứng trần', soLanDung: 0, soLanXH: 1},
    {ten: 'れめん' , tenOdder: 'れめん', tenTV: 'mì lạnh hàn quốc', soLanDung: 0, soLanXH: 1},
    {ten: 'みくうどん' , tenOdder: 'みくうどん', tenTV: 'mì udon bò', soLanDung: 0, soLanXH: 1},
    {ten: 'やきそば' , tenOdder: 'やきそば', tenTV: 'mì soba xào', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃのMIX' , tenOdder: 'MIX てい', tenTV: 'set đồ ăn tam vị', soLanDung: 0, soLanXH: 1},
    {ten: 'みこみハンパーグ' , tenOdder: 'でみ (B)', tenTV: 'hamberger với nước sốt đặc chế', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうカルビ' , tenOdder: 'カルビ', tenTV: 'sườn non bò mĩ áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'チキンなんばん' , tenOdder: 'なんばん', tenTV: 'gà chiên sốt trứng', soLanDung: 0, soLanXH: 1},
    {ten: 'チキンステーキ' , tenOdder: 'チキン', tenTV: 'gà nướng áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'そがやき' , tenOdder: 'そがやき', tenTV: 'lợn xào gừng', soLanDung: 0, soLanXH: 1},
    {ten: 'トンテキ' , tenOdder: 'トンテキ', tenTV: 'thịt vai lợn áp chảo', soLanDung: 0, soLanXH: 1},
    {ten: 'まぼとふ' , tenOdder: 'まぼ', tenTV: 'đậu phụ tứ xuyên', soLanDung: 0, soLanXH: 1},
    {ten: 'チンジャオロス' , tenOdder: 'チンジャオ', tenTV: 'thịt lợn xào ớt chuông', soLanDung: 0, soLanXH: 1},
    {ten: 'やんちゃカレー' , tenOdder: 'やんちゃ (C)', tenTV: 'cơm cà ri', soLanDung: 0, soLanXH: 1},
    {ten: 'さしみもりあわせ' , tenOdder: 'さしみろ', tenTV: 'さしみもりあわせ', soLanDung: 0, soLanXH: 1},
    {ten: 'さばのしおやき' , tenOdder: 'さばしお', tenTV: 'cá thu nướng muối', soLanDung: 0, soLanXH: 1},
    {ten: 'さばのみそに' , tenOdder: 'さばみそ', tenTV: 'cá thu hầm sốt miso', soLanDung: 0, soLanXH: 1},
    {ten: 'てっかどん' , tenOdder: 'てっかどん', tenTV: 'cơm cá ngừ', soLanDung: 0, soLanXH: 1},
    {ten: 'かいせんどん' , tenOdder: 'かいせんどん', tenTV: 'cơm hải sản', soLanDung: 0, soLanXH: 1},
    {ten: 'かっどん' , tenOdder: 'かっどん', tenTV: 'cơm thịt heo cốt lết chiên xù', soLanDung: 0, soLanXH: 1},
    {ten: 'わぎゅうステキ' , tenOdder: 'ステキどん', tenTV: 'cơm bò wagyuu steak', soLanDung: 0, soLanXH: 1},
    {ten: 'ちゅうかどん' , tenOdder: 'ちゅうかどん', tenTV: 'cơm ngũ sắc tam vị', soLanDung: 0, soLanXH: 1},
    {ten: 'ぎゅうどん' , tenOdder: 'ぎゅうどん', tenTV: 'cơm thịt bò', soLanDung: 0, soLanXH: 1},
    {ten: 'うなぎどん' , tenOdder: 'うなぎどん', tenTV: 'cơm lươn', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
    {ten: '' , tenOdder: '', tenTV: '', soLanDung: 0, soLanXH: 1},
]

const Man_hinh = (props) =>{
    let a=0; let b=137; let c=b-a+1;
    let random =Math.floor(Math.random()*c+a);
    const [ten,setTen] = useState(tenMon[random]);
    function chuyenMon(){
        let chuDe = document.querySelector('.chuDe');
        if (chuDe.innerHTML === 'MON AN') {
            let min = document.querySelector('#min');
            let max = document.querySelector('#max');
            console.log(typeof min.value);
            if(min.value !== false && max.value !== false && Number.parseInt(min.value)<Number.parseInt(max.value)&& Number.parseInt(min.value)>=0 ){
                a = Number.parseInt(min.value);
                b = Number.parseInt(max.value);
                c = b-a+1;
            }
            else{
                console.log('min'+min.value + ' max: '+max.value);
                a = 0;
                b = 137;
                c = b-a+1;
            }
        }
        else if(chuDe.innerHTML ==='SET'){
            a = 137;
            b = 162;
            c = b-a+1;
        }
        let count = 0;
        console.log(b);
        while(1){
            let random =Math.floor(Math.random()*c+a);
            let TEN  = tenMon[random];
            console.log(TEN.soLanDung/TEN.soLanXH > 0.8);
            if(TEN.soLanDung/TEN.soLanXH < 0.8){
                TEN.soLanXH++;
                setTen(TEN);
                console.log(random);
                break;
            }else count++;
            if(count === 300){
                alert('Bạn đã hoàn thành menu');
                break;
            }
            
        }
        
    }
    function hienOdder(){
        let monAn = document.querySelector('.Mon-an');
        if(monAn.innerHTML.includes('odder')===false) monAn.innerHTML += '<div class = "odder"> Tên odder: ' +ten.tenOdder + '</div>'; 
    }
    function hienTV(){
        let monAn = document.querySelector('.Mon-an');
        if(monAn.innerHTML.includes('tiengViet')===false) monAn.innerHTML += '<div class = "tiengViet"> Tên tiếng việt: ' +ten.tenTV + '</div>' 
    }
    function hienTN(){
        let monAn = document.querySelector('.Mon-an');
        if(monAn.innerHTML.includes('tiengNhat')===false) monAn.innerHTML += '<div class = "tiengNhat"> Tên tiếng Nhật: ' +ten.ten + '</div>' 
    }
    function chuyenSet(){
        let chuDe = document.querySelector('.chuDe');
        chuDe.innerHTML = 'SET';
        chuyenMon();
        onClick_an();
    }
    function chuyenMonAn(){
        let chuDe = document.querySelector('.chuDe');
        chuDe.innerHTML = 'MON AN';
        chuyenMon();
        let soLuong = document.querySelector('.soLuong');
        soLuong.style.display = 'block';
        let ti_so = document.querySelector('.ti-so');
        ti_so.style.top = '13rem';
        let man_hinh = document.querySelector('.man-hinh');
        man_hinh.style.display = 'none';
    }
    function inputEvent(e){
        let INPUT = document.querySelector(".input-odder");
        console.log(e);
        if(e.charCode === 13){
            if(INPUT.value === ten.ten){
                ten.soLanDung++;
                hienTV();
                setTimeout(chuyenMon,1500);
            }
            else{
                hienOdder();
                hienTV();
                hienTN();
                setTimeout(chuyenMon,2000);
            }
            INPUT.value = '';
        }
    }
    function onClick_an(){
        let soLuong = document.querySelector('.soLuong');
        soLuong.style.display = 'none';
        chuyenMon();
        let ti_so = document.querySelector('.ti-so');
        ti_so.style.top = '3.5rem';
        let man_hinh = document.querySelector('.man-hinh');
        man_hinh.style.display = 'block';
    }
    let hienManhinh='';
    // if(Math.floor(Math.random()*2)===0) hienManhinh = ten.ten;
    // else hienManhinh = ten.tenTV;
    hienManhinh = ten.tenOdder;
    return (
        <>
        <div className="man-hinh__phu">
            <div className="btn-chuDe">
                <button className="btn-chuDe-all" onClick={chuyenMonAn}>MON AN</button>
                <button className="btn-chuDe-set" onClick={chuyenSet}>SET</button>
            </div>
            <div className="chuDe" value='MON AN'>MON AN</div>
            <div className="soLuong">
                <div>Nhập các stt món ăn muốn học</div> 
                Min: 
                <input type='number' id="min"></input>
                Max: 
                <input type='number' id="max"></input>
                <button onClick={onClick_an}>Đồng ý</button>
            </div>
        </div>
        <div className="man-hinh">
        <div className="ti-so">{ten.soLanDung}/{ten.soLanXH}</div>
        
        <Mon_an class = "Mon-an" ten={hienManhinh}/>
        <div>
            <input type='text' className="input-odder" onKeyPress={inputEvent}></input>
        </div>
        <button className="btn-TN" onClick={hienTN}>Tên tiếng Nhật</button>
        <button className="btn-odder" onClick={hienOdder}>Tên odder</button>
        <button className="btn-TV" onClick={hienTV}>Tên tiếng việt</button>
        <button className="btn-chuyen" onClick={chuyenMon}>CHUYỂN</button>
        </div>
        </>
    )
}
export default Man_hinh;