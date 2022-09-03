export const useMarksColumns = () => {
  const columns = [
    {
      field: "id",
      hide: true,
    },
    {
      field: "subjectName",
      headerName: "Subject Name",
      flex: 0.2,
    },
    {
      field: "therotical",
      headerName: "Therotical",
      flex: 0.2,
    },
    {
      field: "theroticalValue",
      headerName: "Value",
      flex: 0.2,
    },
    {
      field: "partical",
      headerName: "Partical",
      flex: 0.2,
    },
    {
      field: "particalValue",
      headerName: "Value",
      flex: 0.2,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 0.2,
    },
  ];

  return columns;
};
