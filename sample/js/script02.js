$(function(){
    let txt1 ="はいどーもー";
    let txt2 ="どついたれ本舗です！"
    let num1 = 10;
    let num2 = 31;

    $("#button01").on("click",function(){
        $("#content").append("ごきげんよう")
    })

    $("#button02").on("click",function(){
        $("#content").text(txt1)
    })

    $("#button03").on("click",function(){
        $("#content").text(txt1+txt2)
    })

    $("#button04").on("click",function(){
        $("#content").text(num1+num2)
    })

    $("#button05").on("click",function(){
        $("#content").text(num1 + "-" + num2 + "=" + (num1 -num2) + "です。")
    })
    
})