define(["createjs", "util"], function Library(createjs, util, loader) {
    var p;
    Library.loader;
    /*
     Library.shape87 = (function () {
     util.inherits(MousePointer, createjs.Container);
     function MousePointer() {
     createjs.Container.call(this);
     this.shape = new createjs.Shape();
     this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
     this.shape.setTransform(6.7, 10.7);

     this.shape_1 = new createjs.Shape();
     this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
     this.shape_1.setTransform(6.7, 11);

     this.addChild(this.shape_1, this.shape);

     }

     return MousePointer;
     })();
     */

    //mouse pointer
    (Library.shape87 = function () {
        //createjs.Container.call(this);
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
        this.shape.setTransform(6.7, 10.7);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
        this.shape_1.setTransform(6.7, 11);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);
    //util.inherits( Library.mousePointer, createjs.Container);


    (Library.shape87a = function () {
        // Layer 1
        //this.initialize();
        var g = this.graphics;
        g.moveTo(1.9, 19.4);
        g.bezierCurveTo(1.1, 19.8, 0.6, 19.6, 0.5, 18.6);
        g.lineTo(0.5, 1.1);
        g.lineTo(13.5, 12.6);
        g.bezierCurveTo(14.2, 13.3, 14.1, 13.9, 13.3, 14.2);
        g.lineTo(8.6, 14.9);
        g.bezierCurveTo(9.1, 16.8, 10.2, 18.7, 11.8, 20.6);
        g.bezierCurveTo(12.0, 21.2, 11.9, 21.6, 11.3, 21.9);
        g.lineTo(8.9, 22.9);
        g.bezierCurveTo(8.3, 23.2, 7.9, 23.0, 7.7, 22.4);
        g.bezierCurveTo(6.6, 20.4, 5.8, 18.5, 5.4, 16.6);
        g.lineTo(1.9, 19.4);
        g.beginRadialGradientFill(["rgb(255, 255, 255)", "rgb(165, 165, 165)"], [0.47, 1.00], 1.6, 10.2, 0.0, 1.6, 10.2, 19.9);

        //contour line
        g.setStrokeStyle(1, 0, 0, 3, true).beginStroke("#333333");
        g.moveTo(1.9, 19.4);
        g.bezierCurveTo(1.1, 19.8, 0.6, 19.6, 0.5, 18.6);
        g.lineTo(0.5, 1.1);
        g.lineTo(13.5, 12.6);
        g.bezierCurveTo(14.2, 13.3, 14.1, 13.9, 13.3, 14.2);
        g.lineTo(8.6, 14.9);
        g.bezierCurveTo(9.1, 16.8, 10.2, 18.7, 11.8, 20.6);
        g.bezierCurveTo(12.0, 21.2, 11.9, 21.6, 11.3, 21.9);
        g.lineTo(8.9, 22.9);
        g.bezierCurveTo(8.3, 23.2, 7.9, 23.0, 7.7, 22.4);
        g.bezierCurveTo(6.6, 20.4, 5.8, 18.5, 5.4, 16.6);
        g.lineTo(1.9, 19.4);
        //g.endStroke();

    }).prototype = p = new createjs.Shape();
    p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);

    (Library.shape8 = function () {
        var g = this.graphics;
        g.beginLinearGradientFill(["rgb(193, 228, 224)", "rgb(235, 246, 244)"], [0.00, 1.00], 0, 0, 640, 480);
        g.moveTo(640.0, 0.0);
        g.lineTo(640.0, 480.0);
        g.lineTo(0.0, 480.0);
        g.lineTo(0.0, 0.0);
        g.lineTo(640.0, 0.0);
     }).prototype = p = new createjs.Shape();
    p.nominalBounds = new createjs.Rectangle(0, 0, 640, 480);

    (Library.start_btn = function () {
        var startButtonSpriteSheet = new createjs.SpriteSheet({
            //images: ["assets/images/startButton.png"],
            images: [Library.loader.getResult("startButtonSS")],
            frames: {
                height: 42,
                width: 114,
                regX: 56,
                regY: 21,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.initialize(startButtonSpriteSheet);
        var startButtonHelper = new createjs.ButtonHelper(this, "up", "over", "down");
    }).prototype = p = new createjs.BitmapAnimation();
    p.nominalBounds = new createjs.Rectangle(-56.2, -20.9, 112.6, 52);

    (Library.howto_btn = function () {
        var helpButtonSpriteSheet = new createjs.SpriteSheet({
            images: [Library.loader.getResult("helpButtonSS")],
            frames: {
                height: 47,
                width: 170,
                regX: 85,
                regY: 24,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.initialize(helpButtonSpriteSheet);
        var helpButtonHelper = new createjs.ButtonHelper(this, "up", "over", "down");
    }).prototype = p = new createjs.BitmapAnimation();
    p.nominalBounds = new createjs.Rectangle(-84.3, -20.9, 168.8, 52.5);

    (Library.shape90 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("AAfgoIAAAQAA9gdQACAJgBAMAAfgoQAJgNANAKQAHAGABAIQANgCAHAHQAHAGgHAsIgLA2QgDAIACAgIhqAAQACgDgUgyIgbhAQgGgLAQACQAQABAMAQIAAhoQAAgLAGgIIAHgFIAJgBIAJADQAFADABAGIACAoIAAANIAAAcAgFg1QAGgJAIAAQARAAAEANIABAJ");
        this.shape.setTransform(8.5, 12);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], 0.1, -3.8, 0, 0.1, -3.8, 27).s().p("AglB4QACgEgUgxIgbhAQgGgMAQACQAQACAMAQIAAhoQAAgLAGgIIAHgGIAJgBIAJADQAFAEABAFIACApIAAAMIAAAcIAAgcQAGgIAIAAQARAAAEANIABAJIAAAQIAAgQQAJgNANAJQAHAHABAIQANgCAHAGQAHAGgHAtIgLA2QgDAHACAhgAA+gJIAAgJIgBgLIABALIAAAJg");
        this.shape_1.setTransform(8.5, 12);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 17, 24);

//needless
//    (Library.sprite88 = function () {
//        this.initialize();
//
//        // Layer 1
//        //mouse pointer
//        this.instance = new Library.shape87("synched", 0);
//
//        this.addChild(this.instance);
//    }).prototype = p = new createjs.Container();
//    p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);

      (Library.sprite91 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape90("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 17, 24);

    (Library.sprite92 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 28
        this.instance = new Library.shape87();
        this.instance.setTransform(286.8, 94);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance).wait(49).to({_off: false}, 0).to({alpha: 0.934}, 14).wait(1).to({alpha: 1}, 0).wait(65).to({x: 215.8, y: 71}, 10).to({_off: true}, 1).wait(76).to({x: 119.8, y: 169.6, _off: false}, 0).wait(15).to({alpha: 0.145}, 6).wait(1).to({alpha: 0}, 0).wait(25));

        // Layer 26 copy
        this.instance_1 = new Library.sprite91();
        this.instance_1.setTransform(210,70);
        this.instance_1._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).wait(22).to({x:165.9,y:156.4},9).wait(1).to({x:161,y:166},0).wait(23).to({x:118.7,y:167.8},9).wait(1).to({x:114,y:168},0).to({_off:true},11).wait(47));

        // Layer 26
        this.instance_2 = new Library.ActiveTile();
        this.instance_2.setTransform(115.9,146,0.02,1);
        this.instance_2._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({scaleX:0.76,x:97.5},3).wait(1).to({scaleX:1,x:91.4},0).wait(30).to({scaleX:0.02,x:115.9},4).to({_off:true},1).wait(106).to({_off:false},0).to({scaleX:0.8,x:96.3},4).wait(1).to({scaleX:1,x:91.4},0).wait(30).to({scaleX:0.02,x:115.9},5).to({_off:true},1).wait(6));


        // Layer 24
        this.instance_1 = new Library.ActiveTile();
        this.instance_1.setTransform(165.9, 146, 0.02, 1);
        this.instance_1._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(30).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(72).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(67).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 22
        this.instance_2 = new Library.ActiveTile();
        this.instance_2.setTransform(215.9, 46, 0.02, 1);
        this.instance_2._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(30).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(37).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(99).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(6));

        // Layer 20
        this.instance_3 = new Library.InactiveTile();
        this.instance_3.setTransform(215.9, 146, 0.02, 1);
        this.instance_3._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(38).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(213).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(1));

        // Layer 18
        this.instance_4 = new Library.InactiveTile();
        this.instance_4.setTransform(165.9, 146, 0.02, 1);
        this.instance_4._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_4).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(25).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(64).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(80));

        // Layer 16
        this.instance_5 = new Library.InactiveTile();
        this.instance_5.setTransform(215.9, 96, 0.02, 1);
        this.instance_5._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_5).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(214).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 14
        this.instance_6 = new Library.InactiveTile();
        this.instance_6.setTransform(115.9, 146, 0.02, 1);
        this.instance_6._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_6).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(27).to({scaleX: 0.02, x: 115.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 97.5}, 3).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(97).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(47));

        // Layer 12
        this.instance_7 = new Library.InactiveTile();
        this.instance_7.setTransform(215.9, 46, 0.02, 1);
        this.instance_7._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_7).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(27).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(29).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(115));

        // Layer 10
        this.instance_8 = new Library.InactiveTile();
        this.instance_8.setTransform(165.9, 96, 0.02, 1);
        this.instance_8._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_8).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(5));

        // Layer 8
        this.instance_9 = new Library.InactiveTile();
        this.instance_9.setTransform(115.9, 96, 0.02, 1);
        this.instance_9._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_9).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 6
        this.instance_10 = new Library.InactiveTile();
        this.instance_10.setTransform(165.9, 46, 0.02, 1);
        this.instance_10._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_10).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 4
        this.instance_11 = new Library.InactiveTile();
        this.instance_11.setTransform(115.9, 46, 0.02, 1);
        this.instance_11._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_11).wait(27).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(11));

        // Layer 2
        this.instance_12 = new Library.sprite83();
        this.instance_12.setTransform(73.2, 27.8);
        this.instance_12.shadow = new createjs.Shadow("#999999", 0, 0, 10);

        this.timeline.addTween(createjs.Tween.get({}).to({state: [
            {t: this.instance_12}
        ]}).wait(263));

        // Layer 1
        this.instance_13 = new Library.shape81("synched", 0);

        this.timeline.addTween(createjs.Tween.get({}).to({state: [
            {t: this.instance_13}
        ]}).wait(263));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0, 0, 332.9, 242);

    (Library.ActiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.sprite37();
        this.instance.setTransform(0, 0, 2.33, 2.33);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.InactiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.sprite85();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.sprite37 = function () {
        this.initialize();

        // Layer 2
        this.instance = new Library.sprite36();
        this.instance.setTransform(10.7, 10.7);

        // Layer 1
        this.instance_1 = new Library.shape34("synched", 0);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 21.5, 21.5);

    (Library.sprite36 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape35("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-10.6, -10.6, 21.5, 21.5);

    (Library.shape35 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#E34502").ss(1, 0, 0, 3, true).p("ABrBrIjVAAIAAjVIDVAAg");

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#B32200").s().p("AhqBrIAAjVIDVAAIAADVg");

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-10.6, -10.6, 21.5, 21.5);

    (Library.shape34 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#FEB89A").ss(1, 0, 0, 3, true).p("AhqhqIDVAAIAADVIjVAAg");
        this.shape.setTransform(10.7, 10.7);

        this.addChild(this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 21.5, 21.5);

    (Library.sprite85 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape84("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.shape84 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#AAAAAA").ss(1, 0, 0, 3, true).p("AD6j5IAAHzInzAAIAAnzg");
        this.shape.setTransform(25, 25);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#E6E6E6").s().p("Aj5D6IAAnzIHzAAIAAHzg");
        this.shape_1.setTransform(25, 25);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.sprite83 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape82("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 186.5, 186.5);

    (Library.shape82 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AMPubI4cAAQiOAAAACNIAAYdQAACNCOAAIYcAAQCNAAAAiNIAA4dQAAiNiNAAg");
        this.shape.setTransform(93.3, 93.3);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AsNOcQiOAAAAiOIAA4cQAAiMCOgBIYbAAQCOABAACMIAAYcQAACOiOAAg");
        this.shape_1.setTransform(93.3, 93.3);

        this.shape_2 = new createjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AsVOkQiOAAAAiOIAA4rQAAiOCOAAIYrAAQCOAAAACOIAAYrQAACOiOAAgAubsOIAAYcQAACOCOAAIYbAAQCOAAAAiOIAA4cQAAiMiOgBI4bAAQiOABAACMg");
        this.shape_2.setTransform(93.3, 93.3);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 186.5, 186.5);

    (Library.shape81 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 0, 0, 3, true).p("AaAy5MgyNAAAQhyAAAAByMAAAAkBMAyMAAAQBzAAAAhyg");
        this.shape.setTransform(166.4, 121);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A5/S6MAAAgkAQAAhzByAAMAyNAAAMAAAAkAQAABzhzAAg");
        this.shape_1.setTransform(166.4, 121);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 332.9, 242);

    (Library.text74 = function () {
        this.initialize();

        // Layer 1
        this.text = new createjs.Text("Tiles:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 61;
        this.text.setTransform(49.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(49.9, -3.7, 65.3, 45.8);

    (Library.score_mc = function () {
        this.initialize();

        // Layer 5
        this.instance = new Library.sprite73();
        this.instance.setTransform(24.4, 7.7);

        // Layer 4
        this.instance_1 = new Library.shape71("synched", 0);
        this.instance_1.setTransform(-251.8, -0.5);

        // Layer 3
        this.myScore = new createjs.Text("9000", "bold 18px Trebuchet MS", "#990A37");
        this.myScore.lineHeight = 18;
        this.myScore.lineWidth = 77;
        this.myScore.setTransform(97.5, 0.1);

        // Layer 2
        this.instance_2 = new Library.text118("synched", 0);
        this.instance_2.setTransform(13.2, 2.7);

        // Layer 1
        this.instance_3 = new Library.shape117("synched", 0);

        this.addChild(this.instance_3, this.instance_2, this.myScore, this.instance_1, this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, -1.1, 178.2, 45.8);

    return Library;
})
;
