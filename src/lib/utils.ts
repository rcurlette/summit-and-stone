export const formatDate = (dateField: any): string => {
  return new Date(dateField.datetime).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
