import React, { FC } from 'react';
import Education from './education';
import Experience from './experience';
import Hobbies from './hobbies';
import Skills from './skills';

const Content: FC = () => (
  <>
    <Experience />
    <Skills />
    <Education />
    <Hobbies />
  </>
);

export default Content;
