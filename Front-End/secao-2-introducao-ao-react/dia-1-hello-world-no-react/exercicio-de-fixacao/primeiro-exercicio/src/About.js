import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {`Rosilene Silva`}
        </h1>
        <p>
          {`Olá, sou estudante de desenvolvimento web na trybe, pretendo em breve me formar e atuar na área!`}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{`Html`}</li>
          <li>{`Css`}</li>
          <li>{`JavaScript`}</li>
        </ul>
      </div>
    );
  }
}

export default About;