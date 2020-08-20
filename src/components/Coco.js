import '@tensorflow/tfjs';
import '../styles/spinner.css';

import * as cocoSsd from '@tensorflow-models/coco-ssd';

import {
  Canvas,
  CocoDiv,
  Graphic,
  Main,
  MainGraphic,
  Play,
  Stop,
  Video,
} from '../styles/CocoContainer';
import React, { Component } from 'react';

import AnyChart from 'anychart-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nprogress from 'nprogress';
import anychart from 'anychart';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import videoP from './test.mp4';

library.add(fas);

class Coco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablePerson: anychart.data.table('x'),
      tableBicycle: anychart.data.table('x'),
      tableMotorcycle: anychart.data.table('x'),
      tableAirplane: anychart.data.table('x'),
      tableBus: anychart.data.table('x'),
      tableCar: anychart.data.table('x'),
      chart: anychart.stock(),
      verificacion: true,
    };
  }
  videoRef = React.createRef();
  canvasRef = React.createRef();

  componentDidMount() {
    Nprogress.start();
    document.getElementById('lds-ring').style.visibility = 'visible';
    const webCamPromise = new Promise((resolve) => {
      this.videoRef.current.onloadedmetadata = () => {
        resolve();
      };
    });
    const modelPromise = cocoSsd.load();
    Promise.all([modelPromise, webCamPromise])
      .then((values) => {
        document.getElementById('lds-ring').style.visibility = 'visible';
        document.getElementById('canvas');
        this.detectFrame(this.videoRef.current, values[0]);
        this.toogleGraph(this.videoRef.current, values[0]);
        document.getElementById('lds-ring').style.visibility = 'hidden';
        document.getElementById('video').style.visibility = 'visible';
        document.getElementById('canvas').style.visibility = 'visible';
        Nprogress.done();
      })
      .catch((error) => {
        console.error(error);
      });
    // }
  }

  toogleGraph = (video, model) => {
    model.detect(video).then((predictions) => {
      requestAnimationFrame(() => {
        if (this.state.verificacion) {
          setTimeout(this.graph(predictions), 5000);
        }
        this.toogleGraph(video, model);
      });
    });
  };

  detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      this.renderPredictions(predictions);
      //setTimeout(this.graph(predictions), 5000);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  graph = (predictions) => {
    var series;
    var d = new Date(),
      dformat =
        [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') +
        ' ' +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    predictions.forEach((prediction) => {
      var mappingPerson = this.state.tablePerson.mapAs({
        x: 'x',
        value: 'person',
      });
      var mappingBicycle = this.state.tableBicycle.mapAs({
        x: 'x',
        value: 'bicycle',
      });
      var mappingCar = this.state.tableCar.mapAs({ x: 'x', value: 'car' });
      var mappingMotorcycle = this.state.tableMotorcycle.mapAs({
        x: 'x',
        value: 'motorcycle',
      });
      var mappingAirplane = this.state.tableAirplane.mapAs({
        x: 'x',
        value: 'airplane',
      });
      var mappingBus = this.state.tableBus.mapAs({ x: 'x', value: 'bus' });
      if (prediction.class === 'person') {
        this.state.tablePerson.addData([
          { x: dformat.toString(), person: prediction.score },
        ]);
        series = this.state.chart.plot(0).stepLine(mappingPerson);
        series.name('Person');
        series.stroke('#44b4c4');
      } else if (prediction.class === 'bicycle') {
        this.state.tableBicycle.addData([
          { x: dformat.toString(), bicycle: prediction.score },
        ]);
        series = this.state.chart.plot(1).stepLine(mappingBicycle);
        series.name('Bicycle');
        series.stroke('#5ebdb2');
      } else if (prediction.class === 'car') {
        this.state.tableCar.addData([
          { x: dformat.toString(), car: prediction.score },
        ]);
        series = this.state.chart.plot(2).stepLine(mappingCar);
        series.name('Car');
        series.stroke('#f0ddaa');
      } else if (prediction.class === 'motorcycle') {
        this.state.tableMotorcycle.addData([
          { x: dformat.toString(), motorcycle: prediction.score },
        ]);
        series = this.state.chart.plot(3).stepLine(mappingMotorcycle);
        series.name('Motorcycle');
        series.stroke('#e47c5d');
      } else if (prediction.class === 'airplane') {
        this.state.tableAirplane.addData([
          { x: dformat.toString(), airplane: prediction.score },
        ]);
        series = this.state.chart.plot(4).stepLine(mappingAirplane);
        series.name('Airplane');
        series.stroke('#e42d40');
      } else if (prediction.class === 'bus') {
        this.state.tableBus.addData([
          { x: dformat.toString(), bus: prediction.score },
        ]);
        series = this.state.chart.plot(5).stepLine(mappingBus);
        series.name('Bus');
        series.stroke('#142b3b');
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
      <div>
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
              src={videoP}
            >
              <source src="./test.mp4" type="video/mp4" />
            </Video>
            <Canvas
              id="canvas"
              ref={this.canvasRef}
              width="600"
              height="500"
              style={{ visibility: 'hidden' }}
            />
          </Main>
        </CocoDiv>
        <hr />
        <MainGraphic>
          <Graphic>
            <AnyChart
              width={800}
              height={600}
              instance={this.state.chart}
              title="Coco SSD"
            />
          </Graphic>
          <Play
            onClick={() => {
              this.state.verificacion = true;
            }}
          >
            <FontAwesomeIcon icon={['fas', 'play-circle']} />
          </Play>
          <Stop
            onClick={() => {
              this.state.verificacion = false;
            }}
          >
            <FontAwesomeIcon icon={['fas', 'stop-circle']} />
          </Stop>
        </MainGraphic>
      </div>
    );
  }
}

export default Coco;
