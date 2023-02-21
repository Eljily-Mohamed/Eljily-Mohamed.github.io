/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import tic_tac_toe from '../../assets/recentprojects/tic_tac_toe.png';
import weather from '../../assets/recentprojects/weather.png';
import todo_list from '../../assets/recentprojects/todo_list.png';
import quiz from '../../assets/recentprojects/quiz.png';
import chess from '../../assets/recentprojects/chess.png';
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'tic-tac-toe game', 
      description: `small tic-tac-toe game  3×3 built using
      ReactJs Tic-Tac-Toe is one of the oldest and most popular board games in the world.`,
      alter: 'VeriTru Project',
      image: `${tic_tac_toe}`,
    },
    { 
      id: 3,
      title: 'weather Project', 
      description: `Web App to see the weather forecast in your city , connect with weatherAPI. using 
      ReactJs , Api Fetch`,
      alter: 'weather Project',
      image: `${weather}`,
    },
    { 
      id: 4,
      title: 'Todo-List Manager Project', 
      description: `A Todo-List Manager project Using a shell script
      Simple todo list extension. You can add and remove tasks on your list..`,
      alter: 'todo_list Project',
      image: `${todo_list}`,
    },
    { 
      id: 5,
      title: 'Quiz Project', 
      description: `A website where you can play with simple quizzes and learn more about Mauritania..`,
      alter: 'Quiz Project',
      image: `${quiz}`,
    },
     { 
      id: 6,
      title: 'Chess Game', 
      description: `Chess real-time is a great game. It’s even better if you’re good at it. Regrettably, 
      I’ve never taken the time to learn chess strategy, so I decided to rely on the power of computation and game theory instead! 
      As a fun side project, I have implemented a simple chess AI using React and Socket.io.`,
      image: `${chess}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
