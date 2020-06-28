import { forwardRef } from 'react'
import styled from 'styled-components'
import SkillItem from './SkillItem'

const SKILLS_LIST = [
  {
    id: 1,
    name: 'HTML',
    icon: '/html.png',
  },
  {
    id: 2,
    name: 'CSS',
    icon: '/css.png',
  },
  {
    id: 3,
    name: 'Javascript',
    icon: '/javascript.png',
  },
  {
    id: 4,
    name: 'React',
    icon: '/react.png',
  },
  {
    id: 5,
    name: 'NodeJS',
    icon: '/nodejs.png',
  },
  {
    id: 6,
    name: 'Webpack',
    icon: '/webpack.png',
  },
  {
    id: 7,
    name: 'ExpressJS',
    icon: '/express.png',
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin-top: 56px;

  @media screen and (min-width: 768px) {
    padding: 0 104px;
    margin-top: 102px;
  }

  @media screen and (min-width: 1000px) {
    padding: 0 164px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 220px;
    margin-top: 192px;
  }

  h2 {
    font-family: 'Rajdhani';
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.5px;
    text-align: center;
    text-transform: uppercase;
    color: #181720;

    @media screen and (min-width: 1200px) {
      font-size: 24px;
      letter-spacing: 3px;
    }
  }

  p {
    font-family: 'Titillium Web';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #6c727c;
    margin-bottom: 0;

    @media screen and (min-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1200px) {
      max-width: 575px;
    }
  }
`

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 32px;

  @media screen and (min-width: 1200px) {
    margin-top: 56px;
  }
`

const Skills = (_props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h2>Technology that i used</h2>
      <p>
        These are the technologies that I have been using from front-end to back-end. I
        believe as a programmer we should catch up to the recent technology, because as
        the time goes on, each tools will be evolved to be better and the new one will be
        risen, and we as a programmer should adapt to it
      </p>
      <IconList>
        {SKILLS_LIST.map(({ id, icon, name }) => (
          <SkillItem key={id} icon={icon} name={name} />
        ))}
      </IconList>
    </Wrapper>
  )
}

export default forwardRef(Skills)
