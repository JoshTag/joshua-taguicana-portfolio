import React, { Component } from "react";
import Plx from "react-plx";
import "./Skills.scss";

// img imports
import css from "../../Assets/Dev Icons/css3/css3-original-wordmark.svg";
import html from "../../Assets/Dev Icons/html5/html5-original-wordmark.svg";
import git from "../../Assets/Dev Icons/git/git-original.svg";
import js from "../../Assets/Dev Icons/javascript/javascript-original.svg";
import mongo from "../../Assets/Dev Icons/mongodb/mongodb-original-wordmark.svg";
import mySQL from "../../Assets/Dev Icons/mysql/mysql-original-wordmark.svg";
import node from "../../Assets/Dev Icons/nodejs/nodejs-original-wordmark.svg";
import react from "../../Assets/Dev Icons/react/react-original.svg";
import scss from "../../Assets/Dev Icons/sass/sass-original.svg";
import vue from "../../Assets/Dev Icons/vuejs/vuejs-original-wordmark.svg";

const parallaxCSS = [
  {
    start: 'self',
    end: 'self',
    startOffset: "75vh",
    endOffset: 950,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -200,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: -200,
        property: "translateY"
      },
    ]
  }
];

const parallaxGit = [
  {
    start: 'self',
    end: 'self',
    startOffset: "80vh",
    endOffset: 700,
    properties: [
      {
        startValue: 0,
        endValue: -250,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -220,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 1,
        property: "scale"
      }
    ]
  }
];

const parallaxHTML = [
  {
    start: 'self',
    end: 'self',
    startOffset: "78vh",
    endOffset: 750,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: "rotateY"
      },
      {
        startValue: 0,
        endValue: 180,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -150,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -50,
        property: "translateX"
      }
    ]
  }
];

const parallaxJS = [
  {
    start: 'self',
    end: 'self',
    startOffset: "75vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: 20,
        property: "blur"
      },
      {
        startValue: 0,
        endValue: 20,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: -130,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -360,
        property: "rotate"
      }
    ]
  }
];

const parallaxMongo = [
  {
    start: 'self',
    end: 'self',
    startOffset: "50vh",
    endOffset: "60vh",
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scaleX"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "60vh",
    endOffset: "70vh",
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scaleY"
      },
      {
        startValue: 2,
        endValue: 1,
        property: "scaleX"
      },
      {
        startValue: 0,
        endValue: -45,
        property: "rotate"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "65vh",
    endOffset: "110vh",
    properties: [
      {
        startValue: 0,
        endValue: -600,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -600,
        property: "translateX"
      }
    ]
  }
];

const parallaxMySQL = [
  {
    start: 'self',
    end: 'self',
    startOffset: "60vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -170,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -140,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: -60,
        property: "skew"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "65vh",
    endOffset: "80vh",
    properties: [

    ]
  }
];

const parallaxNode = [
  {
    start: 'self',
    end: 'self',
    startOffset: "70vh",
    endOffset: 900,
    properties: [
      {
        startValue: 0,
        endValue: 140,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: 275,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -205,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -360,
        property: "rotateX"
      }
    ]
  }
];

const parallaxReact = [
  {
    start: 'self',
    end: 'self',
    startOffset: "45vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 1,
        endValue: 3,
        property: "scale"
      },
      {
        startValue: 0,
        endValue: 365,
        property: "rotate"
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
      {
        startValue: 1,
        endValue: 100,
        property: "translateY"
      }
    ]
  }
];

const parallaxSass = [
  {
    start: 'self',
    end: 'self',
    startOffset: "65vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "rotateY"
      },
      {
        startValue: 0,
        endValue: -50,
        property: "rotate"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "70vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 20,
        property: "translateX"
      }
    ]
  },
];

const parallaxVue = [
  {
    start: 'self',
    end: 'self',
    startOffset: "60vh",
    endOffset: "70vh",
    properties: [
      {
        startValue: 0,
        endValue: -365,
        property: "rotateY"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "60vh",
    endOffset: "120vh",
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 30,
        property: "translateX"
      },
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "70vh",
    endOffset: "80vh",
    properties: [
      {
        startValue: 0,
        endValue: -365,
        property: "rotateY"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "80vh",
    endOffset: "90vh",
    properties: [
      {
        startValue: 0,
        endValue: -365,
        property: "rotateY"
      }
    ]
  },
  {
    start: 'self',
    end: 'self',
    startOffset: "90vh",
    endOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -365,
        property: "rotateY"
      }
    ]
  }
];

export class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer" id="skills">
        <h2 className="skillsContainer__header">Skills</h2>

        <div className="skillsContainer__icons">
          <Plx parallaxData={parallaxCSS}>
            <img className="skillsContainer__icons--img" src={css} />
          </Plx>

          <Plx parallaxData={parallaxHTML}>
            <img className="skillsContainer__icons--img" src={html} />
          </Plx>

          <Plx parallaxData={parallaxGit}>
            <img className="skillsContainer__icons--img" src={git} />
          </Plx>

          <Plx parallaxData={parallaxJS}>
            <img className="skillsContainer__icons--img" src={js} />
          </Plx>

          <Plx parallaxData={parallaxNode}>
            <img className="skillsContainer__icons--img" src={node} />
          </Plx>

          <Plx parallaxData={parallaxMySQL}>
            <img className="skillsContainer__icons--img" src={mySQL} />
          </Plx>

          <Plx parallaxData={parallaxMongo}>
            <img className="skillsContainer__icons--img" src={mongo} />
          </Plx>

          <Plx parallaxData={parallaxReact}>
            <img className="skillsContainer__icons--img" src={react} />
          </Plx>

          <Plx parallaxData={parallaxSass}>
            <img className="skillsContainer__icons--img" src={scss} />
          </Plx>

          <Plx parallaxData={parallaxVue}>
            <img className="skillsContainer__icons--img" src={vue} />
          </Plx>
        </div>
      </div>
    );
  }
}

export default Skills;
