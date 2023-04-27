export const formatarDataHora = (createdAt: any) => {
  const data = new Date(createdAt);
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear().toString();
  const hour = data.getHours().toString().padStart(2, "0");
  const minute = data.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hour}:${minute}`;
};
