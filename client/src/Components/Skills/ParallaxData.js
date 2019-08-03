const parallaxCSS = [
  {
    start: 1350,
    end: 1600,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -100,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -100,
        property: "translateX"
      },
      {
        startValue: "#0028c9",
        endValue: "#fead7b",
        property: "color",
        unit: ""
      }
    ]
  }
];

const parallaxGit = [
  {
    start: 1400,
    end: 1800,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -30,
        property: "skewY"
      },
      {
        startValue: 0,
        endValue: -240,
        property: "translateY"
      }
    ]
  }
];

const parallaxHTML = [
  {
    start: 1450,
    end: 1550,
    properties: [
      {
        startValue: 0,
        endValue: 75,
        property: "rotateY"
      },
      {
        startValue: 0,
        endValue: 120,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -100,
        property: "translateY"
      }
    ]
  }
];

const parallaxJS = [
  {
    start: 1350,
    end: 1700,
    properties: [
      {
        startValue: 0,
        endValue: 15,
        property: "blur"
      },
      {
        startValue: 0,
        endValue: 275,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: -275,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -75,
        property: "translateY"
      }
    ]
  }
];

const parallaxMongo = [
  {
    start: 1400,
    end: 1450,
    properties: [
      {
        startValue: 1,
        endValue: 2.5,
        property: "scaleX"
      }
    ]
  },
  {
    start: 1400,
    end: 1550,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scaleY"
      },
      {
        startValue: 0,
        endValue: 45,
        property: "rotate"
      }
    ]
  },
  {
    start: 1500,
    end: 1600,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 200,
        property: "translateX"
      }
    ]
  }
];

const parallaxMySQL = [
  {
    start: 1300,
    end: 1700,
    properties: [
      {
        startValue: 0,
        endValue: -45,
        property: "skew"
      },
      {
        startValue: 0,
        endValue: -90,
        property: "translateX"
      }
    ]
  },
  {
    start: 1500,
    end: 1700,
    properties: [
      {
        startValue: 0,
        endValue: -150,
        property: "translateY"
      }
    ]
  }
];

const parallaxNode = [
  {
    start: 1300,
    end: 1900,
    properties: [
      {
        startValue: 0,
        endValue: -140,
        property: "translateX"
      },
      {
        startValue: 0,
        endValue: -275,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: -205,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: -365,
        property: "rotateX"
      }
    ]
  }
];

const parallaxReact = [
  {
    start: 1300,
    end: 1750,
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
    start: 1300,
    end: 1800,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: "translateX"
      }
    ]
  },
  {
    start: 1400,
    end: 1800,
    properties: [
      {
        startValue: 0,
        endValue: -150,
        property: "translateY"
      }
    ]
  },
  {
    start: 1350,
    end: 1700,
    properties: [
      {
        startValue: 0,
        endValue: -50,
        property: "rotate"
      }
    ]
  }
];

const parallaxVue = [
  {
    start: 1300,
    end: 2000,
    properties: [
      {
        startValue: 0,
        endValue: -365,
        property: "rotateY"
      },
      {
        startValue: 0,
        endValue: -45,
        property: "skew"
      }
    ]
  },
  {
    start: 1400,
    end: 1800,
    properties: [
      {
        startValue: 0,
        endValue: -400,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 800,
        property: "translateX"
      }
    ]
  }
];

export default {
  parallaxCSS,
  parallaxHTML,
  parallaxGit,
  parallaxJS,
  parallaxMongo,
  parallaxMySQL,
  parallaxNode,
  parallaxReact,
  parallaxSass,
  parallaxVue
};
