import React, { useState } from "react";
import './Man_hinh.css';
import Mon_an from "../Mon_an/Mon_an";
let tenMon = [
    {ten: 'シーザーサラダ' , tenOdder: 'シーザー (S)', tenTV: 'chưa ghi'},
    {ten: 'ポテサラあじたまのせい',  tenOdder: 'ポテ (S)', tenTV: 'salad khoai tây trứng muối'},
    {ten: 'ラーユサラダ',  tenOdder: 'ラー(S))', tenTV: 'salad gà'},
    {ten: 'とふサラダ' , tenOdder: 'とふ (S)', tenTV: 'salad đậu phụ'},
    {ten: 'サーモンサラダ' , tenOdder: 'サーモン(S)', tenTV: 'salad cá hồi'},
    {ten: 'パリパリいもサラダ' , tenOdder: 'パリ(S)', tenTV: 'salad khoai tây trứng muối'},
    {ten: 'カイセンサラダ' , tenOdder: 'カイセン(S)', tenTV: 'salad hải sản'},
    {ten: 'わかねサラダ' , tenOdder: 'わかね(S)', tenTV: 'salad rong biển trứng cua'},
    {ten: 'おつまみうずら' , tenOdder: 'うずら', tenTV: 'trứng cút muối'},
    {ten: 'とりかわポンズ' , tenOdder: 'とりポン', tenTV: 'da gà nhúng sốt bonzu'},
    {ten: 'ひやしトマト' , tenOdder: 'トマト', tenTV: 'cà chua giảm nhiệt'},
    {ten: 'えだまめ' , tenOdder: 'まめ', tenTV: 'đậu nành luộc'},
    {ten: 'みそずけフリームチズ' , tenOdder: 'みそチ', tenTV: 'phô mai sốt miso'},
    {ten: 'キノコマリネ' , tenOdder: 'マリネ', tenTV: 'nắm muối chua'},
    {ten: 'いかのしおから' , tenOdder: 'しおから', tenTV: 'mực muối'},
    {ten: 'ひややこ' , tenOdder: 'やこ', tenTV: 'đậu phụ nhật'},
    {ten: 'たこわさ' , tenOdder: 'たこわさ', tenTV: 'bạch tuộc muối'},
    {ten: 'にたまごいくら' , tenOdder: 'にたまご', tenTV: 'bán nguyệt đội trứng cá hồi'},
    {ten: 'せんまいサシミ' , tenOdder: 'せんまい', tenTV: 'sách bò bóp sốt miso'},
    {ten: 'チャーシュー' , tenOdder: 'チャーシュー', tenTV: 'sá xíu nhật'},
    {ten: 'とりゴマとふ' , tenOdder: 'ゴマとふ', tenTV: 'đậu phụ sốt vừng'},
    {ten: 'せせりポンズ' , tenOdder: 'せせりポン', tenTV: 'cổ gà nhúng sốt bonzu'},
    {ten: 'よだれどり' , tenOdder: 'よだれ', tenTV: 'gà dội sốt'},
    {ten: 'きゅうたたき' , tenOdder: 'たたき', tenTV: 'bò tái sốt momitare'},
    {ten: 'セロリあさずけ' , tenOdder: 'セロリ', tenTV: 'cần tây muối'},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
    {ten: '' , tenOdder: '', tenTV: ''},
]

const Man_hinh = (props) =>{
    let random = Math.floor(Math.random()*25);
    const [ten,setTen] = useState(tenMon[random]);
    function chuyenMon(){
        let random = Math.floor(Math.random()*25);
        let ten  = tenMon[random];
        setTen(ten);
    }
    function hienOdder(){
        let monAn = document.querySelector('.Mon-an');
        if(monAn.innerHTML.includes('odder')===false) monAn.innerHTML += '<div class = "odder"> Tên odder: ' +ten.tenOdder + '<\div>' 
    }
    function hienTV(){
        let monAn = document.querySelector('.Mon-an');
        if(monAn.innerHTML.includes('tiengViet')===false) monAn.innerHTML += '<div class = "tiengViet"> Tên tiếng việt: ' +ten.tenTV + '<\div>' 
    }
    return (
        <div className="man-hinh">
        <Mon_an class = "Mon-an" ten={ten.ten}/>
        <button class="btn-odder" onClick={hienOdder}>Tên odder</button>
        <button class="btn-TV" onClick={hienTV}>Tên tiếng việt</button>
        <button class="btn-chuyen" onClick={chuyenMon}>CHUYỂN</button>
        </div>
    )
}
export default Man_hinh;