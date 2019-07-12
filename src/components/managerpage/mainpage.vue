<template>
  <el-container id="bgdiv">
<!--    <canvas id="testCanvas" width=100% height="757"></canvas>-->
  <el-container id="main1"  direction="vertical">
    <header1 style="height:10vh;">Header</header1>
    <el-container style=" overflow:hidden; position:relative;">
      <left width="200px"></left>

      <el-main style="text-align: center;background-color: white">
          <router-view style="width: 800px ;margin:0 auto"/>
      </el-main>

    </el-container>
  </el-container>
  </el-container>
</template>

<script>

  import left from './left'
  import header1 from './header1'
    export default {
      name: "mainpage",
      components: {
        "left": left,
        "header1": header1
      },
    }
    //   mounted(){
    //     var canvas;
    //     var stage;
    //     var container;
    //     var captureContainers;
    //     var captureIndex;
    //     canvas = document.getElementById("testCanvas");
    //     stage = new createjs.Stage(canvas);
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //
    //     var w = canvas.width;
    //     var h = canvas.height;
    //
    //     container = new createjs.Container();
    //     stage.addChild(container);
    //
    //     captureContainers = [];
    //     captureIndex = 0;
    //
    //     // create a large number of slightly complex vector shapes, and give them random positions and velocities:
    //     var shadow = new createjs.Shadow("#000", 2,2,5);
    //
    //     for (var i = 0; i < 20; i++) {
    //       var heart = new createjs.Container();
    //       var h1 = new createjs.Shape();
    //       h1.graphics.beginFill(createjs.Graphics.getHSL(Math.random() * 30 - 260, 80, 40 + Math.random() * 30)).p("AC3H6QgEg1hHi/IhGi0QAIBPgDAzQgDA9gWB1QgLA7guAoQgtAng+AHQhAAHg7geQhAgigohHQhJiCBrh7QBDhNBxg4IgtAOQh9Ajh6gLQhGgGgjhIQgghEALhdQALhgA0hFQA6hOBagOQCggZBhCNQAxBHARBLQgLhLAGhTQAOilBhgnQBjgnBkA3QAzAcAeAkQBZCBh2B/Qg8BAhNAmIBEgUQBIgTAVgBQCzgHAsB3QAuB7g/BhQgtBDhCAWQhDAVhgg7Qhhg7hQh5QCREgASBXQARBYgNALQgOALgQAEIgMABQggAAgDgwg")
    //       h1.shadow = shadow;
    //       heart.addChild(h1);
    //       heart.cache(-80,-80,160,160,0.5);
    //       heart.y = -100;
    //
    //       container.addChild(heart);
    //     }
    //
    //     for (i = 0; i < 50; i++) {
    //       var captureContainer = new createjs.Container();
    //       captureContainer.cache(0, 0, w, h);
    //       captureContainers.push(captureContainer);
    //     }
    //
    //     // start the tick and point it at the window so we can do some work before updating the stage:
    //     createjs.Ticker.timingMode = createjs.Ticker.RAF;
    //     createjs.Ticker.on("tick", tick);
    //
    //     function tick(event) {
    //       var w = canvas.width;
    //       var h = canvas.height;
    //       var l = container.numChildren;
    //
    //       captureIndex = (captureIndex + 1) % captureContainers.length;
    //       stage.removeChildAt(0);
    //       var captureContainer = captureContainers[captureIndex];
    //       stage.addChildAt(captureContainer, 0);
    //       captureContainer.addChild(container);
    //
    //       // iterate through all the children and move them according to their velocity:
    //       for (var i = 0; i < l; i++) {
    //         var heart = container.getChildAt(i);
    //         if (heart.y < -50) {
    //           heart._x = Math.random() * w;
    //           heart.y = h * (1 + Math.random()) + 50;
    //           heart.perX = (1 + Math.random() * 2) * h;
    //           heart.offX = Math.random() * h;
    //           heart.ampX = heart.perX * 0.1 * (0.15 + Math.random());
    //           heart.velY = -Math.random() * 2 - 1;
    //           heart.scale = Math.random() * 0.28 + 0.28;
    //           heart._rotation = Math.random() * 40 - 20;
    //           heart.alpha = Math.random() * 0.75 + 0.05;
    //           heart.compositeOperation = Math.random() < 0.33 ? "lighter" : "source-over";
    //         }
    //         var int = (heart.offX + heart.y) / heart.perX * Math.PI * 2;
    //         heart.y += heart.velY * heart.scaleX*3.5;
    //         heart.x = heart._x + Math.cos(int) * heart.ampX;
    //         heart.rotation = heart._rotation + Math.sin(int) * 30;
    //       }
    //
    //       captureContainer.updateCache("source-over");
    //
    //       // draw the updates to stage:
    //       stage.update(event);
    //     }
    //
    //   }
    // }
</script>


<style scoped>
  .el-select-dropdown__wrap{
    margin-bottom: 0;
  }
  #bgdiv{
    width: 100%;
    height: 757px;
    justify-content: center;
  }
  #bgdiv::before{
    content:"";
    /*-webkit-filter: opacity(50%);
    filter: opacity(50%); */
    background-image: url("../../assets/bgsec.jpg");
    opacity:0.5;//透明度设置
    z-index:-1;
    width: 100%;
    height: 757px;
    position:absolute;
    top:0px;
    left:0px;
  }
  #main1{
    height: 100vh; border: 1px solid #eee;width: 1200px;left: 200px;position: absolute;
  }

</style>
