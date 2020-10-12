let str = "";
let voteCount = {
    Yatap  :0,
    Sprite :0,
    Royal  :0,
    Pepsi  :0,
    Coke   :0, 
    Omsim  :0, 
    Redhorse:0, 
    Emperador:0, 
    Gin:0, 
    Mamshi:0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                voteCount.Yatap++;
                $("#p1vote").html(voteCount.Yatap);            
            }
        );

        $("#div2").click(
            function(){
                voteCount.Sprite++;
                $("#p2vote").html(voteCount.Sprite);            
            }
        );

        $("#div3").click(
            function(){
                voteCount.Royal++;
                $("#p3vote").html(voteCount.Royal);            
            }
        );

        $("#div4").click(
            function(){
                voteCount.Pepsi++;
                $("#p4vote").html(voteCount.Pepsi);            
            }
        );

        $("#div5").click(
            function(){
                voteCount.Coke++;
                $("#p5vote").html(voteCount.Coke);            
            }
        );

        $("#div6").click(
            function(){
                voteCount.Omsim++;
                $("#p6vote").html(voteCount.Omsim);            
            }
        );

        $("#div7").click(
            function(){
                voteCount.Redhorse++;
                $("#p7vote").html(voteCount.Redhorse);            
            }
        );

        $("#div8").click(
            function(){
                voteCount.Emperador++;
                $("#p8vote").html(voteCount.Emperador);            
            }
        );

        $("#div9").click(
            function(){
                voteCount.Gin++;
                $("#p9vote").html(voteCount.Gin);            
            }
        );

        $("#div10").click(
            function(){
                voteCount.Mamshi++;
                $("#p10vote").html(voteCount.Mamshi);            
            }
        );
    }
)

