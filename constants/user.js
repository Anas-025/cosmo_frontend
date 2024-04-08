const user = {
  id: "alfjalsjdf",
  name: "John Doe",
  isAdmin: false,
  clusters: {
    asdfsd: {
      title: "Comet",
      type: "shared",
      charts: [
        {
          id: "asdfasf",
          title: "Chart 1",
          type: "line",
          position: {
            x: 0,
            y: 0,
            w: 6,
            h: 6,
          },
        },
        {
          id: "asdfasf",
          title: "Chart 2",
          type: "bar",
          position: {
            x: 6,
            y: 0,
            w: 6,
            h: 6,
          },
        },
      ],
    },
    asdfds: {
      title: "Pulsar",
      type: "private",
      charts: [
        {
          id: "asdfasf",
          title: "Chart 3",
          type: "line",
          position: {
            x: 0,
            y: 0,
            w: 6,
            h: 6,
          },
        },
        {
          id: "asdfasf",
          title: "Chart 4",
          type: "bar",
          position: {
            x: 6,
            y: 0,
            w: 6,
            h: 6,
          },
        },
      ],
    },
  },
};
