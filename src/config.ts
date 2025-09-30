export const config = {
  overlay: {
    base: {
      role: {
        left: 0,
        top: 0
      },
      country: {
        top: 214,
        left: 135
      },
      team: {
        top: 360,
        left: 120
      },
      stats: {
        aim: {
          top: 120,
          left: -65
        },
        hs: {
          top: 190,
          left: -65
        },
        movement: {
          top: 260,
          left: -65
        },
        aggression: {
          top: 120,
          left: 65
        },
        acs: {
          top: 190,
          left: 65
        },
        gamesense: {
          top: 260,
          left: 65
        }
      }
    },
    'triple crown': {
      role: {
        left: 0,
        top: 30
      },
      country: {
        top: 244,
        left: 135
      },
      team: {
        top: 390,
        left: 120
      },
      stats: {
        aim: {
          top: 120,
          left: -65
        },
        hs: {
          top: 190,
          left: -65
        },
        movement: {
          top: 260,
          left: -65
        },
        aggression: {
          top: 120,
          left: 65
        },
        acs: {
          top: 190,
          left: 65
        },
        gamesense: {
          top: 260,
          left: 65
        }
      }
    },
    masters: {
      role: {
        left: 0,
        top: 0
      },
      country: {
        top: 214,
        left: 135
      },
      team: {
        top: 360,
        left: 120
      },
      stats: {
        aim: {
          top: 120,
          left: -65
        },
        hs: {
          top: 190,
          left: -65
        },
        movement: {
          top: 260,
          left: -65
        },
        aggression: {
          top: 120,
          left: 65
        },
        acs: {
          top: 190,
          left: 65
        },
        gamesense: {
          top: 260,
          left: 65
        }
      }
    },
    champions: {
      role: {
        left: 0,
        top: 0
      },
      country: {
        top: 214,
        left: 135
      },
      team: {
        top: 360,
        left: 120
      },
      stats: {
        aim: {
          top: 120,
          left: -65
        },
        hs: {
          top: 190,
          left: -65
        },
        movement: {
          top: 260,
          left: -65
        },
        aggression: {
          top: 120,
          left: 65
        },
        acs: {
          top: 190,
          left: 65
        },
        gamesense: {
          top: 260,
          left: 65
        }
      }
    }
  },
  ovr: {
    base: {
      left: -215,
      top: -280
    },
    'triple crown': {
      left: -215,
      top: -250
    },
    masters: {
      left: -215,
      top: -280
    },
    champions: {
      left: -215,
      top: -280
    }
  },
  stats: {
    base: {
      aim: {
        left: -210,
        top: 120
      },
      hs: {
        left: -180,
        top: 190
      },
      movement: {
        left: -210,
        top: 260
      },
      aggression: {
        left: 120,
        top: 120
      },
      acs: {
        left: 120,
        top: 190
      },
      gamesense: {
        left: 120,
        top: 260
      }
    },
    'triple crown': {
      aim: {
        left: -210,
        top: 120
      },
      hs: {
        left: -180,
        top: 190
      },
      movement: {
        left: -210,
        top: 260
      },
      aggression: {
        left: 120,
        top: 120
      },
      acs: {
        left: 120,
        top: 190
      },
      gamesense: {
        left: 120,
        top: 260
      }
    },
    masters: {
      aim: {
        left: -210,
        top: 120
      },
      hs: {
        left: -180,
        top: 190
      },
      movement: {
        left: -210,
        top: 260
      },
      aggression: {
        left: 120,
        top: 120
      },
      acs: {
        left: 120,
        top: 190
      },
      gamesense: {
        left: 120,
        top: 260
      }
    },
    champions: {
      aim: {
        left: -210,
        top: 120
      },
      hs: {
        left: -180,
        top: 190
      },
      movement: {
        left: -210,
        top: 260
      },
      aggression: {
        left: 120,
        top: 120
      },
      acs: {
        left: 120,
        top: 190
      },
      gamesense: {
        left: 120,
        top: 260
      }
    }
  }
} as const

export type Key = keyof typeof config.overlay