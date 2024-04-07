// 1 array med 3 objekt (varav varje objekt har en property array och en property titel). Nås genom useState "task". Så tasks[0].tasks[0].taskTitle ger titeln på det första kortet i den första kolumnen.

export let taskdata = [
  {
    columnTitle: "To Do",
    tasks: [
      {
        taskTitle: "To Do Title",
        content: "To Do stuff",
        date: "2024-01-01",
      },
      {
        taskTitle: "To Do Title 2",
        content: "To Do text",
        date: "2024-01-01",
      },
    ],
  },
  {
    columnTitle: "Doing",
    tasks: [
      {
        taskTitle: "Doing Title",
        content: "Doing content",
        date: "2024-01-01",
      },
      {
        taskTitle: "Doing Title 2",
        content: "Doing text",
        date: "2024-01-01",
      },
    ],
  },
  {
    columnTitle: "Done",
    tasks: [
      {
        taskTitle: "Done Title",
        content: "Done text",
        date: "2024-01-01",
      },
      {
        taskTitle: "Done Title 2",
        content: "Done content",
        date: "2024-01-01",
      },
    ],
  },
];
