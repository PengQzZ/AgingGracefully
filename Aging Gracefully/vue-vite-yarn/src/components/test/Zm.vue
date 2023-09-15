<template>

    <div class="content">
        <div class="chars">A</div>
        <div class="chars">B</div>
        <div class="chars">C</div>
        <div class="chars">D</div>
        <div class="chars">E</div>
        <div class="chars">F</div>
        <div class="chars">G</div>
   

        <div class="rect a"></div> 
        <div class="rect b"></div> 
        <div class="rect c"></div> 
        <div class="rect d"></div> 
        <div class="rect e"></div> 
        <div class="rect f"></div> 
        <div class="rect g"></div> 
     
        <ul class="cards">
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>
            <li class="card" style="background-image: url('public/HH.png');"></li>

        </ul>


    </div>


</template>



<script>


    

</script>


<style >
*{
    margin:0;
    padding:0;

}

.content {
    width: 100vw;/*占款100%*/
    height: 100vw;/*占高100%*/
    background-color: #000;
    display: flex;/*设置弹性盒子*/
    align-items: center;/*让盒子之间的元素按照纵轴对其*/
    justify-content: center;/*让盒子之间的元素按照横轴对其*/
}

.content .chars{
    color: #fff;
    font-size: 6vw;
    font-style: italic;
    font-weight: bold;

    /*设置每个字母的间距*/
    width:8vw;
    line-height: 6vm;
    text-align: center;

}

/*外框动画*/
.content .rect {
    width: 60vm;
    height: 6vw;
    position: absolute;
    border-width: 0.4vw;
    border-style: solid;
    border-radius: 0.18vw;

    margin-left: -48vw;
    opacity: 0;
}

.content {
    perspective: 450;
    -webkit-perspective: 450;
}

/*外框颜色*/
.rect.a,.rect.b {
    border-color: #5b4489;
}
.rect.c,.rect.d {
    border-color: #aa4776;
}
.rect.e,.rect.f {
    border-color: #d74061;
}
.rect.g {
    border-color: #d74061;
}

.rect.a{
    animation: amove 0.6s linear forwards;
}
@keyframes amove {
    
    0%{
       opacity: 1; 
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(180deg);
    }
    100%{
        opacity: 1;
        transform: rotateY(360deg);
    }
}
@keyframes nmove {
    0% {
        opacity: 1;
        transform: rotateY(135deg) scale(1.1,1.1);
        
    }
    60% {
        transform: translateX(calc(8vw * 0.6)) rotateY(45deg) scale(1.1,1.1);

    }
    100%{
        opacity: 1;
    }
}


/*8份屏*/
.cards{
    list-style-type: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: -10;
}

.cards .card {
    flex: 1;
    height: 100vh;
    background-size: auto 100%;
    background-position: 28% center;
    background-repeat: no-repeat;

    border-left: 0.5vw solid #000;
    border-radius: 0.5vm solid #000;

}

.card .card:first-child {
    border-left: 0vm;

}
.card .card:last-child{
    border-right: 0vm;
}


</style>