import React, { FC } from 'react';
import {
  EducationType,
  ExperienceType,
  HobbiesType,
  SkillsType,
} from '../types/types';
import Education from './education';
import Experience from './experience';
import Hobbies from './hobbies';
import Skills from './skills';

type Props = {
  data: {
    education: EducationType;
    experience: ExperienceType;
    hobbies: HobbiesType;
    skills: SkillsType;
  };
};

const Content: FC<Props> = ({
  data: { education, experience, hobbies, skills },
}) => (
  <>
    <Skills skills={skills} />
    <Experience experience={experience} />
    <Education education={education} />
    <Hobbies hobbies={hobbies} />
  </>
);

export default Content;
