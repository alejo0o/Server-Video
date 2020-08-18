import '@tensorflow/tfjs';
import '../styles/spinner.css';

import * as cocoSsd from '@tensorflow-models/coco-ssd';

import { Canvas, CocoDiv, Main, Video } from '../styles/CocoContainer';
import React, { Component } from 'react';

import AnyChart from 'anychart-react';
import Nprogress from 'nprogress';
import anychart from 'anychart';

class Coco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      table: anychart.data.table('x'),
      chart: anychart.stock(),
    };
  }
  videoRef = React.createRef();
  canvasRef = React.createRef();

  componentDidMount() {
    Nprogress.start();
    document.getElementById('lds-ring').style.visibility = 'visible';
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: 'user',
          },
        })
        .then((stream) => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then((values) => {
          document.getElementById('lds-ring').style.visibility = 'visible';
          document.getElementById('canvas');
          this.detectFrame(this.videoRef.current, values[0]);
          document.getElementById('lds-ring').style.visibility = 'hidden';
          document.getElementById('video').style.visibility = 'visible';
          document.getElementById('canvas').style.visibility = 'visible';
          Nprogress.done();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      this.renderPredictions(predictions);
      setTimeout(this.graph(predictions), 5000);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  graph = (predictions) => {
    var d = new Date(),
      dformat =
        [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') +
        ' ' +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    predictions.forEach((prediction) => {
      var mappingPerson = this.state.table.mapAs({ x: 'x', value: 'person' });
      if (prediction.class === 'person' && prediction.score !== 'undefined') {
        this.state.table.addData([
          { x: dformat.toString(), person: prediction.score },
        ]);
        var series = this.state.chart.plot(0).line(mappingPerson);
        series.name('Person');
        this.state.chart.draw();
      } else if (
        prediction.class === 'bed' &&
        prediction.score !== 'undefined'
      ) {
        var mappingBed = this.state.table.mapAs({ x: 'x', value: 'bed' });
        this.state.table.addData([
          { x: dformat.toString(), bed: prediction.score },
        ]);
        var series = this.state.chart.plot(1).line(mappingBed);
        series.name('Bed');
        this.state.chart.draw();
      }
    });
  };
  renderPredictions = (predictions) => {
    const ctx = this.canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';
    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = '#00FFFF';
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000';
      ctx.fillText(prediction.class, x, y);
    });
  };
  render() {
    return (
      <CocoDiv>
        <div
          id="lds-ring"
          ref={this.loaderRed}
          style={{ visibility: 'hidden' }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Main>
          <Video
            id="video"
            autoPlay
            playsInline
            muted
            ref={this.videoRef}
            width="600"
            height="500"
            style={{ visibility: 'hidden' }}
          />
          <Canvas
            id="canvas"
            ref={this.canvasRef}
            width="600"
            height="500"
            style={{ visibility: 'hidden' }}
          />
        </Main>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <AnyChart
          width={800}
          height={600}
          instance={this.state.chart}
          title="Stock demo"
        />
      </CocoDiv>
    );
  }
}

export default Coco;
