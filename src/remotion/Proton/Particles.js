import React from "react";
import Proton from "proton-engine";
import RAFManager from "raf-manager";
// import TweenLite from "gsap/TweenLite";
import Canvas from "./Canvas";
import dot from "./dot";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Audio
} from "remotion";

export default class Particles extends React.Component {
  constructor(props) {
    super(props);

    this.loaded = false;
    this.center = { x: 0, y: 0 };
    this.conf = { radius: 170, tha: 0 };
    this.attractionBehaviours = [];
    this.renderProton = this.renderProton.bind(this);
    // this.handleMouseDown = this.handleMouseDown.bind(this);
    // this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.createProton = this.createProton.bind(this);
    this.handleCanvasInited = this.handleCanvasInited.bind(this);
  }

  handleCanvasInited(canvas) {
    this.createProton(canvas);
    //RAFManager.add(this.renderProton);
    this.loaded = true;
  }

  componentWillUnmount() {
    try {
      RAFManager.remove(this.renderProton);
      const emitter1 = this.proton.emitters[0];
      //const emitter2 = this.proton.emitters[1];
      emitter1.destroy();
      //emitter2.destroy();
      this.proton.destroy();
    } catch (e) {}
  }

  createProton(canvas) {
    const proton = new Proton();
    const emitter1 = this.createImageEmitter({
      canvas,
      x: canvas.width / 2 + this.conf.radius,
      y: canvas.height / 2,
      startColor: "#4F1500",
      endColor: "#0029FF"
    });
    // const emitter2 = this.createImageEmitter({
    //   canvas,
    //   x: canvas.width / 2 - this.conf.radius,
    //   y: canvas.height / 2,
    //   startColor: "#004CFE",
    //   endColor: "#6600FF"
    // });
    //var proton2  = new Proton;
    
    proton.addEmitter(emitter1);
    // proton.addEmitter(emitter2);

    const renderer = new Proton.WebGlRenderer(canvas);
    renderer.blendFunc("SRC_ALPHA", "ONE");
    
    proton.addRenderer(renderer);

    this.proton = proton;
    this.canvas = canvas;
    this.renderer = renderer;
  }

  createImageEmitter({ canvas, x, y, startColor, endColor }) {
    const emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(
      new Proton.Span(5, 7),
      new Proton.Span(0.01, 0.02)
    );

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Life(1));
    emitter.addInitialize(new Proton.Body([dot], 32));
    emitter.addInitialize(new Proton.Radius(40));

    emitter.addBehaviour(new Proton.Alpha(1, 0));
    emitter.addBehaviour(new Proton.Color(startColor, endColor));
    emitter.addBehaviour(new Proton.Scale(3.5, 0.1));
    emitter.addBehaviour(
      new Proton.CrossZone(
        new Proton.RectZone(0, 0, canvas.width, canvas.height),
        "dead"
      )
    );
    const attractionBehaviour = new Proton.Attraction(this.center, 0, 0);
    emitter.addBehaviour(attractionBehaviour);
    this.attractionBehaviours.push(attractionBehaviour);

    emitter.p.x = x;
    emitter.p.y = y;
    emitter.emit();

    return emitter;
  }

  emitterMove(time) {
    const emitter1 = this.proton.emitters[0];
    //const emitter2 = this.proton.emitters[1];

    this.coordinateRotation({
      emitter: emitter1,
      width: this.canvas.width,
      height: this.canvas.height,
      tha: time*Math.PI / 2
    });

    // this.coordinateRotation({
    //   emitter: emitter2,
    //   width: this.canvas.width,
    //   height: this.canvas.height,
    //   tha: -time*Math.PI / 2
    // });

    //this.conf.tha += time;
  }

  coordinateRotation({ emitter, width, height, tha }) {
    emitter.p.x = width / 2 + this.conf.radius * Math.sin(tha + this.conf.tha);
    emitter.p.y = height / 2 + this.conf.radius * Math.cos(tha + this.conf.tha);
  }

  handleResize(width, height) {
    this.renderer.resize(width, height);
  }

//   handleMouseDown() {
//     this.center.x = this.canvas.width / 2;
//     this.center.y = this.canvas.height / 2;

//     for (var i = 0; i < 2; i++)
//       this.attractionBehaviours[i].reset(this.center, 120, 200);

//     TweenLite.to(this.conf, 2, {
//       radius: 10,
//       onComplete: () => TweenLite.to(this.conf, 1, { radius: 170 })
//     });
//   }

//   handleMouseUp() {
//     setTimeout(() => {
//       for (var i = 0; i < 2; i++)
//         this.attractionBehaviours[i].reset(this.center, 0, 0);
//     }, 1000);
//   }

  renderProton(time) {
    this.emitterMove(time);
    this.proton.update(time);
  }
  
  render() {
    if(this.loaded)
        this.renderProton(this.props.time);
    return (
      <Canvas
        globalCompositeOperation="darker"
        onCanvasInited={this.handleCanvasInited}
        // onMouseDown={this.handleMouseDown}
        // onMouseUp={this.handleMouseUp}
        onResize={this.handleResize}
      />
    );
  }
}
