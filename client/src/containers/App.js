import React from 'react';
import Layout from '../components/Layout';
import Coco from '../components/Coco';
import Demos from '../components/Demos';

function App() {
  return (
    <>
      <Layout>
        <Demos
          title='COCO-SSD'
          description='This model detects objects defined in the COCO dataset, 
          which is a large-scale object detection, segmentation, and captioning dataset. 
          The model is capable of detecting 80 classes of objects. (SSD stands for Single Shot MultiBox Detection).'
        />
        <Coco />
      </Layout>
    </>
  );
}
export default App;
